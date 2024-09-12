import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@repo/ui/components/ui/dropdown-menu"
import { Button } from "@repo/ui/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Popover, PopoverTrigger, PopoverContent } from "@repo/ui/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@repo/ui/components/ui/radio-group"
import { Label } from "@repo/ui/components/ui/label"
import { Badge } from "@repo/ui/components/ui/badge"
import { Input } from "@repo/ui/components/ui/input"


export default function Component() {
  return (
   
    <div className="flex min-h-screen flex-col bg-background mt-5">
      <header className="border-b bg-card px-4 py-3 sm:px-6 md:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <CalendarCheckIcon className="h-6 w-6" />
              <span>Appointment Manager</span>
            </Link>
          </div>
          
        </div>
      </header>
      <div className="flex h-[85vh] place-items-center">
      <main className="flex-1 px-4 py-6 sm:px-6 md:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2 rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">10:00 AM - 10:30 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Accept
                        </Button>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="destructive" size="sm">
                              Decline
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[240px] p-4">
                            <form>
                              <fieldset className="space-y-2">
                                <legend className="text-sm font-medium">Reason for Decline</legend>
                                <RadioGroup>
                                  <div className="flex items-center">
                                    <RadioGroupItem id="booked" value="booked" />
                                    <Label htmlFor="booked" className="pl-2">
                                      Booked
                                    </Label>
                                  </div>
                                  <div className="flex items-center">
                                    <RadioGroupItem id="out-of-office" value="out-of-office" />
                                    <Label htmlFor="out-of-office" className="pl-2">
                                      Out of Office
                                    </Label>
                                  </div>
                                  <div className="flex items-center">
                                    <RadioGroupItem id="not-available"  value="not-available" />
                                    <Label htmlFor="not-available" className="pl-2">
                                      Not Available
                                    </Label>
                                  </div>
                                  <Input placeholder="other reasons"/>
                                </RadioGroup>
                              </fieldset>
                              <div className="mt-4 flex justify-end gap-2">
                                <Button variant="outline" size="sm">
                                  Cancel
                                </Button>
                                <Button variant='destructive' size="sm">Decline</Button>
                              </div>
                            </form>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>




                  <div className="grid gap-2 rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Jane Doe</p>
                          <p className="text-sm text-muted-foreground">2:00 PM - 2:30 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Accept
                        </Button>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant='destructive' size="sm">
                              Decline
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[240px] p-4">
                            <form>
                              <fieldset className="space-y-2">
                                <legend className="text-sm font-medium">Reason for Decline</legend>
                                <RadioGroup>
                                  <div className="flex items-center">
                                    <RadioGroupItem id="booked-2" value="booked" />
                                    <Label htmlFor="booked-2" className="pl-2">
                                      Booked
                                    </Label>
                                  </div>
                                  <div className="flex items-center">
                                    <RadioGroupItem id="out-of-office-2"  value="out-of-office" />
                                    <Label htmlFor="out-of-office-2" className="pl-2">
                                      Out of Office
                                    </Label>
                                  </div>
                                  <div className="flex items-center">
                                    <RadioGroupItem id="not-available-2"  value="not-available" />
                                    <Label htmlFor="not-available-2" className="pl-2">
                                      Not Available
                                    </Label>
                                    <Input placeholder="other reasons"/>
                                  </div>
                                </RadioGroup>
                              </fieldset>
                              <div className="mt-4 flex justify-end gap-2">
                                <Button variant="outline" size="sm">
                                  Cancel
                                </Button>
                                <Button variant='destructive' size="sm">Decline</Button>
                              </div>
                            </form>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>



                  <div className="grid gap-2 rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">John Smith</p>
                          <p className="text-sm text-muted-foreground">4:00 PM - 4:30 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Accept
                        </Button>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="destructive" size="sm">
                              Decline
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[240px] p-4">
                            <form>
                              <fieldset className="space-y-2">
                                <legend className="text-sm font-medium">Reason for Decline</legend>
                                <RadioGroup>
                                  <div className="flex items-center">
                                    <RadioGroupItem id="booked-3"  value="booked" />
                                    <Label htmlFor="booked-3" className="pl-2">
                                      Booked
                                    </Label>
                                  </div>
                                  <div className="flex items-center">
                                    <RadioGroupItem id="out-of-office-3"  value="out-of-office" />
                                    <Label htmlFor="out-of-office-3" className="pl-2">
                                      Out of Office
                                    </Label>
                                  </div>
                                  <div className="flex items-center">
                                    <RadioGroupItem id="not-available-3"  value="not-available" />
                                    <Label htmlFor="not-available-3" className="pl-2">
                                      Not Available
                                    </Label>
                                  </div>
                                  <Input placeholder="other reasons"/>
                                </RadioGroup>
                              </fieldset>
                              <div className="mt-4 flex justify-end gap-2">
                                <Button variant="outline" size="sm">
                                  Cancel
                                </Button>
                                <Button variant='destructive' size="sm">Decline</Button>
                              </div>
                            </form>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Appointment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2 rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Jane Doe</p>
                          <p className="text-sm text-muted-foreground">10:00 AM - 10:30 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-500 text-green-50">
                          Accepted
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-2 rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">2:00 PM - 2:30 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-500 text-red-50">
                          Declined
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-2 rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Jane Smith</p>
                          <p className="text-sm text-muted-foreground">4:00 PM - 4:30 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-500 text-green-50">
                          Accepted
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}

function CalendarCheckIcon(props:any) {
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
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}


function UserIcon(props:any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}