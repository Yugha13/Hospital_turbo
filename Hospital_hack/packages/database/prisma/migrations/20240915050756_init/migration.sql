/*
  Warnings:

  - You are about to drop the column `experiance` on the `DoctorInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DoctorInfo" DROP COLUMN "experiance",
ADD COLUMN     "experience" TEXT,
ALTER COLUMN "specialist" DROP NOT NULL;
