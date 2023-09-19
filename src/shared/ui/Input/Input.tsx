import React from "react";
import { UseFormRegister } from "react-hook-form";

const Input = ({
  name,
  label,
  register,
  type,
}: {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  type: React.HTMLInputTypeAttribute;
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...register(name)}
        className=" text-red-500"
        id={name}
        name={name}
        type={type}
      />
    </div>
  );
};

export default Input;
