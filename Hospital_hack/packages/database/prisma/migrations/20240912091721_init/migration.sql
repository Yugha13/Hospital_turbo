/*
  Warnings:

  - You are about to drop the column `patientEmail` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `email` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_patientEmail_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "patientEmail",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" INTEGER NOT NULL,
ADD COLUMN     "reason" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_email_fkey" FOREIGN KEY ("email") REFERENCES "Patient"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
