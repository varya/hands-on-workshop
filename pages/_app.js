import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Hands-on with design systems workshop</title>
        <meta
          name="Description"
          content="This workshop helps you learn and practice design systems working in a team. You can join as a designer or developer."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
