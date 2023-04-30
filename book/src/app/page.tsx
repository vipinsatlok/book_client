import TotalBookSevaCard from "@/ui/TotalBookSevaCard";
import Box from "./Box";

export default function Home() {
  return (
    <div className="flex gap-2 flex-col">
      <TotalBookSevaCard />
      <div className="flex gap-2 flex-col">
        <Box href="/books">
          Icon <span>View Books</span>
        </Box>
        <Box href="/users">
          Icon <span>View Users</span>
        </Box>
      </div>
    </div>
  );
}
