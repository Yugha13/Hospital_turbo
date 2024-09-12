import Appointment from "./Appointment"
import Message from "./Message"
import Notifiaction from "./Notifiaction"
import Records from "./Records"
import Payment from "./Payment"



export default function Component() {
  return (
    <div className="flex flex-col min-h-[70vh] bg-background mt-20">
      <main className="flex-1 grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 lg:p-6 h-full"> 
        <Appointment/>
        <Message/>
        <Notifiaction/>
        <Records/>
        <Payment/> 
      </main>
    </div>
  )
}

function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}