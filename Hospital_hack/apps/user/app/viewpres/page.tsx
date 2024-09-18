"use client"

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@repo/ui/components/ui/table"
import { useEffect, useState } from "react"
import axios from "axios"
import { format } from 'date-fns';
import Link from "next/link";

// Group prescriptions by date
const groupByDate = (prescriptions: any[]) => {
  return prescriptions.reduce((groups: any, prescription: any) => {
    const { date } = prescription;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(prescription);
    return groups;
  }, {});
};

// Prescription Table Component
const PrescriptionTable = ({ date, prescriptions }: { date: string, prescriptions: any[] }) => {
  const month = format(date, "dd MMMM yyyy");
  
  return (
    <div className="border rounded-lg overflow-hidden mb-4">
      
      <div className="bg-primary text-primary-foreground px-6 py-4 font-medium">Slot Date - {month}</div>
      <div className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Doctor Name</TableHead>
              <TableHead>Tablet</TableHead>
              <TableHead>Dosage</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>When to Take</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prescriptions.map((prescription: any) => (
              <TableRow key={prescription.id}>
                <TableCell>{prescription.name}</TableCell>
                <TableCell>{prescription.medication}</TableCell>
                <TableCell>{prescription.dosage}mg</TableCell>
                <TableCell>{prescription.quantity}</TableCell>
                <TableCell>{prescription.takein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

// Main Component
export default function Component() {
  const [info, setInfo] = useState([] as any);
  
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/viewprescrip");
      setInfo(data.info);
    })();
  }, []);

  // Group prescriptions by date
  const groupedPrescriptions = groupByDate(info);

  return (
    <div className="grid gap-8 max-w-4xl mx-auto px-4 py-8">
      <div className="text-center font-mono font-extrabold text-xl">Prescriptions</div>
      <Link href="/sample">
        <div className="text-center hover:underline text-primary">
          Click here and download it in pdf.
        </div>
      </Link>
      {Object.keys(groupedPrescriptions).map((date) => (
        <PrescriptionTable key={date} date={date} prescriptions={groupedPrescriptions[date]} />
      ))}
    </div>
  );
}