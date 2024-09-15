import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card"
import { Separator } from "@repo/ui/components/ui/separator"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@repo/ui/components/ui/table"

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <div className="text-muted-foreground">
            <span>35 years old</span>
            <span className="mx-2">•</span>
            <span>Male</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">Phone:</span> 555-123-4567
            </div>
            <div>
              <span className="font-medium">Email:</span> john.doe@example.com
            </div>
            <div>
              <span className="font-medium">Address:</span> 123 Main St, Anytown USA
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Medical History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">Diagnosis:</span> Diabetes, Hypertension
            </div>
            <div>
              <span className="font-medium">Procedures:</span> Appendectomy (2015)
            </div>
            <div>
              <span className="font-medium">Notes:</span> Patient has been managing their conditions well.
            </div>
          </CardContent>
        </Card>
      </div>
      <Separator className="my-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Medications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">Metformin:</span> 500mg, twice daily
            </div>
            <div>
              <span className="font-medium">Lisinopril:</span> 10mg, once daily
            </div>
            <div>
              <span className="font-medium">Aspirin:</span> 81mg, once daily
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Allergies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">Penicillin:</span> Hives, Swelling
            </div>
            <div>
              <span className="font-medium">Pollen:</span> Seasonal Allergies
            </div>
          </CardContent>
        </Card>
      </div>
      <Separator className="my-8" />
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-06-15</TableCell>
                <TableCell>10:00 AM</TableCell>
                <TableCell>Dr. Jane Smith</TableCell>
                <TableCell>Diabetes Follow-up</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-07-01</TableCell>
                <TableCell>2:30 PM</TableCell>
                <TableCell>Dr. John Doe</TableCell>
                <TableCell>Annual Physical</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}