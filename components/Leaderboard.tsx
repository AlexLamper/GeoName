import { useEffect, useState } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

type LeaderboardEntry = {
  id: string;
  name: string;
  score: number;
  createdAt: Date;
};

// Define the columns for the DataTable
const columns: ColumnDef<LeaderboardEntry>[] = [
  {
    accessorKey: "rank",
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/user'); // Updated endpoint to fetch all users
        const result = await response.json();

        console.log("API Response:", result);

        if (response.ok) {
          if (Array.isArray(result)) {
            // Sort users by score in descending order and assign ranks
            const rankedData = result
              .sort((a, b) => b.score - a.score) // Sort by score descending
              .map((user, index) => ({
                ...user,
                rank: index + 1, // Assign rank based on index
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

    fetchData();
  }, []);

  // Initialize the table
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      {error && <div className="text-red-500">{error}</div>}
      {/* Render the table */}
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
