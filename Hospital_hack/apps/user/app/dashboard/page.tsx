"use client"

import Appointment from "./Appointment"
import Message from "./Message"
import Notifiaction from "./Notifiaction"
import Records from "./Records"
import Payment from "./Payment"
import { useEffect, useState } from "react"
import axios from "axios"



export default function Component() {
  const [info, setInfo] = useState([] as any);
 const [appoint, setappoint] = useState([] as any);
 

  useEffect(() => {
    (async () => {
      const {data} = await axios.get("/api/upcomeappoint");
      setInfo(data.info);
      console.log("data - ",data.info);
      data.info.map((i:any) => setappoint(i.appointments));   
    })();
  }, []);

  // const now = new Date();
  // const upcomingAppointments = info?.filter((app: any) => (new Date(app.date) > now ));
  // const finishedAppointments = info?.filter((app: any) => new Date(app.date) <= now);

  // setUpcoming(upcomingAppointments);
  // sethist(finishedAppointments);

  return (
    <div className="flex flex-col min-h-[80vh] bg-background mt-20">
      <main className="flex-1 grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 lg:p-6 h-full"> 
        <Appointment appoint = {appoint}/>
        <Message/>
        <Notifiaction appoint = {appoint}/>
        <Records/>
        <Payment/> 
      </main>
    </div>
  )
}