"use client"

import { Button } from "@repo/ui/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { MessageCircle, Notebook, PillIcon, SearchIcon } from "lucide-react"
import Link from "next/link"
import { AppReq} from "../Appointment"
import { useEffect, useState } from "react"
import axios from "axios"
import UpAppoint from "./UpAppoint"
import { Input } from "@repo/ui/components/ui/input"


export default function Component() {
  const [info, setInfo] = useState([] as any);
  const [upcoming, setUpcoming] = useState([] as any);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/viewappointment");
      const responce = await axios.get("/api/hisappoint");
      const appoint = responce.data.info;
      const appoints = res.data.info;  
      
      const now = new Date();
      const upAppoint = appoint?.filter((app: any) => new Date(app.date) > now);
      // console.log(upcomingAppointments);
      const docAppoint = appoints?.filter((app: any) => new Date(app.date) >= now);
      
      setInfo(docAppoint);
      setUpcoming(upAppoint);
    })() 
  }, []);
  const filteredAppointments = upcoming?.filter((upcoming:any) => 
    upcoming.name.toLowerCase().includes(search.toLowerCase()),
  )
  

  return (
    
    <div className="flex flex-col w-screen bg-muted/40 ">
      <div className="flex gap-2 my-4">
        <main className="flex-1 sm:py-0 md:space-y-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-3">

            <Card>
              <CardHeader>
                <CardTitle>View Appointments</CardTitle>
                <CardDescription>Accept or Decline patient appointments.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                {info?.slice(0, 2).map((i:any) => <AppReq info={i}/>)}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/appointment">
                <Button size="sm">View All</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Patients Record</CardTitle>
                <CardDescription>View your most recent patient visits.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">Last Visit: 2 days ago</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                        <AvatarFallback>JA</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Jane Appleseed</div>
                        <div className="text-sm text-muted-foreground">Last Visit: 1 week ago</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Sarah Miller</div>
                        <div className="text-sm text-muted-foreground">Last Visit: 2 weeks ago</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">View All</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Quickly access common tasks in the clinic.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 w-full">
                 
                    <Link href="/appointment">
                      <div className="flex bg-blue-200 p-2 rounded-sm place-items-center justify-center hover:bg-blue-300 transition-colors">
                      <PillIcon className="h-4 w-4 mr-2" />
                      View Appointment
                      </div>
                    </Link>

                    <Link href="/prescription">
                      <div className="flex bg-blue-200 p-2 rounded-sm place-items-center justify-center hover:bg-blue-300 transition-colors">
                        <Notebook className="h-4 w-4 mr-2" />
                        Write Prescription
                      </div>
                    </Link>

                    <Link href="/chat">
                      <div className="flex bg-blue-200 p-2 rounded-sm place-items-center justify-center hover:bg-blue-300 transition-colors">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Consult Patients
                      </div>
                    </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="bg-background text-foreground p-6 sm:p-10">
            <div className=" mx-auto">
              <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-semibold">Upcoming Appointments</h1>
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search appointments..."
                    className="pl-10 pr-4 py-2 rounded-lg bg-muted text-foreground w-full"
                    value={search}
                    onChange={(e:any) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-4">
                {filteredAppointments?.map((i:any)=>  <UpAppoint upcoming={i}/>)}
              </div>
              <Link href="/appointment">
                <div className="mt-5 absolute right-5">
                  <span className="text-primary font-serif p-3 hover:underline">View All</span>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
