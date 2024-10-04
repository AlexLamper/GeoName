import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface Card2Props extends React.HTMLAttributes<HTMLDivElement> {
  header: string
  icon?: React.ReactNode
  href: string
}

const Card2: React.FC<Card2Props> = ({ className, header, icon, href, ...props }) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "border border-gray-300 rounded-[0.4rem] p-6 h-48 flex flex-col justify-between transition-colors",
          "bg-transparent dark:bg-[#D6EFD8] dark:border-none",
          "cursor-pointer hover:shadow-lg",
          className
        )}
        {...props}
      >
        <h3 className="text-2xl font-semibold mb-3 dark:text-[#161616]">{header}</h3>
        <div className="ml-auto">
          <p className="text-[#1A5319] text-3xl font-bold dark:text-[#FCFFFD]">{icon}</p>
        </div>
      </div>
    </Link>
  )
}

export { Card2 }
