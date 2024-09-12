"use client"
import axios from "axios";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { Label } from "@repo/ui/components/ui/label"
import { Input } from "@repo/ui/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@repo/ui/components/ui/select"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Button } from "@repo/ui/components/ui/button"

import {  useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function Component() {
  const navigate = useRouter();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    (async() => {
      try{
        await axios.get("/api/healthcheck");
        // console.log(data);
        navigate.push("/dashboard")
      } catch(e) {
        //pass

      }
    })()
  })

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // console.log(formData);
    await axios.post("/api/healthcheck", formData);
    navigate.push("/dashboard");
  }

  const handleChange = (e:any)  => {
    // console.log(e);
    const name = e?.target?.id;
    const value = e.target?.value;    
    setFormData(cur => ({...cur, [name]: value}));

  }
  const genderChange = (e:string) => {
    setFormData(cur => ({...cur, gender: e}));
  }
  return (
    <div className="grid place-items-center h-[90vh] w-full">
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Medical History Form</CardTitle>
        <CardDescription>Please fill out the following information about your medical history.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" 
        onSubmit = {handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  onChange={handleChange}
                  id="name" 
                  placeholder="John" 
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input 
                  id="dob" 
                  onChange={handleChange}
                  type="date" 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender" >Gender</Label>
                <Select onValueChange={genderChange} >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent  >
                    <SelectItem value="male" >Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                type="tel" 
                onChange={handleChange}
                placeholder="(91) 12345 67890" 
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input 
                id="emergencyNumber" 
                onChange={handleChange}
                placeholder="Emergency Contact" 
              />
            </div>


          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentHealth">Current Health Status</Label>
              <Textarea id="healthIssues" onChange={handleChange} rows={3} placeholder="Describe your current health status..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="medicalHistory" >Medical History</Label>
              <Textarea id="medicalHistory" onChange={handleChange} rows={3} placeholder="Describe your medical history..." />
            </div>
          </div>

            <CardFooter className="mr-auto">
              <Button>Submit</Button>
            </CardFooter>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}