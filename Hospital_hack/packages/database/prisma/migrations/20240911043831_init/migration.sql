-- CreateTable
CREATE TABLE "DoctorInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "DoctorInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PillRefill" (
    "id" SERIAL NOT NULL,
    "prescriptionNumber" TEXT NOT NULL,
    "medicationName" TEXT NOT NULL,
    "prescribingDoctor" TEXT NOT NULL,
    "additionalNotes" TEXT,
    "patientEmail" TEXT NOT NULL,
    "PatientName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,

    CONSTRAINT "PillRefill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalHistory" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientEmail" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "doctorEmail" TEXT NOT NULL,
    "doctorName" TEXT NOT NULL,

    CONSTRAINT "MedicalHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "doctorEmail" TEXT NOT NULL,
    "patientEmail" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentHistory" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientEmail" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "PaymentHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DoctorInfo_email_key" ON "DoctorInfo"("email");

-- AddForeignKey
ALTER TABLE "DoctorInfo" ADD CONSTRAINT "DoctorInfo_email_fkey" FOREIGN KEY ("email") REFERENCES "Doctor"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PillRefill" ADD CONSTRAINT "PillRefill_patientEmail_fkey" FOREIGN KEY ("patientEmail") REFERENCES "Patient"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistory" ADD CONSTRAINT "MedicalHistory_patientEmail_fkey" FOREIGN KEY ("patientEmail") REFERENCES "Patient"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistory" ADD CONSTRAINT "MedicalHistory_doctorEmail_fkey" FOREIGN KEY ("doctorEmail") REFERENCES "Doctor"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_doctorEmail_fkey" FOREIGN KEY ("doctorEmail") REFERENCES "Doctor"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_patientEmail_fkey" FOREIGN KEY ("patientEmail") REFERENCES "Patient"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentHistory" ADD CONSTRAINT "PaymentHistory_patientEmail_fkey" FOREIGN KEY ("patientEmail") REFERENCES "Patient"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
