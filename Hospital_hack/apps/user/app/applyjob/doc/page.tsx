"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { Label } from "@repo/ui/components/ui/label"
import { Input } from "@repo/ui/components/ui/input"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Button } from "@repo/ui/components/ui/button"
import { toast } from "@repo/ui/hooks/use-toast"



export default function ApplyJob() {
    
    function onSubmit() {
        toast({
          title: "Appointment status :",
          description: (
            "your appointment is booked"
          ),
        })
      }
  return (
    <div className="flex place-items-center h-screen">
    <Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Apply for Doctor Position</CardTitle>
        <CardDescription>Fill out the form below to apply for a doctor role.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={onSubmit}>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your full name" 
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                required 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Enter your phone number" 
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Enter your address" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="education">Education</Label>
              <Textarea 
                id="education" 
                placeholder="List your educational background" 
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="experience">Work Experience</Label>
              <Textarea 
                id="experience" 
                placeholder="Describe your work experience" /
              >
            </div>

            <div className="grid gap-2">
              <Label htmlFor="cover-letter">Cover Letter</Label>
              <Textarea 
                id="cover-letter" 
                placeholder="Write a brief cover letter" 
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="resume">Resume/CV</Label>
              <Input 
                id="resume" 
                type="file" 
                required
              />
            </div>
          </div>
        <CardFooter>
            <Button type="submit" variant={"outline"}>
          Submit Application
        </Button>
      </CardFooter>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}