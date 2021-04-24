import Image from "next/image";
import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="bg-primary-black py-16 text-center">
      <Contact />
      <div className="flex flex-col justify-items-center items-center -mt-24">
        <Image
          src="/assets/shared/desktop/logo-light.png"
          alt="site logo"
          width={202}
          height={27}
          layout="fixed"
        />

        <hr className="border-solid border-t-2 border-secondary-darkGrey w-4/5 mx-auto mt-12" />

        <nav className="my-10">
          <ul className="list-none text-primary-white uppercase tracking-wide">
            <li className="text-sm pb-6">Our company</li>
            <li className="text-sm pb-6">Locations</li>
            <li className="text-sm">Contact</li>
          </ul>
        </nav>

        <div className="text-secondary-darkGrey mb-10">
          <p className="font-semibold">Designo Central Office</p>
          <p>3886 Wellignton Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>

        <div className="text-secondary-darkGrey">
          <p className="font-semibold">Contact Us (Central Office)</p>
          <p>P: +1 253-863-8967</p>
          <p>M: contact@designo.co</p>
        </div>

        <div className="mt-10 w-2/4 flex justify-around">
          <Image
            src="/assets/shared/desktop/icon-facebook.svg"
            alt="facebook icon"
            width={24}
            height={24}
          />

          <Image
            src="/assets/shared/desktop/icon-youtube.svg"
            alt="youtube icon"
            width={24}
            height={24}
          />

          <Image
            src="/assets/shared/desktop/icon-twitter.svg"
            alt="twitter icon"
            width={24}
            height={24}
          />

          <Image
            src="/assets/shared/desktop/icon-pinterest.svg"
            alt="pinterest icon"
            width={24}
            height={24}
          />

          <Image
            src="/assets/shared/desktop/icon-instagram.svg"
            alt="instagram icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}
