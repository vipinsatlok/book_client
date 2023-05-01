"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/ui/Button";
import H1 from "@/ui/H1";
import Input from "@/ui/Input";
import React from "react";
import { getCookie } from "@/utils/getCookie";
import axios from "axios";

interface IInputProps {
  number: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [input, setInput] = useState<IInputProps>({
    number: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const { number, password } = input;

    if (!(number || password)) return;

    try {
      const data = await axios.post(
        "https://book-server.cyclic.app/api/auth/login",
        input
      );

      console.log(data)
    } catch (err) {
      console.log(err);
    }

    console.log(input);
    router.push("/");
  };

  return (
    <div>
      <H1 text="Login Now" />
      <Input
        onChange={handleChange}
        id="number"
        name="number"
        type="text"
        placeholder="Ex - 7652027773"
        label="Enter Your Number"
        value={input.number}
      />
      <Input
        onChange={handleChange}
        id="password"
        name="password"
        type="text"
        placeholder="Ex - **********"
        label="Enter Your Password"
        value={input.password}
      />
      <Button onClick={handleSubmit} text="Login" />
    </div>
  );
}
