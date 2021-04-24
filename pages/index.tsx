import Layout from "../components/Layout";
import Hero from "../components/Home/Hero";
import Cards from "../components/Home/Cards";
import Resources from "../components/Home/Resources";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Cards />
      <Resources />
    </Layout>
  );
}
