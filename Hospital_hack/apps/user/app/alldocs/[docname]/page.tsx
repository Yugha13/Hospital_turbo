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
  // console.log(params);


  const [ date, setDate ] = useState();
  const [ formData, setFormData ] = useState({});

  const handleSubmit = async(e : any) => {
    e.preventDefault();
    // console.log(formData);
    try {
      await axios.post("/api/appointment", {...formData ,date});
      console.log(formData.time);
      // toast("Appointment is booked");
      setFormData("");
      // console.log("appointment booked");
      // toast({
      //   title: "Appointment Scheduled:",
      //   description: `0n ${date} at ${formData.time}`,
      // })
    } catch (e) {
      console.log("Email or Phone number is Wrong");
      // toast({
      //   title: "Appointment Not Scheduled:",
      //   description: "Reason : Give Valid Inputs",
      // })
    }
    
  }
  const handleChange = (e:any)  => {
    // console.log(e);
    const name = e.target?.id;
    const value = e.target?.value;

    setFormData((cur:any) => ({...cur, [name]: value}));   
  }
  
  useEffect(() => {
    (async() => {
        const {data} = await axios.post("/api/alldocs", {id: params.id});
        setFormData({doctorEmail: data.email})
        
        // setState
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