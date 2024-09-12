
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { Label } from "@repo/ui/components/ui/label"
import { Input } from "@repo/ui/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@repo/ui/components/ui/radio-group"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Button } from "@repo/ui/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Medication Request</CardTitle>
        <CardDescription>Review and respond to the patient's request.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="patient-name">Patient Name</Label>
            <Input id="patient-name" placeholder="John Doe" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="medication">Medication</Label>
            <Input id="medication" placeholder="Amoxicillin" disabled />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Decision</Label>
          <RadioGroup defaultValue="accept" className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="accept" id="accept" />
              <Label htmlFor="accept">Accept</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="decline" id="decline" />
              <Label htmlFor="decline">Decline</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="reason">Reason</Label>
          <Textarea id="reason" placeholder="Provide a reason for your decision..." className="min-h-[120px]" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Submit</Button>
      </CardFooter>
    </Card>
  )
}