"use client"

import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Textarea } from "@repo/ui/components/ui/textarea";
// import { toast } from "@sonner"
import { useToast } from "@repo/ui/hooks/use-toast"
import { ToastAction } from "@repo/ui/components/ui/toast"



import axios from "axios";
import { useEffect, useState } from "react";




// const { toast } = useToast();
const page = ({params}:any) => {
  // console.log(params.docname);
  const { toast } = useToast()

  const [ date, setDate ] = useState();
  const [ formData, setFormData ] = useState({} as any);


  const handleSubmit = async(e : any) => {
    // console.log(formData);
    e.preventDefault();
    await axios.post("/api/appointment", {...formData ,date});
    setFormData({} as any)
    // console.log(formData);
    setDate(null as any)
    toast({
      title: "Appointment Scheduled:",
      description: `on ${date} at ${formData.time}`,
      action: (
        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      ),
    })
    
  }
  const handleChange = (e:any)  => {
    // console.log(e);
    const name = e.target?.id;
    const value = e.target?.value;
    // console.log(value);
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
      {/* <Button onClick={() => {setsome(!some)}}></Button> */}
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" 
              value={formData.name || ""}
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              value={formData.phone || ""}
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
            <Input value={date || ""} onChange={(e:any) => {setDate(e.target.value)}} required type="date" id="date"/>
          </div>
          <div className="space-y-2">
          <Label htmlFor="time">Appointment Time</Label>
          <Input type="time" id="time" value={formData.time || ""} onChange={handleChange} required />
        </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="reason">Reason for Appointment</Label>
          <Textarea 
            id="reason" 
            value = {formData.reason || ""}
            placeholder="Describe the reason for your visit" 
            onChange={handleChange}
            required
          />
        </div>
        
      </CardContent>
      <CardFooter>
      <Button variant="outline" type = "submit">
        Book Appointment
      </Button>
      </CardFooter>
    </Card>
    </form>
  )
}

export default page