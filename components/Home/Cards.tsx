import Link from "next/link";

export default function Cards() {
  return (
    <section className="py-40">
      <div className="w-4/5 mx-auto text-center py-24 bg-web-design-card-bg bg-no-repeat bg-center bg-cover rounded-2xl flex flex-col items-center mb-6">
        <p className="text-primary-white text-3xl tracking-wider">Web Design</p>
        <Link href="/design">
          <a className="tracking-widest pt-2 text-primary-white">
            View Projects
          </a>
        </Link>
      </div>
      <div className="w-4/5 mx-auto text-center py-24 bg-app-design-card-bg bg-no-repeat bg-center bg-cover  rounded-2xl flex flex-col items-center mb-6">
        <p className="text-primary-white text-3xl tracking-wider">App Design</p>
        <Link href="/design">
          <a className="tracking-widest pt-2 text-primary-white">
            View Projects
          </a>
        </Link>
      </div>
      <div className="w-4/5 mx-auto text-center py-24 bg-graphic-design-card-bg bg-no-repeat bg-center bg-cover rounded-2xl flex flex-col items-center">
        <p className="text-primary-white text-3xl tracking-wider">
          Graphic Design
        </p>
        <Link href="/design">
          <a className="tracking-widest pt-2 text-primary-white">
            View Projects
          </a>
        </Link>
      </div>
    </section>
  );
}
