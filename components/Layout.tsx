import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ children, title = "Designo" }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="z-30 relative min-h-pageHeight mb-24">{children}</div>
      <Footer />
    </div>
  );
}
