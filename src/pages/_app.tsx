import "../styles/bootstrap.min.css";
import "../styles/globals.scss";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer/Footer";
function MyApp({ Component, pageProps }) {
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
