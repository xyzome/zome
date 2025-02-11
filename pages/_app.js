import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Layout from "@/components/common/Layout";
import "@/styles/main.scss";
import CustomCursor from "@/components/CustomCursor";
import dynamic from "next/dynamic";

// Dynamically import WhatsAppButton to avoid SSR issues
// const WhatsAppButton = dynamic(() => import("@/components/WhatsApp/WhatsAppButton"), { ssr: false });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Layout>
        <CustomCursor />
        <Component {...pageProps} />
        {/* <WhatsAppButton /> Floating WhatsApp Button */}
      </Layout>
    </>
  );
}
