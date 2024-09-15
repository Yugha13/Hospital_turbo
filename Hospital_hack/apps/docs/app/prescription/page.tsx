"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@repo/ui/components/ui/card";
import { Label } from "@repo/ui/components/ui/label";
import { Input } from "@repo/ui/components/ui/input";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Button } from "@repo/ui/components/ui/button";
import axios from "axios";
import { useState } from "react";


export default function Component() {
  const [formData, setFormData] = useState({});
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await axios.post("/api/prescription", { ...formData });
      console.log("Response:", response);
    } catch (error) {
      // console.error("Errors:", error);
    }
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((cur) => ({ ...cur, [id]: value }));
  };

  return (
    <div className="flex h-[95vh] place-items-center">
      <Card className="w-full max-w-2xl mx-auto p-6 sm:p-8 md:p-10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Patient Prescription</CardTitle>
          <CardDescription>
            Fill out the details for the patient's prescription.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="patientEmail">Patient Email</Label>
                <Input
                  id="patientEmail"
                  onChange={handleChange}
                  placeholder="Enter patient's email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="medication">Medication</Label>
                <Input
                  id="medication"
                  onChange={handleChange}
                  placeholder="Enter medication name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="diagnosis">Diagnosis</Label>
                <Textarea
                  id="diagnosis"
                  rows={3}
                  onChange={handleChange}
                  placeholder="Enter patient's diagnosis"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="prescriptionNumber">Prescription Number</Label>
                <Input
                  id="prescriptionNumber"
                  onChange={handleChange}
                  placeholder="Enter Prescription Number"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dosage">Dosage</Label>
                <Input
                  id="dosage"
                  onChange={handleChange}
                  placeholder="Enter dosage"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Doctor's Name</Label>
                <Input
                  id="name"
                  onChange={handleChange}
                  placeholder="Enter doctor's name"
                />
              </div>
            </div>
            <div className="col-span-full">
              <Button type="submit" className="ml-auto">
                Submit Prescription
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
