import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-24 bg-primary-white flex justify-between items-center px-4">
      <Image
        src="/assets/shared/desktop/logo-dark.png"
        alt="site logo"
        width={202}
        height={27}
        layout="fixed"
      />
      <Image
        className="mr-auto"
        src="/assets/shared/mobile/icon-hamburger.svg"
        alt="open menu"
        width={24}
        height={20}
        layout="fixed"
      />
    </header>
  );
}
