import { docPrescrip } from "@repo/zod";
import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@repo/database";


const prisma = new PrismaClient();


export const POST = async ( req : NextRequest ) => {
    const { getUser } = getKindeServerSession();
    const { email } = await getUser() as any;
    const datas = await req.json();
    const isVer = docPrescrip.safeParse(datas);
    // console.log(isVer);
    if(!isVer.success) return NextResponse.json({ mes : isVer.error.formErrors }, { status : 405 });
    try {
        const pres = await prisma.doctor.update({
            where: { 
              email 
            },
            data: {
                prescription : {
                    create : {
                        ...datas
                    }
                }
            },
          });
        //   console.log(pres);
        return NextResponse.json({ message: "prescription is sent" }, { status: 201 });
    } catch (e) {
        // console.log(e);
        return NextResponse.json({ error: "An error occurred while creating the user" }, { status: 500 });
    }
}