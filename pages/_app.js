import Layout from "../components/layout/Layout"
import NextNProgress from "nextjs-progressbar"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
