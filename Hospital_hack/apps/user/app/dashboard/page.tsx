import Appointment from "./Appointment"
import Message from "./Message"
import Notifiaction from "./Notifiaction"
import Records from "./Records"
import Payment from "./Payment"



export default function Component() {
  return (
    <div className="flex flex-col min-h-[80vh] bg-background mt-20">
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