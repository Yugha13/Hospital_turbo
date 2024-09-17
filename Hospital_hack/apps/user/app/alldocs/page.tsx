"use client"

import { Input } from "@repo/ui/components/ui/input"
import { Card, CardContent } from "@repo/ui/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Button } from "@repo/ui/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"
import { StarIcon } from "lucide-react"
import Link from "next/link"


const DocCard = ({info}:any) => {

  return (
    <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <Avatar className="w-10 h-10 mr-3">
                
                <AvatarFallback>{info.name[0]+info.name[1]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">{info.name}</h3>
                <p className="text-muted-foreground">{info.specialist}</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-500">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground ml-2">(4.5)</span>
            </div>
            <Link href={`/alldocs/${info.doctor.id}`} >
            <Button size="sm" className="w-full" >
              Book Appointment
            </Button>
            </Link>
          </CardContent>
        </Card>
  )
}

export default function ViewDoc() {
  const [info, setInfo] = useState([] as any);
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/alldocs");
      const docData = res.data.info;  
      console.log(docData);
      
      setInfo(docData);
    })() 
  }, [])
  
  // console.log(info);
  
  
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find a Doctor</h1>
        <p className="text-muted-foreground">Search and book appointments with top-rated doctors.</p>
      </div>
      <div className="mb-8">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, specialty, or location"
            className="w-full rounded-lg bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {info?.map((i:any) => <DocCard info={i}/>)}
      </div>
    </div>
  )
}
