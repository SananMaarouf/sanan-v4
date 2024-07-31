import { Inter } from "next/font/google";
import Landing from "../components/landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col px-3 bg-black">
      {/* landing section */}
      <Landing/>
      {/* projects section */}
      {/* footer section */}
    </main>
  );
}
