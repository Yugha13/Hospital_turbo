import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Button } from "@repo/ui/components/ui/button"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { SearchIcon, SettingsIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10 hover:shadow-lg transition-shadow">
            <AvatarImage src="/placeholder-user.jpg" alt="xyz"/>
            <AvatarFallback>XY</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-lg">XYZ</div>
            <div className="text-sm text-muted-foreground">Online</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/20">
            <SearchIcon className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/20">
            <SettingsIcon className="w-6 h-6" />
          </Button>
        </div>
      </header>

      
      <div className="flex-1 overflow-auto p-4 space-y-6 bg-white shadow-inner rounded-t-lg">
        <div className="flex items-start gap-4">
          <Avatar className="w-10 h-10 hover:shadow-lg transition-shadow">
            <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-4 max-w-[80%] shadow-sm">
            <div className="font-semibold text-base">John Doe</div>
            <div className="text-sm text-muted-foreground">Hey there! How's it going?</div>
          </div>
        </div>

        
        <div className="flex items-start gap-4 justify-end">
          <div className="bg-primary text-primary-foreground rounded-lg p-4 max-w-[80%] shadow-sm">
            <div className="font-semibold text-base">You</div>
            <div className="text-sm">I'm doing great, thanks for asking!</div>
          </div>
          <Avatar className="w-10 h-10 hover:shadow-lg transition-shadow">
            <AvatarImage src="/placeholder-user.jpg" alt="You" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>

        {/* Message from Jane Doe */}
        <div className="flex items-start gap-4">
          <Avatar className="w-10 h-10 hover:shadow-lg transition-shadow">
            <AvatarImage src="/placeholder-user.jpg" alt="Jane Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-4 max-w-[80%] shadow-sm">
            <div className="font-semibold text-base">Jane Doe</div>
            <div className="text-sm text-muted-foreground">That's great to hear! I have a question for you...</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-background border-t px-4 py-2 flex items-center gap-2 shadow-lg">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 resize-none rounded-lg px-4 py-2 border-none focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
        />
        <Button type="submit" className="bg-primary text-primary-foreground rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
          Send
        </Button>
      </div>
    </div>
  )
}