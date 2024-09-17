import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export const POST = async( req : NextRequest ) => {
    const {email}:any = req.json();
    // console.log("email - ",email);
    
    try {
        const {appointments}:any = await prisma.patient.findFirst({
            where : {
                email
            },
            include : {
                appointments : true
            }
        })
        // console.log(appointments);
        return NextResponse.json({appoint : appointments})
    } catch (e) {
        console.log(e);
        return NextResponse.json({error : e});
    }
}