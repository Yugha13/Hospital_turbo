import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { Ban, BellIcon, CheckIcon } from "lucide-react"
import Link from "next/link"
import { format } from 'date-fns';


const NotiCard = ({info}:any) => {
  const month = format(info.date, "dd MMMM yyyy");
  console.log(info.status);
  const color = (info.status == "ACCEPTED")? "bg-green-400" : "bg-red-400";
  const docstatus = (info.status == "ACCEPTED")? "Confirmed" : "Declined";
    return(
    <div className="grid grid-cols-[auto_1fr] items-center gap-4">
      <div className={`rounded-full ${color} p-3 text-white`}>
        {(info.status=="ACCEPTED")? <CheckIcon className="h-5 w-5" /> : <Ban className="h-5 w-5" />}
      </div>
      <div className="p-2">
        <div className="font-medium ">Your appointment with Dr. Smith was {docstatus}</div>
        <div className="text-sm text-muted-foreground">Updated on {month}</div>
        {(info.status =="DECLINED")?<div className="text-sm text-muted-foreground">Reason : {info.docreason}</div>:<div></div>}
      </div>
    </div>
  )
}


const Notifiaction = ({appoint}:any) => {
  console.log("appoint from notification ", appoint);
  
  return (
        <Card className="relative">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {appoint.slice(0,3).map((i:any)=> <NotiCard info = {i}/>)}
              </div>
            </CardContent>
            <CardFooter className="absolute bottom-0 right-0">
              <Link href="#" className="text-sm font-medium" prefetch={false}>
                View all notifications
              </Link>
            </CardFooter>
          </Card>
  )
}


export default Notifiaction;