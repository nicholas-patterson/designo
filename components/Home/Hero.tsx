import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-primary-peach bg-home-hero-pattern bg-no-repeat bg-cover bg-center px-4 flex flex-col overflow-hidden text-center">
      <h3 className="text-primary-white font-medium text-4xl pt-24">
        Award-winning custom designs and digital branding solutions
      </h3>
      <p className="text-primary-white pt-12 text-sm leading-loose">
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <button className="inline-block py-4 px-7 mt-12 uppercase bg-primary-white hover:bg-secondary-lightPeach rounded-lg font-semibold text-secondary-darkGrey hover:text-primary-white w-1/8 mx-auto">
        Learn More
      </button>
      <div className="mt-16 -mb-48">
        <Image
          src="/assets/home/desktop/image-hero-phone-2.png"
          alt="site logo"
          width={284}
          height={573}
          layout="fixed"
        />
      </div>
    </section>
  );
}
