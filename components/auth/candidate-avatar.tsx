"use client";

import { ChevronDown, LogOutIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

import { menuItemsCandidate } from "@/utils/config/menu-items";
import LogoutClient from "./logout-client";
import Link from "next/link";

const CandidateAvatar = ({
  children,
  name = "John Doe",
}: {
  children: React.ReactNode;
  name?: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" focus:outline-none">
        <div className="flex items-center ">
          {children}
          <ChevronDown size={24} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-white border-none rounded-xl">
        <DropdownMenuLabel className="flex gap-4 mb-5">
          {children}
          <div className="flex flex-col">
            <p>
              <span className="text-xs"> Welcome</span> <br />{" "}
              <span className=" text-accent">{name}</span>{" "}
            </p>
          </div>
        </DropdownMenuLabel>
        {menuItemsCandidate.map((menuItem, index) => (
          <DropdownMenuItem className="py-2" key={index}>
            <Link
              className="flex gap-3 text-sm font-semibold cursor-pointer text-foreground opacity-70 hover:opacity-100 hover:text-foreground"
              href={menuItem.link}
            >
              {menuItem.icon}
              {menuItem.label}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem className="py-2">
          <LogoutClient className="flex gap-3 text-sm font-semibold cursor-pointer text-foreground opacity-70 hover:opacity-100 hover:text-foreground">
            <LogOutIcon size={24} />
            <span>Logout</span>
          </LogoutClient>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CandidateAvatar;
