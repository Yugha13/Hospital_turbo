"use client"

import { Input } from "@repo/ui/components/ui/input"
import { Card, CardContent } from "@repo/ui/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Button } from "@repo/ui/components/ui/button"
import { useRouter } from "next/navigation"

export default function ViewDoc() {
  const navigate = useRouter();
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find a Doctor</h1>
        <p className="text-muted-foreground">Search and book appointments with top-rated doctors.</p>
      </div>
      <div className="mb-8">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, specialty, or location"
            className="w-full rounded-lg bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <Avatar className="w-10 h-10 mr-3">
                <img src="https://i1.sndcdn.com/avatars-yXGqzmkUz1jDq5rF-WjQzcA-t1080x1080.jpg"/>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Dr. John Doe</h3>
                <p className="text-muted-foreground">Cardiologist</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-500">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground ml-2">(4.5)</span>
            </div>
            <Button size="sm" className="w-full" onClick={()=>navigate.push("/appointment")}>
              Book Appointment
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <Avatar className="w-10 h-10 mr-3">
                <AvatarImage src="/placeholder-user.jpg" alt="Dr. Jane Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Dr. Jane Smith</h3>
                <p className="text-muted-foreground">Dermatologist</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-500">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground ml-2">(4.7)</span>
            </div>
            <Button size="sm" className="w-full">
              Book Appointment
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <Avatar className="w-10 h-10 mr-3">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09KoaQtTHh2d0BQpmYus-_rdx8nP4uVE_6A&s"/>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Dr. Michael Johnson</h3>
                <p className="text-muted-foreground">Orthopedist</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-500">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
              </div>
              <span className="text-muted-foreground ml-2">(5.0)</span>
            </div>
            <Button size="sm" className="w-full">
              Book Appointment
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <Avatar className="w-10 h-10 mr-3">
                <AvatarImage src="https:ypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09KoaQtTHh2d0BQpmYus-_rdx8nP4uVE_6A&s" alt="Dr. Emily Davis" />
                <AvatarFallback>ED</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Dr. Emily Davis</h3>
                <p className="text-muted-foreground">Pediatrician</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-500">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground ml-2">(4.6)</span>
            </div>
            <Button size="sm" className="w-full">
              Book Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StarIcon(props:any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}