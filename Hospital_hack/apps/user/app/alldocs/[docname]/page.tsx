"use client"

import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Textarea } from "@repo/ui/components/ui/textarea";
// import { toast } from "@sonner"



import axios from "axios";
import { useEffect, useState } from "react";




// const { toast } = useToast();
const page = ({params}:any) => {
  // console.log(params.docname);


  const [ date, setDate ] = useState();
  const [ formData, setFormData ] = useState({});

  const handleSubmit = async(e : any) => {
    // console.log(formData);
    e.preventDefault();
    await axios.post("/api/appointment", {...formData ,date});
  }
  const handleChange = (e:any)  => {
    // console.log(e);
    const name = e.target?.id;
    const value = e.target?.value;
    setFormData((cur:any) => ({...cur, [name]: value}));   
  }
  
  useEffect(() => {
    (async() => {
        const {data} = await axios.post("/api/alldocs", {id: +params.docname});
        setFormData({doctorEmail: data.email})
        // console.log(params);
        // console.log(data);
    })();
  }, [])

  
  return (
    <form className="grid h-[95vh] place-items-center w-screen" onSubmit={handleSubmit}>
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Book Doctor Appointment</CardTitle>
        <CardDescription>Fill out the form to schedule your appointment.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" 
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone"
              type="tel" 
              placeholder="(+91) 45656-77890" 
              onChange={handleChange}
              required
            />
          </div>
        </div>      
          
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Appointment Date</Label>
            <Input onChange={(e:any) => {setDate(e.target.value)}} required type="date"/>
          </div>
          <div className="space-y-2">
          <Label htmlFor="time">Appointment Time</Label>
          <Input type="time" id="time" onChange={handleChange} required />
        </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="reason">Reason for Appointment</Label>
          <Textarea 
            id="reason" 
            placeholder="Describe the reason for your visit" 
            onChange={handleChange}
            required
          />
        </div>
        
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Book Appointment
        </Button>
        
      </CardFooter>
    </Card>
    </form>
  )
}

export default page