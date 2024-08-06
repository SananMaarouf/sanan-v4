import Landing from "../components/landing";
import Projects from "../components/projects";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}

export default function Home() {
  return (
    <main className="flex flex-col px-3 bg-black">
      {/* landing section */}
      <Landing/>
      {/* projects section */}
      <Projects/>
    </main>
  );
}
