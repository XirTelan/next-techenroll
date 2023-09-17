import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  console.log("HEY");
  const body = await request.json();
  const { name, email, password } = body;
  console.log(body);

  const isExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (isExist) return NextResponse.json("Is already exist", { status: 400 });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
