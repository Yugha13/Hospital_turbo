"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@repo/ui/components/ui/card";
import { Label } from "@repo/ui/components/ui/label";
import { Input } from "@repo/ui/components/ui/input";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Button } from "@repo/ui/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@repo/ui/hooks/use-toast"
import { ToastAction } from "@repo/ui/components/ui/toast"



export default function Component() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(formData);
    const response = await axios.post("/api/prescription", { ...formData });
    // console.log(response);
    setFormData({} as any);
    toast({
      title: "Prescription sent:",
      description: `Your prescription for has been sent`,
      action: (
        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      ),
    })
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((cur) => ({ ...cur, [id]: value }));
  };

  return (
    <div className="grid h-[90vh] place-items-center">
    <Card className="w-full max-w-2xl">
      <form onSubmit={handleSubmit}>
      <CardHeader>
        <CardTitle>Medication Prescription</CardTitle>
        <CardDescription>Fill out the form to send a prescription to your patient.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="medication">Medication Name</Label>
            <Input 
              id="medication"
              value={formData?.medication || ""}
              onChange={handleChange}
              placeholder="Enter medication name" 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dosage">Dosage</Label>
            <Input 
              id="dosage" 
              onChange={handleChange}
              value={formData?.dosage || ""}
              placeholder="Enter dosage" 
              required 
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="doctor">Doctor's Name</Label>
            <Input 
              id="name" 
              onChange={handleChange}
              value={formData?.name || ""}
              placeholder="Enter doctor's name" 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input 
              id="date" 
              type="date" 
              onChange={handleChange}
              value={formData?.date || ""}
              required 
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Patient's Email</Label>
            <Input 
              id="patientEmail" 
              type="email" 
              onChange={handleChange}
              value={formData?.patientEmail || ""}
              placeholder="Enter patient's email" 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input 
              id="quantity" 
              type="number" 
              onChange={handleChange}
              value={formData?.quantity || ""}
              placeholder="Enter quantity" 
              required 
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="take">When to take</Label>
          <Textarea
            id="takein"
            onChange={handleChange}
            value={formData?.takein || ""}
            placeholder="Morning, Afternoon, Evening, Night"
            className="min-h-[100px]"
            required
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Send Prescription
        </Button>
      </CardFooter>
    </form>
    </Card>
    </div>
  )
}
