"use client";

import { Menu, Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [dropdownMenu, setDropdownMenu] = useState(false);

  const handleLinkClick = () => {
    setDropdownMenu(false);
  };

  return (
    <div className="sticky top-0 z-50 py-2 px-5 flex gap-2 justify-between items-center bg-white max-sm:px-2">
      <Link href="/">
        <Image src="/UFS_logo.png" alt="logo" width={80} height={80} />
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Breadcrumb>
          <BreadcrumbList className="flex gap-4">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className={`hover:text-[#BF8B32] ${
                  pathname === "/" && "text-[#BF8B32]"
                }`}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/aboutus"
                className={`hover:text-[#BF8B32] ${
                  pathname === "/aboutus" && "text-[#BF8B32]"
                }`}
              >
                About
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/contactus"
                className={`hover:text-[#BF8B32] ${
                  pathname === "/contactus" && "text-[#BF8B32]"
                }`}
              >
                Contact
              </BreadcrumbLink>
            </BreadcrumbItem>
            {/* <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/activities"
                className={`hover:text-[#BF8B32] ${
                  pathname === "/activities" && "text-[#BF8B32]"
                }`}
              >
                Activities
              </BreadcrumbLink>
            </BreadcrumbItem> */}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="relative flex gap-3 items-center">
        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-10 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link
              href="/"
              className="hover:text-[#BF8B32]"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              className={`hover:text-[#BF8B32] ${
                pathname === "/aboutus" && "text-[#BF8B32]"
              }`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/contactus"
              className={`hover:text-[#BF8B32] ${
                pathname === "/contactus" && "text-[#BF8B32]"
              }`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            {/* <Link
              href="/activities"
              className={`hover:text-[#BF8B32] ${
                pathname === "/activities" && "text-[#BF8B32]"
              }`}
              onClick={handleLinkClick}
            >
              Activities
            </Link> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
