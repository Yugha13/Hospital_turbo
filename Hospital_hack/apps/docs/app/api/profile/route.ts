import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from 'next/navigation'

const prisma = new PrismaClient();

export const GET = async (req:NextRequest) => {
    const {getUser} = getKindeServerSession();
    const {email} = await getUser() as any;
    console.log("doc prof email -", email);
    
    if(!email) return redirect("/");
    try {
        const userData = await prisma.doctor.findFirst({
            where: {
                email
            },
            include: {
                doctorinfo: true
            }
        });
        console.log(userData);
        return NextResponse.json({info: userData?.doctorinfo});
    } catch (e) {
        console.log(e);
        return NextResponse.json({error : e});   
    }
}