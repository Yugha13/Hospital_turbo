"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card"
import { Separator } from "@repo/ui/components/ui/separator"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@repo/ui/components/ui/table"
import axios from "axios";
import { useEffect, useState } from "react";


//delete patient appointment

export default function Component({params}:any) {
    const [info, setinfo] = useState({});
    const [appoint, setappoint] = useState({});
    console.log(params.patid);
    useEffect(() => {
        (async() => {
            const {data} = await axios.post("/api/patientinfo", {id: +params.patid});     
            console.log("data : ",data.data.appointments);
            setinfo(data.data.patientInfo);
            setappoint(data.data.appointments);    
        })();
      }, [params.id])
      
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
          <AvatarFallback>{info?.name?.slice(0,2)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{info?.name}</h1>
          <div className="text-muted-foreground">
            <span>{info?.gender}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">Phone:</span> {info?.phone}
            </div>
            <div>
              <span className="font-medium">Email:</span> {info?.email}
            </div>
            <div>
              <span className="font-medium">Emergency Number:</span> {info?.emergencyNumber}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Medical History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">healthIssues:</span> {info?.healthIssues}
            </div>
            <div>
              <span className="font-medium">Medical History:</span> {info?.medicalHistory}
            </div>
            <div>
              <span className="font-medium">Notes:</span> Patient has been managing their conditions well.
            </div>
          </CardContent>
        </Card>
      </div>
      <Separator className="my-8" />
      <Card>
        <CardHeader>
          <CardTitle>Appointments History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Providing Doctor Email</TableHead>
                <TableHead>Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {Array.isArray(appoint) && appoint.length > 0 ? (
              appoint.map((i: any) => (
              <TableRow key={i.id}>
                <TableCell>{new Date(i.date).toLocaleDateString()}</TableCell> 
                <TableCell>{i.time}</TableCell>                               
                <TableCell>{i.doctorEmail}</TableCell>  
                <TableCell>{i.reason}</TableCell>          
              </TableRow>
            ))) : (
              <TableRow>
                <TableCell colSpan={4}>No appointments found</TableCell>
              </TableRow>
            )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}