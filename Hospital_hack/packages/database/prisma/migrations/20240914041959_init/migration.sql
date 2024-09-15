-- CreateTable
CREATE TABLE "Prescription" (
    "id" SERIAL NOT NULL,
    "prescriptionNumber" TEXT NOT NULL,
    "medication" TEXT NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "doctorNote" TEXT,
    "patientEmail" TEXT NOT NULL,
    "doctorEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prescription_prescriptionNumber_key" ON "Prescription"("prescriptionNumber");

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_patientEmail_fkey" FOREIGN KEY ("patientEmail") REFERENCES "Patient"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_doctorEmail_fkey" FOREIGN KEY ("doctorEmail") REFERENCES "Doctor"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
