import Header from "@/components/Header";
import CartProvider from "@/contexts/CartContext";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
const inter = Poppins({ subsets: ["latin"], weight: '400' });


export default function App({ Component, pageProps }) {
  return (
    <CartProvider>

      <main className={`min-h-screen p-4 bg-background text-text ${inter.className}`}>
        <Header />
        <Component {...pageProps} />;


      </main>
    </CartProvider>


  )
}
