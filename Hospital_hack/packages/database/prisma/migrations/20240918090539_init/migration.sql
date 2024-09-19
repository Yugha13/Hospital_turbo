-- AlterTable
ALTER TABLE "PatientInfo" ADD COLUMN     "address" TEXT,
ADD COLUMN     "age" TEXT,
ADD COLUMN     "allergies" TEXT,
ALTER COLUMN "phone" DROP NOT NULL;
