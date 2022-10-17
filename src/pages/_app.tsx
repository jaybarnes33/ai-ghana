import "../styles/bootstrap.min.css";
import "../styles/globals.scss";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer/Footer";
import aos from "aos";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
