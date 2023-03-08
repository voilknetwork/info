import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="assets/css/animate.css" />
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/ionicons.min.css" />
        <link rel="stylesheet" href="assets/owlcarousel/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
      </Head>
      <body class="v_dark" data-spy="scroll" data-offset="110">
        <div class="preloader">
          <div id="g-spinner" class="loading">
            <div class="circle c1"></div>
            <div class="circle c2"></div>
            <div class="circle c3"></div>
            <div class="circle c4"></div>
          </div>
        </div>
        <Main />
        <NextScript />
        <script src="assets/js/jquery-1.12.4.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
        <script src="assets/js/magnific-popup.min.js"></script>
        <script src="assets/js/jquery.countdown.min.js"></script>
        <script src="assets/js/scripts.js"></script>
      </body>
    </Html>
  )
}
