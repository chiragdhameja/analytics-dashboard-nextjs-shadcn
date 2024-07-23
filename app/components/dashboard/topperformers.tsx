"use client";

import React, { useEffect, useState } from "react";
import { Crown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

interface Performer {
  name: string;
  views: number;
}

export function TopPerformersTable() {
  const [data, setData] = useState<Performer[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/top-performers");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const topPerformers = await response.json();
        setData(topPerformers);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
          setError(err.message);
        } else {
          console.error("An unknown error occurred");
          setError("An unknown error occurred");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-1/2 p-8 border rounded-lg">
        <h1 className="text-md font-semibold">Top 5 performers this month</h1>
        {error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : (
          <Table>
            <TableHead>
              <TableCell>Name</TableCell>
            </TableHead>
            <TableHead>
              <TableCell>Views</TableCell>
            </TableHead>
            <TableBody>
              {data.map((performer, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {index === 0 && <Crown />}
                    {performer.name}
                  </TableCell>
                  <TableCell className="pl-10">{performer.views}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </>
  );
}
