/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `MxVagabundo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MxVagabundo_email_key" ON "MxVagabundo"("email");
