import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {appWithTranslation} from "next-i18next"; 
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const App = ({ Component, pageProps }: AppProps) => {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  ) 
}

export default appWithTranslation(App);