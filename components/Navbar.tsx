import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileNav, setIsMobileNav] = useState(false);
  return (
    <>
      <header className="h-24 bg-primary-white flex justify-between items-center px-4">
        <Image
          src="/assets/shared/desktop/logo-dark.png"
          alt="site logo"
          width={202}
          height={27}
          layout="fixed"
        />
        <Image
          onClick={() => setIsMobileNav(!isMobileNav)}
          className="mr-auto"
          src={
            isMobileNav
              ? "/assets/shared/mobile/icon-close.svg"
              : "/assets/shared/mobile/icon-hamburger.svg"
          }
          alt="open menu"
          width={24}
          height={20}
          layout="fixed"
        />
      </header>
      {isMobileNav && (
        <nav className="bg-primary-black p-6 absolute top-30 left-0 right-0 z-40">
          <ul className="list-none  text-primary-white text-2xl uppercase">
            <li className="pb-6">
              <Link href="/about">
                <a>Our Company</a>
              </Link>
            </li>
            <li className="pb-6">
              <Link href="/location">
                <a>Location</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
