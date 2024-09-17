"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Badge } from "@repo/ui/components/ui/badge"
import { useState } from "react"




export const UpcomingApp = ({info}:any) => {
    const date = new Date(info.date);
    const day = date.toLocaleDateString()
    // console.log(day);
    const [colorIs, setColrIs] = useState((info.status == "DECLINED") ? "bg-destructive text-red-50" : "bg-green-300 text-green-50");
    
    return (
      <div className="grid gap-2 rounded-md bg-muted p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10 border">
            <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
            <AvatarFallback>{info.name.slice(0,2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{info.name}</p>
            <p className="text-sm text-muted-foreground">Reason : {info.reason}</p>
            <p className="text-sm text-muted-foreground">Date - {day}</p>
            <p className="text-sm text-muted-foreground">Time - {info.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={colorIs}>
            {info.status}
          </Badge>
        </div>
      </div>
    </div>
    )
  }
  
export const AppHistory = ({info}:any) => {
    const date = new Date(info.date);
    const day = date.toLocaleDateString()
    // console.log(day);
    console.log(info.status);
    const [colorIs, setColrIs] = useState((info.status == "DECLINED") ? "bg-destructive text-red-50" : "bg-green-300 text-green-50");
    // const color = ;

    
    return (
      <div className="grid gap-2 rounded-md bg-muted p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10 border">
            <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
            <AvatarFallback>{info.name.slice(0,2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{info.name}</p>
            <p className="text-sm text-muted-foreground">Reason : {info.reason}</p>
            <p className="text-sm text-muted-foreground">Date - {day}</p>
            <p className="text-sm text-muted-foreground">Time - {info.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
        <Badge variant="outline" className={colorIs}>
            {info.status}
          </Badge>
        </div>
      </div>
    </div>
    )
  }
  