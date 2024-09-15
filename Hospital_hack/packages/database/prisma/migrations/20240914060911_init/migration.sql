/*
  Warnings:

  - You are about to drop the column `doctorNote` on the `Prescription` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Prescription" DROP COLUMN "doctorNote",
ADD COLUMN     "doctorName" TEXT;
