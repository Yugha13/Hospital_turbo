import { userInfoSchema } from "@repo/zod";
import { NextRequest, NextResponse } from "next/server";
import {  getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@repo/database";


const prisma = new PrismaClient();

export const GET = async(req : NextRequest) => {
    const { getUser } = getKindeServerSession();
    const { email } = await getUser() as any;
    const user = await prisma.patientInfo.findFirst({
        where: {
            email
        },
    });
    if(!user) return NextResponse.json({mes: "not found"}, {status: 405})
    // console.log(user);
    return NextResponse.json(user);
}


export const PUT = async (req : NextRequest) => {
    const { getUser } = getKindeServerSession();
    const { email } = await getUser() as any;

    const datas = await req.json();
    const isVer = userInfoSchema.safeParse(datas);
    // console.log(isVer.error?.formErrors);
    // if(!isVer.success) return NextResponse.json({mes: isVer.error.formErrors}, {status: 405})
    try {
        await prisma.patientInfo.update({
            where : {
                email
            },
            data : {
                ...datas
            }
        });

        return NextResponse.json({mes: "done"})
    } catch (e) {
        // console.log(e);
        return NextResponse.json({mes: "not done"})
        
    }
}

export const POST = async (req : NextRequest) => {
    const { getUser } = getKindeServerSession();
    const { email } = await getUser() as any;
    // console.log(email);
    
    const datas = await req.json();
    const isVer = userInfoSchema.safeParse(datas);
    // console.log(isVer.error?.formErrors);
    if(!isVer.success) return NextResponse.json({mes: isVer.error.formErrors})
    try {
        await prisma.patient.update({
            where: {
                email
            },
            data: {
                patientInfo: {
                    create: {
                        ...datas,
                        dob: new Date(datas.dob)
                    }
                }
            }
        });
        return NextResponse.json({ message: "User info added successfully" }, { status: 201 });
    }catch (e) {
        // console.log(e);
        return NextResponse.json({ error: "An error occurred while creating the user" }, { status: 500 });
    } 
}