"use client";

import Input from "@/shared/ui/Input/Input";
import React from "react";
import {
  Controller,
  RegisterOptions,
  SubmitHandler,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";

const StudentForm = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<StudentInfo>();
  console.log(watch("firstName")); // watch input value by passing the name of it
  const onSubmit: SubmitHandler<StudentInfo> = async (data) => {
    console.log(data);
    const res = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    });
    const userInfo = await res.json();
    console.log(userInfo);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      StudentForm
      <Input
        name={"firstName"}
        label={"Имя"}
        register={register}
        type={"text"}
      />
      <Input
        name={"secondName"}
        label={"Фамилия"}
        register={register}
        type={"text"}
      />
      <Input
        name={"middleName"}
        label={"Отчество"}
        register={register}
        type={"text"}
      />
      <Input
        name={"gradeAvg"}
        label={"Средний балл"}
        register={register}
        type={"number"}
      />
      <Input
        name={"dateOfBirth"}
        label={"Дата рождения"}
        register={register}
        type={"date"}
      />
      <Input
        name={"genderId"}
        label={"Пол"}
        register={register}
        type={"number"}
      />
      <Input
        name={"nationality"}
        label={"Национальность"}
        register={register}
        type={"text"}
      />
      <Input
        name={"passSn"}
        label={"Номер и серия паспорта"}
        register={register}
        type={"text"}
      />
      <Input
        name={"passDivCode"}
        label={"Код подразделения"}
        register={register}
        type={"text"}
      />
      <Input
        name={"passIssueDate"}
        label={"Дата выдачи"}
        register={register}
        type={"date"}
      />
      <Input
        name={"passIssueBy"}
        label={"Выдан"}
        register={register}
        type={"text"}
      />
      <Input
        name={"birthplace"}
        label={"Место рождения"}
        register={register}
        type={"text"}
      />
      <Input
        name={"residentialAddress"}
        label={"Адрес проживания"}
        register={register}
        type={"text"}
      />
      <Input
        name={"registrationAddress"}
        label={"Адрес регистрации"}
        register={register}
        type={"text"}
      />
      <Input name={"snils"} label={"Снилс"} register={register} type={"text"} />
      <button>Создать</button>
    </form>
  );
};

export default StudentForm;
