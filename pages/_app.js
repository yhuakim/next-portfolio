import Layout from '../components/Layout'
import '../styles/globals.scss'
import '@fortawesome/fontawesome-free/css/all.css'
/* import 'tailwindcss/tailwind.css' */
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Layout >
    <Component {...pageProps}/>
  </Layout>
  </>
  )
}

export default MyApp
