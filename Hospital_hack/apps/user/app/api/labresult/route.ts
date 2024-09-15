import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const prisma = new PrismaClient();

export const GET = async ( req : NextRequest ) => {
    const { getUser } = getKindeServerSession();
    const { email } = await getUser() as any;
    try {
        const result = await prisma.labResult.findMany({
            where : {
                email
            }
        });
        // console.log(prescrip);
        return NextResponse.json({info:result})
    } catch (e) {
        // console.log(e);
        return NextResponse.json({error : e})
    }
}