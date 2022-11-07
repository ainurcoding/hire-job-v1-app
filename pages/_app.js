import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import { useEffect } from 'react'
import Layout1 from '../layouts/layout1'
import Layout2 from '../layouts/layout2'

const layouts = {
  L1: Layout1,
  L2: Layout2
}

const noLayout = ({children}) => {
  return (
    <>
    {children}
    </>
  )
}
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js")
    require('../public/JS/swiper-carousel')
    require('../public/JS/upload-img-worker')
  }, [])
  const Layout = layouts[Component.layout] || noLayout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
