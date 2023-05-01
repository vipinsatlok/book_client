"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import Button from "@/ui/Button";
import H1 from "@/ui/H1";
import Input from "@/ui/Input";
import React from "react";

interface IInputProps {
  place: string;
  date: string;
  gyanGanga: string;
  jeeneKiRah: string;
}

export default function AddBook() {
  const router = useRouter();
  const [input, setInput] = useState<IInputProps>({
    place: "",
    date: "",
    gyanGanga: "",
    jeeneKiRah: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const { place, gyanGanga, jeeneKiRah } = input;

    if (!(place || gyanGanga || jeeneKiRah)) return;

    console.log(input);
    router.push("/");
  };

  return (
    <div>
      <H1 text="Add You Book Seva" />
      <Input
        onChange={handleChange}
        id="place"
        name="place"
        placeholder="Ex - Banthara"
        label="Enter Seva Place"
        value={input.place}
      />
      <Input
        value={input.date}
        onChange={handleChange}
        type="date"
        id="date"
        placeholder="Ex - Banthara"
        label="Enter Seva Seva Date"
        name="date"
      />
      <Input
        value={input.gyanGanga}
        onChange={handleChange}
        type="string"
        id="gyanGanga"
        inputMode="numeric"
        placeholder="Ex - 00"
        label="Enter Gyan Ganga Seva"
        name="gyanGanga"
      />
      <Input
        value={input.jeeneKiRah}
        onChange={handleChange}
        inputMode="numeric"
        type="string"
        id="jeeneKiRah"
        placeholder="Ex - 00"
        label="Enter Jeene Ki Rah Seva"
        name="jeeneKiRah"
      />
      <Button onClick={handleSubmit} text="Submit" />
    </div>
  );
}
