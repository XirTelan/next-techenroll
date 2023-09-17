import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("body", body);
  const user = await prisma.student.create({
    data: body.data,
  });

  return NextResponse.json("Not implementent", { status: 201 });
}
export async function GET(request: NextRequest) {
  try {
    const students = await prisma.student.findMany();
    return NextResponse.json(students, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
