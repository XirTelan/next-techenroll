import { prisma } from "@/shared/lib/prisma";
import StudentsList from "@/widgets/StudentsList/StudentsList";
import Link from "next/link";
import React from "react";

const Students = async () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Список студентов</h1>
        <Link href="/students/create">Добавить студента</Link>
      </div>
      <StudentsList />
    </div>
  );
};

export default Students;
