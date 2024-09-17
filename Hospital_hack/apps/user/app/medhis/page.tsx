"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const LabResult = ({ result }: any) => {
  return (
    <tr className="border-b" style={{ borderColor: "hsl(var(--border))" }}>
      <td className="px-4 py-2" style={{ color: "hsl(var(--primary-foreground))" }}>
        {result.test}
      </td>
      <td className="px-4 py-2" style={{ color: "hsl(var(--muted-foreground))" }}>
        {result.date}
      </td>
      <td className="px-4 py-2" style={{ color: "hsl(var(--primary))" }}>
        {result.result}
      </td>
    </tr>
  );
};

const Prescription = ({ info }: any) => {
  return (
    <tr className="border-b" style={{ borderColor: "hsl(var(--border))" }}>
      <td className="px-4 py-2" style={{ color: "hsl(var(--primary-foreground))" }}>
        {info.name}
      </td>
      <td className="px-4 py-2" style={{ color: "hsl(var(--muted-foreground))" }}>
        {info.medication}
      </td>
      <td className="px-4 py-2" style={{ color: "hsl(var(--primary))" }}>
        {info.dosage}
      </td>
    </tr>
  );
};

export default function Component() {
  const [info, setInfo] = useState([] as any);
  const [result, setResult] = useState([] as any);

  useEffect(() => {
    (async () => {
      const datas = await axios.get("/api/viewprescrip");
      const result = await axios.get("/api/labresult");
      setResult(result.data.info);
      setInfo(datas.data.info);
    })();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-6" style={{ color: "hsl(var(--foreground))" }}>
        Patient Health Record
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>
            Lab Results
          </h2>
          <div className="shadow-lg rounded-lg p-6" style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--secondary-foreground))" }}>
                    <th className="px-4 py-2 text-left">Test</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {result?.map((i: any) => (
                    <LabResult key={i.id} result={i} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>
            Prescriptions
          </h2>
          <div className="shadow-lg rounded-lg p-6" style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--secondary-foreground))" }}>
                    <th className="px-4 py-2 text-left">Prescribed by</th>
                    <th className="px-4 py-2 text-left">Medication</th>
                    <th className="px-4 py-2 text-left">Dosage</th>
                  </tr>
                </thead>
                <tbody>
                  {info?.map((i: any) => (
                    <Prescription key={i.id} info={i} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>
            Past Treatments
          </h2>
          <div className="shadow-lg rounded-lg p-6" style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
            <div className="space-y-6">
              <div className="p-4" style={{ backgroundColor: "hsl(var(--muted))", borderRadius: "var(--radius)" }}>
                <h3 className="text-lg font-bold" style={{ color: "hsl(var(--foreground))" }}>
                  Physical Therapy
                </h3>
                <p className="text-gray-600">2023-01-15 to 2023-03-15</p>
                <p style={{ color: "hsl(var(--primary))" }}>Completed 12 sessions for lower back pain.</p>
              </div>
              <div className="p-4" style={{ backgroundColor: "hsl(var(--muted))", borderRadius: "var(--radius)" }}>
                <h3 className="text-lg font-bold" style={{ color: "hsl(var(--foreground))" }}>
                  Flu Shot
                </h3>
                <p className="text-gray-600">2022-10-20</p>
                <p style={{ color: "hsl(var(--primary))" }}>Routine annual flu vaccination.</p>
              </div>
              <div className="p-4" style={{ backgroundColor: "hsl(var(--muted))", borderRadius: "var(--radius)" }}>
                <h3 className="text-lg font-bold" style={{ color: "hsl(var(--foreground))" }}>
                  Colonoscopy
                </h3>
                <p className="text-gray-600">2022-06-01</p>
                <p style={{ color: "hsl(var(--primary))" }}>Routine screening, no abnormalities found.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}