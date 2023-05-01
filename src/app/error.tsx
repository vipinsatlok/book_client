"use client"; // Error components must be Client components

import Button from "@/ui/Button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex flex-col items-center gap-2 bg-blue-300 rounded p-3">
      <h1 className="text-xl font-semibold">{error.name}</h1>
      <h2 className="text-sm font-semibold">{error.message}</h2>
      <Button text="Try Again!" onClick={() => reset()} />
    </div>
  );
}
