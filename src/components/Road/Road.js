import React, { memo } from 'react'

const Road = memo(() => {
  return (
    <section id="road_map" class="small_pt small_pb">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-8 col-md-12 offset-lg-2">
              <div class="title_light">
                <span>Voilk's Purpose</span>
                <h2>On Voilk Your Like is worth Money</h2>
                <p>The purpose is, to not just connect people together and to make it a success, but earn together, survive together, 
                  live together and have an amazing time together, until the end of time.</p>
              </div>
            </div>
          </div>

          <div id="mobileapp" class="mobileapp text_md_center">
            <div class="divider large_divider"></div>
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="title_light">
                  <span>AirDrop Program</span>
                  <h2>Grab VOILKs without Investing!</h2>
                  <p>We can understand, many people, can't invest money, 
                    because of several reasons, but still want to grab some VOILKs,
                    so only for you, we have developed a special airDrop program, 
                    don't think we don't need you. Infact we need you the most.</p>
                  <p>3 Ways to grab VOILKs without investing.</p>
                  <ul class="list_none chart_list">
                    <li class="color2">500,000 VOILK Airdrop</li>
                    <li class="color2">1. Login to Swaper</li>
                    <li class="color3"><a className='text-primary' href="https://t.me/VoilkNetworkBot">Complete only 3 Tasks</a></li>
                    <li class="color4">Get 6.25 VOILKs(it's like getting 6.25 BTC) for FREE</li>
                    <li class="color4">2. Login to Affiliates</li>
                    <li class="color2">Invite users, get 3.75 VOILKs, for every user</li>
                    <li class="color2">3. Login to Social media</li>
                    <li class="color2">Participate in Voilk related discussions</li>
                    <li class="color2">Get valued likes from privileged people</li>
                  </ul>
                
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 text-center">
                <div class="res_md_mt_50 res_sm_mt_30">
                  <img src="assets/images/mobile.png" alt="mobile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
})

export default Road