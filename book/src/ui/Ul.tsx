import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Ul({ children }: Props) {
  return <ul className="flex w-full gap-4 flex-col">{children}</ul>;
}
