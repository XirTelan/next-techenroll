import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const student = await prisma.student.findUnique({ where: { id: params.id } });
  if (student) return NextResponse.json(student, { status: 201 });
  else return NextResponse.json("Not found", { status: 404 });
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const put = await prisma.student.update({
    where: { id: params.id },
    data: body.data,
  });
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const student = await prisma.student.delete({
    where: {
      id: params.id,
    },
  });
  console.log();
  return NextResponse.json("", { status: 201 });
}
