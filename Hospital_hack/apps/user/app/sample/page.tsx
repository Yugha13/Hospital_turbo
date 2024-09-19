"use client"

import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import html2pdf from 'html2pdf.js';
import axios from 'axios';

const TableRow = ({ pres }: any) => {
  return (
    <tr>
      <td className="border border-border p-2 text-center">{pres.id}</td>
      <td className="border border-border p-2 text-center">{pres.date}</td>
      <td className="border border-border p-2 text-center">{pres.name}</td>
      <td className="border border-border p-2 text-center">{pres.medication}</td>
      <td className="border border-border p-2 text-center">{pres.quantity}</td>
      <td className="border border-border p-2 text-center">{pres.dosage}</td>
      <td className="border border-border p-2 text-center">{pres.takein}</td>
    </tr>
  );
};

const PrescriptionTemplate: React.FC = () => {
  const [info, setInfo] = useState([] as any);
  const [pres, setPres] = useState([] as any);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/medpdf");
      setInfo(data.info.patientInfo);
      setPres(data.info.prescription);
      console.log(data.info);
    })();
  }, []);

  const date = new Date(info.dob).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const prescriptionRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = () => {
    if (!prescriptionRef.current) return;

    const element = prescriptionRef.current;

    const options = {
      margin: 0.5,
      filename: 'prescription.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf()
      .from(element)
      .set(options)
      .save();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-card text-card-foreground border border-border rounded-md">
      <div ref={prescriptionRef}>
        <div className="text-center border-b-4 border-primary pb-4 mb-6">
          <h1 className="text-primary text-2xl sm:text-3xl font-bold">PRESCRIPTION</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <p>
              {/* <strong>Prescription No.</strong> <br /> */}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6 border-b-2 border-border pb-6">
          <div>
            <h3 className="text-lg font-bold">Patient Information</h3>
            <p>
              <strong>Name:</strong> {info.name} <br />
              <strong>Phone Number:</strong> {info.phone} <br />
              <strong>Email:</strong> {info.email} <br />
              <strong>Address:</strong> 1372 Payne Street, Richlands, VA 24641
            </p>
            <p>
              <strong>Allergies:</strong> Seafood
            </p>
          </div>
          <div>
            <p>
              <strong>Age:</strong> 30 <br />
              <strong>Date of Birth:</strong> {date} <br />
              <strong>Gender:</strong> {info.gender}
            </p>
            <p>
              <strong>Notable Health Condition:</strong> {info.healthIssues}
            </p>
          </div>
        </div>

        {/* Medication List */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">List of Prescribed Medications</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-border">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  <th className="border border-border p-2">Prescription ID</th>
                  <th className="border border-border p-2">Prescribed Date</th>
                  <th className="border border-border p-2">Prescribed By</th>
                  <th className="border border-border p-2">Medication Name</th>
                  <th className="border border-border p-2">Pill Quantity</th>
                  <th className="border border-border p-2">Dosage</th>
                  <th className="border border-border p-2">When to Take</th>
                </tr>
              </thead>
              <tbody>
                {pres.map((i: any) => (
                  <TableRow key={i.id} pres={i} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
      </div>
      <div className="text-right m-4">
        <button
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-foreground hover:text-white transition duration-300"
          onClick={handleDownload}
        >
          Download PDF
        </button>
        
      </div>
    </div>
  );
};

export default PrescriptionTemplate;