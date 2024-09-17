"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card"
import { useEffect, useState } from "react"
import axios from "axios"
import { CalendarCheckIcon } from "lucide-react"
import { AppHistory, AppReq, UpcomingApp} from "../Appointment"




export default function Component() {
  
  const [info, setInfo] = useState([] as any);
  const [upcoming, setUpcoming] = useState([] as any);
  const [hist, sethist] = useState([] as any);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/viewappointment");
      const hisres = await axios.get("/api/hisappoint");
      const appoint = hisres.data.info;
      const appoints = res.data.info;  

      const now = new Date();
      const upcomingAppointments = appoint?.filter((app: any) => (new Date(app.date) > now ));
      const finishedAppointments = appoint?.filter((app: any) => new Date(app.date) <= now);
      
      setInfo(appoints);
      setUpcoming(upcomingAppointments);
      sethist(finishedAppointments);
      
    })() 
  }, [])

  return (
   
    <div className="flex h-screen flex-col bg-background mt-5" >
      <header className="border-b bg-card px-4 py-3 sm:px-6 md:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <CalendarCheckIcon className="h-6 w-6"/>
              <span>Appointment Manager</span>
            </Link>
          </div>
        </div>
      </header>
      <div className="flex gap-5 place-items-center">
      <main className="flex-1 px-4 py-6 sm:px-6 md:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Request</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {info?.map((i:any) => <AppReq info={i}/>)}

                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  
                  {upcoming?.map((i:any) => <UpcomingApp info={i}/>)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Appointment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {hist?.map((i:any) => <AppHistory info={i}/>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}
