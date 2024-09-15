import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export const POST = async (req:NextRequest) => {
    try {
        const {id}:any = await req.json();
        // console.log(id);
        const {email}:any = await prisma.doctor.findFirst({
            where: {
                id:+id
            }
        });

        return NextResponse.json({email});
    } catch (e) {
        return NextResponse.json({mes: "something went wrong", e});
        
    }
}

export const GET = async (req:NextRequest) => {

    try {
        const docData = await prisma.doctorInfo.findMany({
            include: {
                doctor: true
            }
        });
        // console.log(docData);
        return NextResponse.json({info: docData})
    } catch(e) {
        // console.log(e);
        return NextResponse.json({e});
        
    }
}