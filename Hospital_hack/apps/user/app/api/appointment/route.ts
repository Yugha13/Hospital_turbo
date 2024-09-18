import { userAppointment } from "@repo/zod";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@repo/database";
import {  getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const prisma = new PrismaClient();

export const POST = async (req : NextRequest) => {
    const { getUser } = getKindeServerSession();
    const { email } = await getUser() as any;
    const datas = await req.json();
    // console.log(datas);
    
    const isVer = userAppointment.safeParse(datas);
    console.log(isVer.error?.formErrors);
    // console.log(email);
    
    const docemail = datas.doctorEmail;
    datas.doctorEmail = undefined;
    if(!isVer.success) return NextResponse.json({mes: isVer.error.formErrors})
    try {
        await prisma.doctor.update({
            where: {
                email: docemail
            },
            data: {
                appointments: {
                    create: {
                    ...datas, date: new Date(datas.date), email
                    
                    }
                }
            },
            
            });
        return NextResponse.json({ message: "appointment booked" }, { status: 201 });
    }catch (e) {
        // console.log(e);
        return NextResponse.json({ error: "An error occurred while creating the user" }, { status: 500 });
    } 
}