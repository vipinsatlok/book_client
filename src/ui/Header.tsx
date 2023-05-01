import Button from "./Button";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-xl font-semibold">Book Seva</h1>
      <span className="text-sm flex items-center gap-2 font-semibold">
        Vipin Das Ji
        <Button text="Logout" />
      </span>
    </div>
  );
}
