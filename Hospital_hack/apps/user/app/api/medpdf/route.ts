import {  getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async ( req:NextRequest ) =>{
    const { getUser } = getKindeServerSession();
    const { email } = await getUser() as any;

    try {
        const info = await prisma.patient.findFirst({
            where : {
                email
            },
            include : {
                patientInfo : true,
                prescription : true,

            }
        })
        return NextResponse.json({info : info});
    } catch (e) {
        console.log(e);
        return NextResponse.json({err : e});
    }
}