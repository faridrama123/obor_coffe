import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* AOS Animation */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <title>Obor Coffe - Coffee Shop</title>

        <link rel="shortcut icon" href="/assets/images/logo/favicon.ico" type="images/x-icon" />

        <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="assets/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="assets/css/lightcase.css"/>
        <link rel="stylesheet" href="assets/css/meanmenu.css"/>
        <link rel="stylesheet" href="assets/css/nice-select.css"/>
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css"/> 
        <link rel="stylesheet" href="assets/css/animate.min.css"/>
        <link rel="stylesheet" href="assets/css/jquery-ui.css"/>
        <link rel="stylesheet" href="assets/css/main.css"/>

        {/* Call Bootstrap JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
      <script src="assets/js/jquery-2.2.4.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/jquery.meanmenu.min.js"></script>
      <script src="assets/js/jquery.nice-select.min.js"></script>
      <script src="assets/js/lightcase.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/tilt.jquery.min.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/jquery.easing.min.js"></script>
      <script src="assets/js/scrollwatch.js"></script>
      <script src="assets/js/sticky-header.js"></script>
      <script src="assets/js/waypoint.js"></script>
      <script src="assets/js/imagesloaded.pkgd.min.js"></script>
      <script src="assets/js/isotope.pkgd.min.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfpGBFn5yRPvJrvAKoGIdj1O1aO9QisgQ"></script>
      <script src="assets/js/jquery-ui-slider-range.js"></script>
      <script src="assets/js/main.js"></script>
      <ToastContainer />
    </>
  );
}
export default MyApp;
