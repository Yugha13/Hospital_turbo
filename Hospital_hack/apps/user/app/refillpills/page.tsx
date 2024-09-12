"use client"
import { useState } from 'react'
import { Button } from "@repo/ui/components/ui/button"
import { Input } from "@repo/ui/components/ui/input"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Label } from "@repo/ui/components/ui/label"

export default function Component() {
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    prescriptionNumber: '',
    medicationName: '',
    prescribingDoctor: '',
    pharmacyPreference: '',
    additionalNotes: ''
  })

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e : any) => {
    e.preventDefault()
    
    console.log('Form submitted:', formData)
    
    setFormData({
      patientName: '',
      dateOfBirth: '',
      contactNumber: '',
      email: '',
      prescriptionNumber: '',
      medicationName: '',
      prescribingDoctor: '',
      pharmacyPreference: '',
      additionalNotes: ''
    })
  }

  return (
    <div className='h-full flex place-items-center'>
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-lg ">
      <h2 className="text-2xl font-bold text-center mb-6">Prescription Refill Request</h2>
      
      <div className="space-y-2">
        <Label htmlFor="patientName">Patient Name</Label>
        <Input
          id="patientName"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
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
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
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