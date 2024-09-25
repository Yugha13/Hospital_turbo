import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import Link from "next/link"
import { Button } from '@repo/ui/components/ui/button'
import { ArrowBigUp } from "lucide-react"


const Records = () => {
  return (
        <Card className="w-full">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Medical Records</CardTitle>
            <Link href="/medhis" className="text-sm text-primary" prefetch={false}>
              View All
            </Link>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Lab Results</div>
                <div className="text-sm text-muted-foreground">View your Lab Record Here </div>
              </div>
              <Link href="/labresult">
              <Button variant="outline" size="sm">
                View
              </Button>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Prescriptions</div>
                <div className="text-sm text-muted-foreground">View your Prescription Here.</div>
              </div>
              <Link href="/viewpres">
              <Button variant="outline" size="sm">
                View
              </Button>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Past Treatments</div>
                <div className="text-sm text-muted-foreground">Your Past Treatment Will Be Shown Here.</div>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          </CardContent>
        </Card>
  )
}

export default Records