import Link from "next/link";
import React from "react";

interface Props{
    href:string
    children : React.ReactNode
}

export default function Box({ href, children } : Props) {
  return (
    <Link
      className="w-full flex gap-3 rounded text-xl bg-orange-500 text-white p-3"
      href={href}
    >
        {children}
    </Link>
  );
}
