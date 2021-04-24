import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-primary-peach bg-home-hero-pattern bg-no-repeat bg-cover bg-center px-4 flex flex-col">
      <h3>Award-winning custom designs and digital branding solutions</h3>
      <p>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <button className="inline-block py-4 px-7 mt-12 uppercase bg-primary-white rounded-lg font-semibold text-secondary-darkGrey">
        Learn More
      </button>
      <Image
        src="/assets/home/desktop/image-hero-phone.png"
        alt="site logo"
        width={284}
        height={573}
        layout="fixed"
      />
    </section>
  );
}
