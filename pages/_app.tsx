import { appWithTranslation } from "next-i18next"; 
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

/* import fontawesome */
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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