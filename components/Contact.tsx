export default function Contact() {
  return (
    <section className="w-11/12 mx-auto relative left-0 right-0 -top-48 z-10">
      <div className="py-24 px-3 bg-primary-peach rounded-lg bg-contact-pattern bg-right bg-no-repeat bg-cover">
        <h3 className="font-semibold text-primary-white text-5xl mb-10">
          Let's talk about your project
        </h3>
        <p className="text-xl text-primary-white">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow.
        </p>
        <button className="inline-block py-4 px-7 mt-12 uppercase bg-primary-white hover:bg-secondary-lightPeach rounded-lg font-semibold text-secondary-darkGrey hover:text-primary-white">
          Get In Touch
        </button>
      </div>
    </section>
  );
}
