"use client"

import { useRef } from 'react';
// @ts-ignore
import html2pdf from 'html2pdf.js';


const PrescriptionTemplate: React.FC = () => {
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
          <h1 className="text-primary text-2xl sm:text-3xl font-bold">PRESCRIPTION TEMPLATE</h1>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <p>
              <strong>Prescription No.</strong> <br />
              0001
            </p>
          </div>
          <div>
            <p>
              <strong>Prescription Date</strong> <br />
              November 8, 2021
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6 border-b-2 border-border pb-6">
          <div>
            <h3 className="text-lg font-bold">Patient Information</h3>
            <p>
              <strong>Name:</strong> Anne Burton <br />
              <strong>Phone Number:</strong> (123) 123-4567 <br />
              <strong>Email:</strong> anne.burton@noemailtest.com <br />
              <strong>Address:</strong> 1372 Payne Street, Richlands, VA 24641
            </p>
            <p>
              <strong>Allergies:</strong> Seafood
            </p>
          </div>
          <div>
            <p>
              <strong>Age:</strong> 30 <br />
              <strong>Date of Birth:</strong> Wednesday, November 8, 1989 <br />
              <strong>Gender:</strong> Female
            </p>
            <p>
              <strong>Notable Health Condition:</strong> None
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
                  <th className="border border-border p-2">Medication Name</th>
                  <th className="border border-border p-2">Purpose</th>
                  <th className="border border-border p-2">Dosage</th>
                  <th className="border border-border p-2">Route</th>
                  <th className="border border-border p-2">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2 text-center">Expectorant</td>
                  <td className="border border-border p-2 text-center">Removes phlegm</td>
                  <td className="border border-border p-2 text-center">1 tablet</td>
                  <td className="border border-border p-2 text-center">Oral</td>
                  <td className="border border-border p-2 text-center">Every 4 hours</td>
                </tr>
                <tr>
                  <td className="border border-border p-2 text-center">Paracetamol</td>
                  <td className="border border-border p-2 text-center">For fever</td>
                  <td className="border border-border p-2 text-center">1 tablet</td>
                  <td className="border border-border p-2 text-center">Oral</td>
                  <td className="border border-border p-2 text-center">Every 4 hours</td>
                </tr>
                <tr>
                  <td className="border border-border p-2 text-center">Anti-biotic</td>
                  <td className="border border-border p-2 text-center">Bacterial infection</td>
                  <td className="border border-border p-2 text-center">500mg</td>
                  <td className="border border-border p-2 text-center">Oral</td>
                  <td className="border border-border p-2 text-center">Every 8 hours</td>
                </tr>
                <tr>
                  <td className="border border-border p-2 text-center">Vitamin C</td>
                  <td className="border border-border p-2 text-center">Immune system</td>
                  <td className="border border-border p-2 text-center">500mg</td>
                  <td className="border border-border p-2 text-center">Oral</td>
                  <td className="border border-border p-2 text-center">Once a day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Physician Information */}
        <div className="flex flex-col sm:flex-row justify-between items-start mt-8">
          <div className="mb-4 sm:mb-0">
            <p>
              <strong>Physician Name:</strong> Leslie Holden <br />
            </p>
            
          </div>
          <div>
            <p>
              <strong>Physician Phone Number:</strong> (112) 312-3456 <br />
              <strong>Physician Email:</strong> leslie.h@noemail.com
            </p>
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