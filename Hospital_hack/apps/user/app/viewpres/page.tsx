"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card"
import { Label } from "@repo/ui/components/ui/label"
import { Input } from "@repo/ui/components/ui/input"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { useEffect, useState } from "react"
import axios from "axios"



const Prescription = ({info}:any) => {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
       <b>Doctor Name : {info.name}</b>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Patient Email</Label>
            <Input id="email" value={info.patientEmail} readOnly />
          </div>
          <div>
            <Label htmlFor="medication">Medication</Label>
            <Input id="medication" value={info.medication }readOnly />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="diagnosis">Diagnosis</Label>
            <Input id="diagnosis" value={info.diagnosis} readOnly />
          </div>
          <div>
            <Label htmlFor="prescription">Prescription Number</Label>
            <Input id="prescription" value={info.prescriptionNumber} readOnly />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="dosage">Dosage</Label>
          <Input id="dosage" value={info.dosage} readOnly />
        </div>
        
        </div>
        
      </CardContent>
    </Card>
  )
}

export default function Component() {
  const [info, setInfo] = useState([] as any);
  console.log(info);
  
  useEffect(() => {
    (async() => {
      const datas = await axios.get("/api/viewprescrip")
      // console.log(datas.data.info);
      setInfo(datas.data.info);
    })()
  },[])

  return (
    <div>
      <CardHeader className="font-bold text-center text-2xl">Prescriptions</CardHeader>
    <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-9 m-5">
      {info?.map((i:any) => <Prescription info = {i} />)}
    </div>
    </div>
  )
}