/*
  Warnings:

  - You are about to drop the `GameRoom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GameRoomToPuzzle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GameRoom" DROP CONSTRAINT "GameRoom_currentPlayerId_fkey";

-- DropForeignKey
ALTER TABLE "GameRoom" DROP CONSTRAINT "GameRoom_player1Id_fkey";

-- DropForeignKey
ALTER TABLE "GameRoom" DROP CONSTRAINT "GameRoom_player2Id_fkey";

-- DropForeignKey
ALTER TABLE "_GameRoomToPuzzle" DROP CONSTRAINT "_GameRoomToPuzzle_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameRoomToPuzzle" DROP CONSTRAINT "_GameRoomToPuzzle_B_fkey";

-- DropTable
DROP TABLE "GameRoom";

-- DropTable
DROP TABLE "_GameRoomToPuzzle";

-- CreateTable
CREATE TABLE "GameSession" (
    "id" SERIAL NOT NULL,
    "inviteCode" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'prepare',
    "player1Id" UUID NOT NULL,
    "player2Id" UUID,
    "currentRound" INTEGER NOT NULL DEFAULT 1,
    "currentPlayerId" UUID,
    "maxRound" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "GameSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameSessionToPuzzle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_GameSessionToPuzzle_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameSession_player1Id_key" ON "GameSession"("player1Id");

-- CreateIndex
CREATE UNIQUE INDEX "GameSession_player2Id_key" ON "GameSession"("player2Id");

-- CreateIndex
CREATE UNIQUE INDEX "GameSession_currentPlayerId_key" ON "GameSession"("currentPlayerId");

-- CreateIndex
CREATE INDEX "_GameSessionToPuzzle_B_index" ON "_GameSessionToPuzzle"("B");

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_player1Id_fkey" FOREIGN KEY ("player1Id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_player2Id_fkey" FOREIGN KEY ("player2Id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_currentPlayerId_fkey" FOREIGN KEY ("currentPlayerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameSessionToPuzzle" ADD CONSTRAINT "_GameSessionToPuzzle_A_fkey" FOREIGN KEY ("A") REFERENCES "GameSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameSessionToPuzzle" ADD CONSTRAINT "_GameSessionToPuzzle_B_fkey" FOREIGN KEY ("B") REFERENCES "Puzzle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
