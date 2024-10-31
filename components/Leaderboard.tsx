import { useEffect, useState } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { LeaderboardEntry } from '@/lib/types'; // Assuming LeaderboardEntry is defined here

const columns: ColumnDef<LeaderboardEntry>[] = [
  {
    accessorKey: "leaderboardPlacement", // Changed from 'rank' to 'leaderboardPlacement'
    header: "Rank",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "score",
    header: "Score",
  },
  {
    accessorKey: "createdAt",
    header: "Account Created At",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
  },
];

const Leaderboard = () => {
  const [data, setData] = useState<LeaderboardEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/user');
      const result = await response.json();

      if (response.ok) {
        if (Array.isArray(result)) {
          // Assuming result is an array of LeaderboardEntry
          const rankedData = result
            .sort((a, b) => b.score - a.score)
            .map((user, index) => ({
              ...user,
              leaderboardPlacement: index + 1,
            }));

          setData(rankedData);
        } else {
          setError("Unexpected response format");
        }
      } else {
        setError(result.error || "Failed to fetch users");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Error fetching users");
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on mount

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      {error && <div className="text-red-500">{error}</div>}
      <table className="min-w-full border border-gray-300 rounded-lg shadow">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2 text-left border-b">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b hover:bg-opacity-80">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
