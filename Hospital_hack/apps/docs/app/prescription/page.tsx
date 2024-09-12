import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { Label } from "@repo/ui/components/ui/label"
import { Input } from "@repo/ui/components/ui/input"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Button } from "@repo/ui/components/ui/button"

export default function Component() {
  return (
    <div className="flex h-[95vh] place-items-center">
    <Card className="w-full max-w-2xl mx-auto p-6 sm:p-8 md:p-10 ">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Patient Prescription</CardTitle>
        <CardDescription>Fill out the details for the patient's prescription.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="patient-name">Patient Name</Label>
              <Input id="patient-name" placeholder="Enter patient's name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="diagnosis">Diagnosis</Label>
              <Textarea id="diagnosis" rows={3} placeholder="Enter patient's diagnosis" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="medication">Medication</Label>
              <Input id="medication" placeholder="Enter medication name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="dosage">Dosage</Label>
                <Input id="dosage" placeholder="Enter dosage" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="instructions">Instructions</Label>
                <Input id="instructions" placeholder="Enter instructions" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="signature">Doctor's Signature</Label>
              <Textarea id="signature" rows={3} placeholder="Enter doctor's signature" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="ml-auto">
          Submit Prescription
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}