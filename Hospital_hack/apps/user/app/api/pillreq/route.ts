import { pillsReq } from "@repo/zod";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();



export const POST = async (req : NextRequest) => {
    const { getUser } = getKindeServerSession();
    const { email } = await getUser() as any;
    // console.log(email);
    
    const datas = await req.json();
    const isVer = pillsReq.safeParse(datas);
    // console.log(isVer);
    
    if(!isVer.success) return NextResponse.json({mes: isVer.error.formErrors})
    try {
        await prisma.patient.update({
            where: {
                email
            },
            data: {
                pillrefill: {
                    create: {
                        ...datas
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