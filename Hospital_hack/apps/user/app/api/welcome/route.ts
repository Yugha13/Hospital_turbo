import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { PrismaClient } from "@repo/database"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req:any, res:any)  {
    const {getUser} = getKindeServerSession();
    const {email} = await getUser() as any;
    // console.log(email);
    if(!email) return redirect(process.env.BASEURL+"/");
    try {
        await prisma.patient.create({
            data: {
                email
            }
        });
        return NextResponse.redirect(process.env.BASEURL + "/welcome");
    } catch(e) {
        // console.log("error: ", e);

        const userExist = await prisma.patientInfo.findFirst({
            where: {
            }
        });
        if(!userExist) return redirect("/welcome");
        return redirect( "/dashboard");
    }
}