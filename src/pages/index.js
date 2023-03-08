import { About, Clients, Footer, Header, Home, Road, Team, Token, White, Works } from '@/components'
import Head from 'next/head'

export default function index() {
  return (
    <>
      <Head>
        <title>Voilk | Crypto Social Network</title>
        <meta name="description" content="Voilk is a blockchain based, decentralized, rewarding, crypto social network. Where you can earn Money from every like that you give to a post, or to receive to your own post." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />
      </Head>

      <Header />
      <Home />
      <Works />
      <About />
      <Token />
      <Road />
      <Team />
      <White />
      <Footer />
      <a href="#" class="scrollup btn-default" style={{ display: "none" }}><i class="ion-ios-arrow-up"></i></a>

    </>
  )
}
