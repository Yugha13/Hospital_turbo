/*
  Warnings:

  - You are about to drop the `MedicalHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MedicalHistory" DROP CONSTRAINT "MedicalHistory_doctorEmail_fkey";

-- DropForeignKey
ALTER TABLE "MedicalHistory" DROP CONSTRAINT "MedicalHistory_patientEmail_fkey";

-- DropTable
DROP TABLE "MedicalHistory";
