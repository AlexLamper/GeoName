"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

export default function FlagsBreadcrumbs() {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);

  const getCrumbName = (part: string) => {
    return decodeURIComponent(part.charAt(0).toUpperCase() + part.slice(1));
  };

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center space-x-2">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className={`text-gray-500 hover:text-gray-700 transition-colors duration-200 ${
              pathname === "/" ? "font-semibold text-gray-800" : ""
            }`}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400" />
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/flags"
            className={`text-gray-500 hover:text-gray-700 transition-colors duration-200 ${
              pathname.startsWith("/flags")
            }`}
          >
            Flags
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathParts.slice(1).map((part, index) => {
          const isLastPart = index === pathParts.length - 1;
          const href = `/${pathParts.slice(0, index + 2).join("/")}`;

          return (
            <React.Fragment key={part}>
              <BreadcrumbSeparator className="text-gray-400" />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={href}
                  className={`text-gray-500 hover:text-gray-700 transition-colors duration-200 ${
                    isLastPart ? "font-semibold text-gray-800" : ""
                  }`}
                >
                  {getCrumbName(part)} {/* Decode crumb names */}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
