-- CreateEnum
CREATE TYPE "Role" AS ENUM ('player', 'admin');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('prepare', 'running', 'ended');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" CHAR(255) NOT NULL DEFAULT 'Player',
    "role" "Role" NOT NULL DEFAULT 'player',
    "accessToken" TEXT NOT NULL,
    "ready" BOOLEAN NOT NULL DEFAULT false,
    "score" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameRoom" (
    "id" SERIAL NOT NULL,
    "inviteCode" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'prepare',
    "player1Id" UUID NOT NULL,
    "player2Id" UUID,
    "currentRound" INTEGER NOT NULL DEFAULT 1,
    "currentPlayerId" UUID,
    "maxRound" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "GameRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Puzzle" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "taskText" TEXT NOT NULL,
    "size" INTEGER NOT NULL DEFAULT 600,
    "targetPositionX" DOUBLE PRECISION NOT NULL,
    "targetPositionY" DOUBLE PRECISION NOT NULL,
    "targetRadius" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Puzzle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameRoomToPuzzle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_GameRoomToPuzzle_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameRoom_player1Id_key" ON "GameRoom"("player1Id");

-- CreateIndex
CREATE UNIQUE INDEX "GameRoom_player2Id_key" ON "GameRoom"("player2Id");

-- CreateIndex
CREATE UNIQUE INDEX "GameRoom_currentPlayerId_key" ON "GameRoom"("currentPlayerId");

-- CreateIndex
CREATE INDEX "_GameRoomToPuzzle_B_index" ON "_GameRoomToPuzzle"("B");

-- AddForeignKey
ALTER TABLE "GameRoom" ADD CONSTRAINT "GameRoom_player1Id_fkey" FOREIGN KEY ("player1Id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameRoom" ADD CONSTRAINT "GameRoom_player2Id_fkey" FOREIGN KEY ("player2Id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameRoom" ADD CONSTRAINT "GameRoom_currentPlayerId_fkey" FOREIGN KEY ("currentPlayerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameRoomToPuzzle" ADD CONSTRAINT "_GameRoomToPuzzle_A_fkey" FOREIGN KEY ("A") REFERENCES "GameRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameRoomToPuzzle" ADD CONSTRAINT "_GameRoomToPuzzle_B_fkey" FOREIGN KEY ("B") REFERENCES "Puzzle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
