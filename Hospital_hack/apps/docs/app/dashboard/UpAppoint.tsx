import { Card, CardContent } from "@repo/ui/components/ui/card"
import { Button } from "@repo/ui/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/ui/avatar"
import Link from "next/link"
import { useEffect, useState } from "react";
import axios from "axios";



export default function UpAppoint({upcoming}:any) {
    const [id, setid] = useState("");
    const date = new Date(upcoming.date);
    const day = date.toLocaleDateString()
    // console.log(upcoming.email);
    // console.log(id);
    if(upcoming.status=="ACCEPTED"){
        // console.log(upcoming);
        
        return (
        <Card key={upcoming.id}>
            <CardContent className="grid grid-cols-[1fr_auto] gap-4 items-center">
                <div className="flex gap-3 p-5 place-items-center">
                    <div>
                        <Avatar className="h-10 w-10 border">
                            <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
                            <AvatarFallback>{upcoming.name.slice(0,2)}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div>
                        <div className="font-medium">
                            {upcoming.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                            Date : {day}
                        </div>
                        <div className="text-sm text-muted-foreground">
                            Time : {upcoming.time}
                        </div>
                    </div>
                </div>
                <Link href={`/dashboard/${upcoming.patient?.id}`}>
                    <Button variant="outline" size="sm">
                        View Profile
                    </Button>
                </Link>
            </CardContent>
        </Card>
        )
    }
}

