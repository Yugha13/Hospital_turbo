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
        const userExist = await prisma.doctor.findFirst({
            where: {
                email
            }
        });
        if(!userExist){
            return redirect("/");
        } 
        return NextResponse.redirect(process.env.BASEURL + "/dashboard");
    } catch(e) {
        console.log("error: ", e);
        return redirect("/");
    }
}