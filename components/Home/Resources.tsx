import Image from "next/image";

export default function Resources() {
  return (
    <section className="pb-40 flex flex-col">
      <div className="relative mx-auto w-4/5 mb-16 text-center">
        <Image
          src="/assets/home/desktop/bg-pattern-hero-home.svg"
          width={202}
          height={202}
          layout="fixed"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Image
            src="/assets/home/desktop/illustration-passionate.svg"
            width={202}
            height={202}
            layout="fixed"
          />
        </div>

        <h4 className="text-2xl tracking-widest pb-6">Passionate</h4>
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </div>

      <div className="relative mx-auto w-4/5 mb-16 text-center">
        <Image
          src="/assets/home/desktop/bg-pattern-hero-home.svg"
          width={202}
          height={202}
          layout="fixed"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Image
            src="/assets/home/desktop/illustration-passionate.svg"
            width={202}
            height={202}
            layout="fixed"
          />
        </div>

        <h4 className="text-2xl tracking-widest pb-6">Resourceful</h4>
        <p>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </div>

      <div className="relative mx-auto w-4/5 text-center">
        <Image
          src="/assets/home/desktop/bg-pattern-hero-home.svg"
          width={202}
          height={202}
          layout="fixed"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Image
            src="/assets/home/desktop/illustration-passionate.svg"
            width={202}
            height={202}
            layout="fixed"
          />
        </div>

        <h4 className="text-2xl tracking-widest pb-6">Friendly</h4>
        <p>
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </div>
    </section>
  );
}
