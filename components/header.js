import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import Nav from "@components/nav";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-green-600">
      <Nav />
      {/* <div className="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-white">
              Hands On Workshop
            </a>
          </Link>
        </div>
      </div> */}
    </header>
  );
}
