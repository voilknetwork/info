import React, { memo } from 'react'

const Works = memo(() => {
  return (
    <section id="how_it_work" class="how_work small_pt small_pb" data-parallax="scroll" data-image-src="assets/images/team_bg2.png">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-12 col-sm-12">
          <div class="title_light">
            <h2>How it Works?</h2>
            <p>Unlike Bitcoin, Voilk's miners get only 15% of the block reward, rest of the reward is added to the community's reward pool, 
              which users, distribute among themselves, with the power of their likes.
            </p>
            <p>
              Users who have more staked VOILKs(aka Power) in their wallets, direct more rewards from the pool, towards their favorite posts.  
            </p>
          </div>
          <a href="https://voilk.com/whitepaper.pdf" class="btn btn-default page-scroll">Learn more.. <i class="ion-ios-arrow-thin-right"></i></a> </div>
        <div class="col-lg-7 col-md-12 col-sm-12">
          <div class="work_box">
            <div class="box_inner"> <i class="ion-person-add"></i>
              <h4>Generate Account</h4>
              <p>Visit the account generation page, type a username, and hit two buttons. That's how easy it is to generate an account on the Voilk Blockchain.</p>
            </div>
          </div>
          <div class="work_box">
            <div class="box_inner"> <i class="ion-ios-locked"></i>
              <h4>Create Content</h4>
              <p>Using several user interfaces, you can start participating in the content creation right away, buy some VOILKs, convert them into Power, start liking and start earning. </p>
            </div>
          </div>
          <div class="work_box">
            <div class="box_inner"> <i class="ion-android-cart"></i>
              <h4>Buy & Sell</h4>
              <p>Voilk's Swaper app, makes it very easy to swap VOILKs with USDT and vice versa, it makes use of metamask extension and binance's Smart contract, to make the swaps happen instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape shap5"></div>
  </section>
  )
})

export default Works