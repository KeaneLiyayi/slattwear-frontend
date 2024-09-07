import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CartProvider from "@/contexts/CartContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import { Varela_Round } from "next/font/google";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
const inter = Varela_Round({ subsets: ["latin"], weight: '400' });



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    // Load Cloudinary's JavaScript library
    const script = document.createElement('script');
    script.src = 'https://widget.Cloudinary.com/v2.0/global/all.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <SessionProvider session={session} >

      <CartProvider>

        <main className={`min-h-screen p-4 bg-white text-text ${inter.className} `}>
          <Header />
          <Component {...pageProps} />;
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Footer />


        </main>
      </CartProvider>
    </SessionProvider>



  )
}
