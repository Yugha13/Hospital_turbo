/*
  Warnings:

  - Added the required column `dosage` to the `Prescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Prescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prescription" ADD COLUMN     "dosage" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
