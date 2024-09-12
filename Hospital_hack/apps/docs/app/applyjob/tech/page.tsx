import { Label } from "@repo/ui/components/ui/label"
import { Input } from "@repo/ui/components/ui/input"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Button } from "@repo/ui/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 md:p-10 h-[90vh] flex place-items-center">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Medical Technician Application</h1>
          <p className="text-muted-foreground">
            Thank you for your interest in our medical technician position. Please fill out the form below to apply.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          </div>
          
          <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          <div className="space-y-2">
            <Label htmlFor="education">Education and Training</Label>
            <Textarea id="education" rows={3} placeholder="Describe your educational and training background" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Relevant Work Experience</Label>
            <Textarea id="experience" rows={3} placeholder="Describe your relevant work experience" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest">Why are you interested in this position?</Label>
            <Textarea
              id="interest"
              rows={3}
              placeholder="Explain why you are interested in this medical technician role"
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  )
}