/*
  Warnings:

  - You are about to drop the column `diagnosis` on the `Prescription` table. All the data in the column will be lost.
  - You are about to drop the column `prescriptionNumber` on the `Prescription` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Prescription_prescriptionNumber_key";

-- AlterTable
ALTER TABLE "Prescription" DROP COLUMN "diagnosis",
DROP COLUMN "prescriptionNumber",
ADD COLUMN     "quantity" TEXT,
ADD COLUMN     "takein" TEXT;
