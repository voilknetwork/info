import React, { memo } from 'react'

const Team = memo(() => {
  return (
    <section id="team" class="team_wrap small_pt small_pb" data-parallax="scroll" data-image-src="assets/images/team_bg2.png">
    <div class="container">
      <div id="faq">

        <div class="divider large_divider"></div>
        <div class="row text-center">
          <div class="col-lg-8 col-md-12 offset-lg-2">
            <div class="title_light">
              <span>FAQs</span>
              <h2>Frequently Asked Questions</h2>
              <p>Frequently asked questions (FAQ) or Questions and Answers (Q&A), are listed questions and answers, all supposed to be commonly asked in some context</p>
            </div>
          </div>
        </div>
        <div class="row small_space">
          <div class="col-lg-8 col-md-12 offset-lg-2">
            <div id="accordion" class="faq_content">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h6 class="mb-0"> <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How do I buy VOILKs?</a> </h6>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">Login to swaper app, install metamask extension in your browser, connect it to binance smart chain, then connect your swaper to metamask.
                  fund your metamask wallet, with some USDT BEP 20, use swaper's interface to swap, them for VOILK-20 tokens, back and forth.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Can I take out my funds which I invested in the ICO?</a> </h6>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">Yes, if you invested but later decide, you want to take out your funds, you can swap them back, which may incur some withdrawal penalty, depending upon which phase of the ICO is going on.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How do I convert my VOILKs from Voilk blockchain, to binance?</a> </h6>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body">
                  During the ICO period, you can only swap, VOILK-20 against USDT and USDT against VOILK-20, you can also Swap your VOILK-20 to VOILK, and USDT to VSD,
                  but you cannot swap, VOILK to VOILK-20, and VSD to USDT.
                  This step, is taken so, that airDropers don't dump, and ruin the value.. when the ICO completes, the airdropped amount won't hurt. so we open the swaps from VOILK to VOILK20 and VSD to USDT.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Can 1 VOILK reach 1000$ a coin?</a> </h6>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div class="card-body">If we work together and spread the word about the project. even 1 VOILK = 10000$ is possible, since our coin supply is close to that of bitcoin's. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape shap5"></div>
    <div class="shape shap6"></div>
  </section>
  )
})

export default Team