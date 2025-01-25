import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Badge from "@components/Badge";
import Script from "next/script";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-6ZYD0RKJ4E`}
      ></Script>
      <Script>{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-6ZYD0RKJ4E')`}</Script>
      <body>
        <div className="overflow-hidden">
          <Navbar />
          <main className="app">{children}</main>
          <Badge />
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
