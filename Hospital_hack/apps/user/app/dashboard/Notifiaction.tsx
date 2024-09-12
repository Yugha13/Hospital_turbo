import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { BellIcon, CheckIcon } from "lucide-react"
import Link from "next/link"


const Notifiaction = () => {
  return (
        <Card className="relative">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="rounded-full bg-blue-500 p-2 text-white">
                    <BellIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Your prescription is ready for pickup</div>
                    <div className="text-sm text-muted-foreground">Updated 1 hour ago</div>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="rounded-full bg-green-500 p-2 text-white">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Your appointment with Dr. Smith was confirmed</div>
                    <div className="text-sm text-muted-foreground">Updated 2 days ago</div>
                  </div>
                </div>
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

export default Notifiaction