/*
  Warnings:

  - Added the required column `experiance` to the `DoctorInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialist` to the `DoctorInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DoctorInfo" ADD COLUMN     "experiance" INTEGER NOT NULL,
ADD COLUMN     "specialist" TEXT NOT NULL;
