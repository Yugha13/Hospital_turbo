import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card"


export default function MeetingHis() {
  const meetings = [
    {
      id: 1,
      type: "upcoming",
      doctor: "Dr. Sarah Johnson",
      date: "2023-09-15",
      time: "10:00 AM",
      reason: "Annual checkup",
    },
    {
      id: 2,
      type: "upcoming",
      doctor: "Dr. Michael Lee",
      date: "2023-09-20",
      time: "2:30 PM",
      reason: "Follow-up appointment",
    },
    {
      id: 3,
      type: "cancelled",
      doctor: "Dr. Emily Chen",
      date: "2023-08-25",
      time: "11:00 AM",
      reason: "Scheduling conflict",
    },
    {
      id: 4,
      type: "past",
      doctor: "Dr. David Patel",
      date: "2023-07-01",
      time: "9:00 AM",
      reason: "Routine visit",
    },
    {
      id: 5,
      type: "past",
      doctor: "Dr. Sarah Johnson",
      date: "2023-06-15",
      time: "1:45 PM",
      reason: "Flu symptoms",
    },
  ]
  return (
    <div className="flex flex-col h-[95vh] bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <CalendarIcon className="w-6 h-6" />
          <span>Appointments</span>
        </div>
      </header>
      <main className="flex-1 grid gap-8 p-4 sm:px-6 sm:py-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Upcoming</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {meetings
                .filter((meeting) => meeting.type === "upcoming")
                .map((meeting) => (
                  <div key={meeting.id} className="flex items-center justify-between gap-4">
                    <div className="grid gap-1">
                      <div className="font-medium">{meeting.doctor}</div>
                      <div className="text-sm text-muted-foreground">
                        {meeting.date} at {meeting.time}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{meeting.reason}</div>
                  </div>
                ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Cancelled</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {meetings
                .filter((meeting) => meeting.type === "cancelled")
                .map((meeting) => (
                  <div key={meeting.id} className="flex items-center justify-between gap-4">
                    <div className="grid gap-1">
                      <div className="font-medium">{meeting.doctor}</div>
                      <div className="text-sm text-muted-foreground">
                        {meeting.date} at {meeting.time}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{meeting.reason}</div>
                  </div>
                ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>History</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {meetings
                .filter((meeting) => meeting.type === "past")
                .map((meeting) => (
                  <div key={meeting.id} className="flex items-center justify-between gap-4">
                    <div className="grid gap-1">
                      <div className="font-medium">{meeting.doctor}</div>
                      <div className="text-sm text-muted-foreground">
                        {meeting.date} at {meeting.time}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{meeting.reason}</div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function CalendarIcon(props:any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}