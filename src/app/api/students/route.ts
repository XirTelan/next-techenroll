import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma";
import { getStudentsList } from "@/shared/lib/apiDb";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("body", body);
  const userInfo: StudentInfo = body.data;
  userInfo.gradeAvg = +userInfo.gradeAvg;
  userInfo.dateOfBirth = new Date(userInfo.dateOfBirth).toISOString();
  userInfo.passIssueDate = new Date(userInfo.passIssueDate).toISOString();
  const user = await prisma.student.create({
    data: body.data,
  });

  return NextResponse.json("Not implementent", { status: 201 });
}
export async function GET(request: NextRequest) {
  try {
    const students = await getStudentsList();
    return NextResponse.json(students, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
