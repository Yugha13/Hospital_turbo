
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@repo/ui/components/ui/card"
import { Label } from "@repo/ui/components/ui/label"
import { Input } from "@repo/ui/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@repo/ui/components/ui/select"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Button } from "@repo/ui/components/ui/button"

export default function Component() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20 h-[90vh] flex place-items-center">
          <div className="mx-auto max-w-xl">
            <Card>
              <CardHeader>
                <CardTitle>Submit a Review</CardTitle>
                <CardDescription>Share your experience with our hospital.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="rating">Rating</Label>
                      <Select defaultValue="4">
                        <SelectTrigger>
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 star</SelectItem>
                          <SelectItem value="2">2 stars</SelectItem>
                          <SelectItem value="3">3 stars</SelectItem>
                          <SelectItem value="4">4 stars</SelectItem>
                          <SelectItem value="5">5 stars</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="review">Review</Label>
                    <Textarea id="review" placeholder="Share your thoughts about your experience" rows={4} />
                  </div>
                  <Button type="submit">Submit Review</Button>
                </form>
              </CardContent>
            </Card>
      </div>
    </section>
  )
}

