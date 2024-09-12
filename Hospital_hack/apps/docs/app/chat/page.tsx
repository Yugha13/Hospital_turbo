import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Button } from "@repo/ui/components/ui/button"
import { Textarea } from "@repo/ui/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" alt="ChatGPT" />
            <AvatarFallback>CG</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">YuSab</div>
            <div className="text-sm text-muted-foreground">Online</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-primary-foreground">
            <SearchIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground">
            <SettingsIcon className="w-5 h-5" />
          </Button>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3 max-w-[80%]">
            <div className="font-medium">John Doe</div>
            <div>Hey there! How's it going?</div>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-end">
          <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
            <div className="font-medium">You</div>
            <div>I'm doing great, thanks for asking!</div>
          </div>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" alt="You" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-4">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" alt="Jane Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3 max-w-[80%]">
            <div className="font-medium">Jane Doe</div>
            <div>That's great to hear! I have a question for you...</div>
          </div>
        </div>
      </div>
      <div className="bg-background border-t px-4 py-2 flex items-center gap-2">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 resize-none rounded-lg px-4 py-2 border-none focus:ring-0 focus:outline-none"
        />
        <Button type="submit" className="bg-primary text-primary-foreground rounded-lg px-4 py-2">
          Send
        </Button>
      </div>
    </div>
  )
}

function SearchIcon(props:any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props:any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}