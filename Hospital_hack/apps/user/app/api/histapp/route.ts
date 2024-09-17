import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export const GET = async (req:NextRequest) => {
    const {getUser} = getKindeServerSession();
    const {email} = await getUser() as any;
    console.log(email);
    if(!email) return NextResponse.json({status: 405});
    try {
        const appointment = await prisma.appointment.findMany({
            where: {
              email,
              status: {
                in: ["ACCEPTED", "DECLINED"],
              }, 
            },
            orderBy: [
              {date: 'asc'}, {time: 'asc'}
            ],
            include: {
              patient: true
            }
          });

        console.log(appointment);
        return NextResponse.json({info: appointment});
    } catch (e) {
        console.log(e);
        return NextResponse.json({error : e});
    }
}