import TotalBookSevaCard from "@/ui/TotalBookSevaCard";
import Box from "./Box";
import { GiBlackBook } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { TiPencil } from "react-icons/ti";
import { getCookie } from "@/utils/getCookie";

export default function Home() {

  return (
    <div className="flex gap-2 flex-col">
      <TotalBookSevaCard />
      <div className="flex gap-2 flex-col">
        <Box href="/books/add">
          <TiPencil /> <span>Add Book</span>
        </Box>
        <Box href="/books">
          <GiBlackBook /> <span>View Books</span>
        </Box>
        <Box href="/users/add">
          <TiPencil /> <span>Add User</span>
        </Box>
        <Box href="/users">
          <HiUsers /> <span>View Users</span>
        </Box>
      </div>
    </div>
  );
}
