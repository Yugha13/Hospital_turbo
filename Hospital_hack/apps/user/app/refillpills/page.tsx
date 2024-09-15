"use client"
import { useEffect, useState } from 'react'
import { Button } from "@repo/ui/components/ui/button"
import { Input } from "@repo/ui/components/ui/input"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Label } from "@repo/ui/components/ui/label"
import axios from 'axios'

export default function Component() {
  const [formData, setFormData] = useState({
    PatientName: '',
    contactNumber: '',
    prescriptionNumber: '',
    medicationName: '',
    prescribingDoctor: '',
    additionalNotes: ''
  })

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    await axios.post("/api/pillreq", {...formData});
    // console.log('Form submitted:', formData)
    setFormData({
      PatientName: '',   
      contactNumber: '', 
      prescriptionNumber: '',
      medicationName: '',
      prescribingDoctor: '',
      additionalNotes: ''
    })
  }

  return (
    <div className='h-full flex place-items-center mt-4'>
    <form onSubmit={handleSubmit} className="space-y-6  mx-auto p-6 bg-white rounded-lg ">
      <h2 className="text-2xl font-bold text-center mb-6">Prescription Refill Request</h2>
      
      <div className="space-y-2">
        <Label htmlFor="PatientName">Patient Name</Label>
        <Input
          id="PatientName"
          name="PatientName"
          value={formData.PatientName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactNumber">Contact Number</Label>
        <Input
          id="contactNumber"
          name="contactNumber"
          type="tel"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="prescriptionNumber">Prescription Number</Label>
        <Input
          id="prescriptionNumber"
          name="prescriptionNumber"
          value={formData.prescriptionNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="medicationName">Medication Name</Label>
        <Input
          id="medicationName"
          name="medicationName"
          value={formData.medicationName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="prescribingDoctor">Prescribing Doctor</Label>
        <Input
          id="prescribingDoctor"
          name="prescribingDoctor"
          value={formData.prescribingDoctor}
          onChange={handleChange}
          required
        />
      </div>


      <div className="space-y-2">
        <Label htmlFor="additionalNotes">Additional Notes</Label>
        <Textarea
          id="additionalNotes"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full">Submit Refill Request</Button>
    </form>
    </div>
  )
}