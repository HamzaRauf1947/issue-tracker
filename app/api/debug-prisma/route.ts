import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const info = {
    prismaType: typeof prisma,
    hasAccount: typeof prisma?.account,
    hasUser: typeof prisma?.user,
    hasSession: typeof prisma?.session,
    hasVerificationToken: typeof prisma?.verificationToken,
    keys: prisma ? Object.keys(prisma) : [],
  };

  console.log("PRISMA DEBUG:", info);

  return NextResponse.json(info);
}