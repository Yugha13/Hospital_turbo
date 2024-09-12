import { Button } from "@repo/ui/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { CalendarIcon } from "lucide-react"
import Link  from "next/link"

const Appointment = () => {
  return (
    

      <Card className="relative">
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Checkup with Dr. Smith</div>
                    <div className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</div>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="rounded-full bg-accent p-2 text-accent-foreground">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Follow-up with Dr. Johnson</div>
                    <div className="text-sm text-muted-foreground">Friday, 2:30 PM</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between absolute bottom-0 w-full">
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