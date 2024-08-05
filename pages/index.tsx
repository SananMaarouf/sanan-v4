import { Inter } from "next/font/google";
import Landing from "../components/landing";
import Projects from "../components/projects";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}

export default function Home() {
  const { t } = useTranslation()
  return (
    <main className="flex flex-col px-3 bg-black">
      {/* landing section */}
      <Landing/>
      <h1>{t("posts.allPosts")}</h1>
      <Projects/>
      {/* projects section */}
      {/* footer section */}
    </main>
  );
}
