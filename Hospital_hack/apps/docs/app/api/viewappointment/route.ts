import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export const GET = async (req:NextRequest) => {
    const {getUser} = getKindeServerSession();
    const {email} = await getUser() as any;
    // console.log(email);
    if(!email) return NextResponse.json({status: 405});
    try {
        const appointment = await prisma.appointment.findMany({
            where: {
              doctorEmail: email,
              status: "PENDING",
            }
          });
        // console.log("app: ", appointment);
        return NextResponse.json({info: appointment});
    } catch (e) {
        // console.log(e);
        return NextResponse.json({error : e});
        
    }
}

export const POST = async( req : NextRequest ) => {
  const { id, status, reason } : any = await req.json();

  // console.log(status , reason);
  
    try {
      const updatedApp = await prisma.appointment.update({
        where: { 
          id 
        },
        data: { 
          status, 
          docreason : reason || ""
        },
        
      });
      // console.log(updatedApp);
      
      return NextResponse.json({ success: true, info : updatedApp });
    } catch (error) {
      // console.error("Error accepting appointment:", error);
      return NextResponse.json({success: false, err : "Failed to accept the appointment"});
    }
}

