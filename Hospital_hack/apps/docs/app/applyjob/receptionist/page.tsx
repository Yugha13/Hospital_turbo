import { Label } from "@repo/ui/components/ui/label"
import { Input } from "@repo/ui/components/ui/input"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Button } from "@repo/ui/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 md:p-10 h-[90vh] flex place-items-center">
      <div className="space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold m-2">Resumptionist Position Application</h1>
          <p className="text-muted-foreground">
            Please fill out the form below to apply.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Upload Resume</Label>
              <Input id="resume" type="file" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="essay">Tell us about your experience and qualifications</Label>
            <Textarea id="essay" rows={5} placeholder="Enter your response here" />
          </div>
          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  )
}