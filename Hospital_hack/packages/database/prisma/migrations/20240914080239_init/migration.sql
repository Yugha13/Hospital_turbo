-- CreateTable
CREATE TABLE "LabResult" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "test" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "result" TEXT NOT NULL,

    CONSTRAINT "LabResult_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LabResult" ADD CONSTRAINT "LabResult_email_fkey" FOREIGN KEY ("email") REFERENCES "Patient"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
