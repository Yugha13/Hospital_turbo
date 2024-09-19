import { Button } from "@repo/ui/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { CalendarIcon } from "lucide-react"
import Link  from "next/link"
import { useEffect, useState } from "react"
import { format } from 'date-fns';


const Content = ({appoint}:any) =>{
  const month = format(appoint.date, "dd MMMM yyyy");
  return(
  <CardContent>
  <div className="grid gap-4">
    <div className="grid grid-cols-[auto_1fr] items-center gap-4">
      <div className="rounded-full bg-primary p-2 text-primary-foreground">
        <CalendarIcon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-medium">Appointment with Dr. Smith</div>
        <div className="text-sm text-muted-foreground">{month}</div>
        <div className="text-sm text-muted-foreground">Time : {appoint.time}</div>
      </div>
    </div>
  </div>
</CardContent>
  )
}

const Appointment = ({appoint}:any) => {
  const [upappoint, setupappoint] = useState([] as any);
  // console.log(appoint.filter((i:any)=> new Date(i.date) > now));
  useEffect(() => {
    const now = new Date();
    setupappoint(appoint.filter((i:any)=> new Date(i.date) > now));
  },[]);
  // console.log(upappoint);  

  return (
      <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            {appoint.slice(0,3).map((i:any)=> <Content appoint = {i}/>)}
            <CardFooter className="flex justify-between ">
              <Link href="/history" target="_blank" className="text-sm font-medium" prefetch ={false}>
                View all appointments
              </Link>
              
              <Link href="/alldocs">
                <div className="p-4">
                  <Button>Book Appointment</Button>
                </div>
              </Link>
            </CardFooter>
          </Card>
  )
}


export default Appointment