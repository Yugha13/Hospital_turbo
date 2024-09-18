"use client"

import * as React from "react"
import { format, isBefore, isToday } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@repo/ui/lib/utils"
import { Calendar } from "@repo/ui/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/components/ui/popover"
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { useToast } from "@repo/ui/hooks/use-toast"
import { ToastAction } from "@repo/ui/components/ui/toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select"
import axios from "axios";
import { useEffect, useState } from "react";





const page = ({ params }: any) => {
  const { toast } = useToast()

  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState<string>("")
  const [formData, setFormData] = useState({} as any)

  // Get today's date
  const todayDate = format(new Date(), "PPP")

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!date || !time) {
      toast({
        title: "Error",
        description: "Please select both date and time.",
        status: "error",
      })
      return
    }

    await axios.post("/api/appointment", { ...formData, date, time })
    setFormData({} as any)
    setDate(null)
    setTime("")

    toast({
      title: "Your Appointment Is On Pending:",
      description: "You will be notified once confirmed.",
      action: (
        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      ),
    })
  }

  const handleChange = (e: any) => {
    const name = e.target?.id
    const value = e.target?.value
    setFormData((cur: any) => ({ ...cur, [name]: value }))
  }

  useEffect(() => {
    (async () => {
      const { data } = await axios.post("/api/alldocs", { id: +params.docname })
      setFormData({ doctorEmail: data.email })
    })()
  }, [])

  const disablePastDates = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return isBefore(date, today);
  };

  const isTimeDisabled = (slotTime: string) => {
    if (!date || !isToday(date)) return false;
    const [startHour] = slotTime?.split(' ')[0]?.split(':').map(Number) ?? [];
    const currentHour = new Date().getHours();
    return startHour !== undefined && startHour <= currentHour;
  }

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
              <Input
                id="name"
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => disablePastDates(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Appointment Time</Label>
              <Select
                onValueChange={(value) => {
                  setTime(value)
                }}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose the time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="08:00 - 10:00" disabled={isTimeDisabled("08:00")}>
                    08 AM - 10 AM
                  </SelectItem>
                  <SelectItem value="12:00 - 14:00" disabled={isTimeDisabled("12:00")}>
                    12 PM - 02 PM
                  </SelectItem>
                  <SelectItem value="18:00 - 20:00" disabled={isTimeDisabled("18:00")}>
                    06 PM - 08 PM
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Appointment</Label>
            <Textarea
              id="reason"
              value={formData.reason || ""}
              placeholder="Describe the reason for your visit"
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" type="submit">
            Book Appointment
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

export default page