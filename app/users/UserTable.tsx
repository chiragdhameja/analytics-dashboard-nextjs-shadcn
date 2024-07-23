import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (u) => u.email : (u) => u.name
  );
  return (
    <>
      <Table>
        <TableCaption>A list of your users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">
              {" "}
              <Link href="/users?sortOrder=name">Name</Link>
            </TableHead>

            <TableHead>
              <Link href="/users?sortOrder=email">Email</Link>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>

              <TableCell className="font-medium">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTable;
