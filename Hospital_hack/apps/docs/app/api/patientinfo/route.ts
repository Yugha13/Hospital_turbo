import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export const POST = async (req : NextRequest) => {
    const {id} : any = await req.json();
    // console.log("this is id", id);
    
    try {
        const patientInfo = await prisma.patient.findFirst({
            where : {
                id
            },
            include : {
                patientInfo : true,
                appointments : {
                    where : {
                        status : "ACCEPTED"
                    },
                    orderBy: [
                      {date: 'desc'}, {time: 'desc'}
                    ]
                }
            }
        })
        // console.log(patientInfo);
        return NextResponse.json({data : patientInfo})
    } catch (e) {
        // console.log(e);
        return NextResponse.json({error : e})
    }
}