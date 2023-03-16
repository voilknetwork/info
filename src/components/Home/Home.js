import React, { memo } from 'react'

const Home = memo(() => {
  return (
    <section id="home" class="banner_section section_gradiant_dark small_pb">
    <div id="banner_bg_effect" class="banner_effect"></div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 order-lg-first text_md_center">
                <div class="banner_text">
                    <h1><span>Voilk</span> World's First</h1>
                    <h3>Crypto Social Network!</h3>
                    <p>Voilk is a blockchain based, decentralized, rewarding, crypto social network, Where you get rewarded in VOILK cryptocurrency, on every like that you give or receive to a post.</p>
                    <p>Voilk rewards it's users, in a unique, decentralized way, where distribution of the rewards is directly in the hands of the users, without any need for a central controlling authority.</p>
                    <div class="banner_btn">
                        <a href="https://voilk.com/whitepaper.pdf" class="btn btn-default page-scroll nav-link">Whitepapter <i class="ion-ios-arrow-thin-right"></i></a>
                        <a href="https://signup.voilk.com/register" class="btn btn-border">Generate Account Now! <i class="ion-ios-arrow-thin-right"></i></a> </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 order-first">
                <div class="banner_image_right res_md_mb_50 res_xs_mb_30">
                    <img src="assets/images/social.png" alt="banner_vector2" />
                </div>
            </div>
        </div>
    </div>
</section>
  )
})

export default Home