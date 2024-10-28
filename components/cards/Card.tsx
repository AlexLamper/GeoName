import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Card props interface
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string
  statistic: string
  icon?: React.ReactNode
  href: string
}

const Card: React.FC<CardProps> = ({ className, header, statistic, icon, href, ...props }) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "border border-gray-300 rounded-[0.4rem] p-6 h-48 flex flex-col justify-between transition-colors",
          "bg-transparent dark:bg-[#1e1e1e] dark:border-none dark:hover:shadow-[0_2px_8px_rgba(200,200,200,0.1)]",
          "cursor-pointer hover:shadow-lg",
          className
        )}
        {...props}
      >
        <div className="flex items-center mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold mb-3 dark:text-[#F6F6F6]">{header}</h3>
        <p className="text-[#1A5319] text-3xl font-bold dark:text-[#FCFFFD]">{statistic}</p>
      </div>
    </Link>
  )
}

export { Card }
