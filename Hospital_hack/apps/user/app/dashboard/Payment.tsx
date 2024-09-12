import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import Link from "next/link"
import { Button } from "@repo/ui/components/ui/button"



const Payment = () => {
  return (
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Billing</CardTitle>
            <Link href="#" className="text-sm text-primary" prefetch={false}>
              View All
            </Link>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">April 2023 Bill</div>
                <div className="text-sm text-muted-foreground">Due: April 30, 2023</div>
              </div>
              <Button variant="outline" size="sm">
                Pay
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">March 2023 Bill</div>
                <div className="text-sm text-muted-foreground">Due: March 31, 2023</div>
              </div>
              <Button variant="outline" size="sm">
                Pay
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">February 2023 Bill</div>
                <div className="text-sm text-muted-foreground">Due: February 28, 2023</div>
              </div>
              <Button variant="outline" size="sm">
                Pay
              </Button>
            </div>
          </CardContent>
        </Card>
  )
}

export default Payment