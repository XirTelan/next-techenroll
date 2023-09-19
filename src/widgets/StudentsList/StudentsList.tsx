import { getStudentsList } from "@/shared/lib/apiDb";
import { prisma } from "@/shared/lib/prisma";
import React from "react";

const StudentsList = async () => {
  const students = await getStudentsList();
  console.log(students);
  return (
    <div className="border border-neutral-600 rounded-lg p-4 bg-neutral-900">
      <table>
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">ФИО</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td> {index + 1}</td>
              <td>
                {student.secondName}
                {student.firstName}
                {student.middleName}
              </td>
              <td>{student.gradeAvg}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
