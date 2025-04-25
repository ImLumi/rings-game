/*
  Warnings:

  - A unique constraint covering the columns `[inviteCode]` on the table `GameSession` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "GameSession" ALTER COLUMN "inviteCode" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "GameSession_inviteCode_key" ON "GameSession"("inviteCode");
