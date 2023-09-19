import { prisma } from "./prisma";

export const getStudentsList = async () => {
  const students = await prisma.student.findMany({
    select: {
      id: true,
      firstName: true,
      secondName: true,
      middleName: true,
      gradeAvg: true,
    },
  });
  return students;
};
