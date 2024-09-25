import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@repo/ui/components/ui/button"


const Message = () => {
  return (
    
        <Card className="w-full">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Messaging</CardTitle>
            
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Dr. Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">New message received</div>
              </div>
              <Link href="/chat">
                <Button variant="outline" size="sm">
                  Reply
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Nurse Emily Chen</div>
                <div className="text-sm text-muted-foreground">New message received</div>
              </div>
              <Link href="/chat">
                <Button variant="outline" size="sm">
                  Reply
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Dr. Michael Lee</div>
                <div className="text-sm text-muted-foreground">New message received</div>
              </div>
              <Link href="/chat">
                <Button variant="outline" size="sm">
                  Reply
                </Button>
              </Link>
            </div>
          </CardContent>

          <CardFooter className="">
              <Link href="/chat" target="_blank" className="text-sm font-medium" prefetch={false}>
            <div className="flex gap-2 place-items-center">
                <Button variant={"outline"}>
                  Start Message 
                  <MessageCircle className="h-5"/>     
                </Button>
            </div>
              </Link>
            </CardFooter>
        </Card>
  )
}

export default Message