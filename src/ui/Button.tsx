import React from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...props }: Props) {
  return (
    <button
      className="bg-blue-600 px-3 py-2 text-white rounded text-sm focus:bg-blue-700 font-semibold"
      {...props}
    >
      {text}
    </button>
  );
}
