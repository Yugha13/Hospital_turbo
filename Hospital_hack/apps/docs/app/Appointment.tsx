"use client"

import { Button } from "@repo/ui/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Popover, PopoverTrigger, PopoverContent } from "@repo/ui/components/ui/popover"
import { RadioGroup } from "@repo/ui/components/ui/radio-group"
import { Badge } from "@repo/ui/components/ui/badge"
import { Input } from "@repo/ui/components/ui/input"
import { useState } from "react"
import axios from "axios"



export const AppReq = ({info}:any) => {
    const [ reason, setreason ] = useState("");
    const date = new Date(info.date);
    const day = date.toLocaleDateString()
    const handleStatus = async (e:any,status:any, reason?: string) => {
      e.preventDefault();
      const payload = {
        id: info.id,
        status: status,
        reason: (status === 'DECLINED') ? reason : undefined,
      };
      await axios.post('/api/viewappointment', payload);
    };
  
    return (
      <div className="grid gap-2 rounded-md bg-muted p-4">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
          <AvatarFallback>{info.name.slice(0,1)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{info.name}</p>
          <p className="text-sm text-muted-foreground">Reason : {info.reason}</p>
          <p className="text-sm text-muted-foreground">Date : {day}</p>
          <p className="text-sm text-muted-foreground">Time : {info.time}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick = {(e:any) => handleStatus(e,"ACCEPTED")}
        >
          Accept
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="destructive" size="sm">Decline</Button>
          </PopoverTrigger>
          <PopoverContent className="w-[240px] p-4">
            <form>
              <fieldset className="space-y-2">
                <legend className="text-sm font-medium">Reason for Decline</legend>
                <RadioGroup>
                  <Input
                    placeholder="Write your Reason" 
                    onChange={(e)=>{setreason(e.target.value)}}
                    required
                  />
                </RadioGroup>
              </fieldset>
  
              <div className="mt-4 flex justify-end gap-2">
                
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={(e:any) => handleStatus(e,'DECLINED',reason)}
                >
                  Decline
                </Button>
              </div>
            </form>
          </PopoverContent>
        </Popover>
        </div>
        </div>
      </div>
    )
  }


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
            <AvatarFallback>{info.name[0]+info.name[1]}</AvatarFallback>
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
            <AvatarFallback>{info.name[0]+info.name[1]}</AvatarFallback>
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
  