import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: Props) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={props.id} className="mb-2 font-semibold text-gray-700">
        {label}
      </label>
      <input
        className="px-4 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        {...props}
      />
    </div>
  );
}
