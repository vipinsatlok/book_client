"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/ui/Button";
import H1 from "@/ui/H1";
import Input from "@/ui/Input";
import React from "react";

interface IInputProps {
  name: string;
  number: string;
}

export default function AddUser() {
  const router = useRouter();
  const [input, setInput] = useState<IInputProps>({
    name: "",
    number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const { name, number } = input;

    if (!(name || number)) return;

    console.log(input);
    router.push("/");
  };

  return (
    <div>
      <H1 text="Add User" />
      <Input
        onChange={handleChange}
        id="name"
        name="name"
        placeholder="Ex - Vipin"
        label="Enter Sevadar Name"
        value={input.name}
      />
      <Input
        value={input.number}
        onChange={handleChange}
        id="number"
        placeholder="Ex - 7652027773"
        label="Enter Seva Sevadar  Number"
        name="number"
      />
      <Button onClick={handleSubmit} text="Submit" />
    </div>
  );
}
