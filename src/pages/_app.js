import "@/styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { SubjectProvider } from "@/contexts/ContextQuery";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <SubjectProvider>
      <Head>
          <title>PG DEV</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SubjectProvider>
  )
}
