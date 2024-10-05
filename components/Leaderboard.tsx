// Import necessary components from ShadCN and others
import { useState } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

// Define the types for the leaderboard data
type LeaderboardEntry = {
  name: string;
  score: number;
  country: string;
  date: Date;
};

// Define the columns for the DataTable
const columns: ColumnDef<LeaderboardEntry>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "score",
    header: "Score",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => new Date(row.original.date).toLocaleDateString(),
  },
];

const Leaderboard = () => {
  // Sample data for the leaderboard
  const data: LeaderboardEntry[] = [
    { name: "User1", score: 150, country: "USA", date: new Date() },
    { name: "User2", score: 200, country: "Canada", date: new Date() },
    // Add more sample data here
  ];

  // State for filters (time period and country)
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");

  // Filter the data based on the selected time period and country
  const filteredData = data.filter((entry) => {
    const withinTimePeriod =
      selectedTimePeriod === "all" ||
      (selectedTimePeriod === "week" &&
        entry.date > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
      (selectedTimePeriod === "month" &&
        entry.date > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)) ||
      (selectedTimePeriod === "year" &&
        entry.date > new Date(Date.now() - 365 * 24 * 60 * 60 * 1000));
    const withinCountry =
      selectedCountry === "all" || entry.country === selectedCountry;

    return withinTimePeriod && withinCountry;
  });

  // Initialize the table
  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>

      {/* Time Period Filter */}
      <div className="mb-4">
        <label htmlFor="timePeriod" className="mr-2">
          Filter by Time Period:
        </label>
        <select
          id="timePeriod"
          value={selectedTimePeriod}
          onChange={(e) => setSelectedTimePeriod(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Time</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      {/* Country Filter */}
      <div className="mb-4">
        <label htmlFor="country" className="mr-2">
          Filter by Country:
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Countries</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          {/* Add more country options here */}
        </select>
      </div>

      {/* Render the table */}
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left border-b"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
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