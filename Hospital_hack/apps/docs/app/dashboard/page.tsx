import { Button } from "@repo/ui/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@repo/ui/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Badge } from "@repo/ui/components/ui/badge"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@repo/ui/components/ui/table"
import { MessageCircle, Notebook } from "lucide-react"
import Link from "next/link"



export default function Component() {
  return (
    <div className="">
    <div className="flex flex-col w-screen bg-muted/40 ">
      
      <div className="flex flex-1 gap-4 ">
        
        <main className="flex-1 space-y-4 p-4 sm:px-6 sm:py-0 md:space-y-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>View Appointments</CardTitle>
                <CardDescription>Accept or Decline patient appointments.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">10:00 AM - 10:30 AM</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant={'outline'}>Accept</Button>
                      <Button variant={'destructive'}>Decline</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                        <AvatarFallback>JA</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Jane Appleseed</div>
                        <div className="text-sm text-muted-foreground">2:00 PM - 2:30 PM</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant={'outline'}>Accept</Button>
                      <Button variant={'destructive'}>Decline</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Sarah Miller</div>
                        <div className="text-sm text-muted-foreground">4:00 PM - 4:30 PM</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant={'outline'}>Accept</Button>
                      <Button variant={'destructive'}>Decline</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">View All</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Patients Record</CardTitle>
                <CardDescription>View your most recent patient visits.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">Last Visit: 2 days ago</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                        <AvatarFallback>JA</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Jane Appleseed</div>
                        <div className="text-sm text-muted-foreground">Last Visit: 1 week ago</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Sarah Miller</div>
                        <div className="text-sm text-muted-foreground">Last Visit: 2 weeks ago</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">View All</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Quickly access common tasks in the clinic.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Button size="sm">
                    <PillIcon className="h-4 w-4 mr-2" />
                    View Pill Request
                  </Button>
                  <Button size="sm">
                    <Notebook className="h-4 w-4 mr-2" />
                    Write Prescription
                  </Button>
                  <Button size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Consult Patients
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="w-screen">
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>View your upcoming patient appointments.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="border">
                          <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-sm text-muted-foreground">johndoe@example.com</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>2023-05-15</TableCell>
                    <TableCell>10:00 AM - 10:30 AM</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Confirmed</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoveHorizontalIcon className="h-4 w-4" />
                            <span className="sr-only">More actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="border">
                          <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                          <AvatarFallback>JA</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Jane Appleseed</div>
                          <div className="text-sm text-muted-foreground">janeappleseed@example.com</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>2023-05-16</TableCell>
                    <TableCell>2:00 PM - 2:30 PM</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Confirmed</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoveHorizontalIcon className="h-4 w-4" />
                            <span className="sr-only">More actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="border">
                          <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
                          <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Sarah Miller</div>
                          <div className="text-sm text-muted-foreground" />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
    </div>
  )
}

function BellIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CalendarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function HospitalIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  )
}


function MoveHorizontalIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function PillIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  )
}


function SettingsIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}