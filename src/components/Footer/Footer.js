import React, { memo } from 'react'

const Footer = memo(() => {
  return (
    <footer>
    <div class="top_footer bg_black_dark text_md_center">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-6 col-sm-12 res_lg_mb_50 res_sm_mb_40">
            <h4 class="footer_title">Voilk Social Media Handles</h4>
            <ul class="list_none footer_social">
              <li><a href="https://facebook.com/VoilkNetwork"><i class="ion-social-facebook"></i></a></li>
              <li><a href="https://twitter.com/VoilkNetwork"><i class="ion-social-twitter"></i></a></li>
            </ul>
          </div>
          <div class="col-xl-6 col-lg-6 col-sm-12 res_lg_mb_50 res_sm_mb_40">
            <div class="newsletter_form newslattter_small">
              <h4 class="footer_title">What is Voilk?</h4>
              <p>Voilk is a blockchain based, decentralized, rewarding, Crypto Social Network.</p>
              <p>
                Market1: <a href="https://voilk.com/market">Olympus Market</a><br />
                Market2: <a href="https://social.voilk.com/market">Social Market</a>
              </p>
            </div>

          </div>
          <div class="col-xl-3 col-lg-12 col-sm-12">
            <h4 class="footer_title">Quick Links</h4>
            <ul class="list_none footer_link">
              <li><a href="https://voilk.com">Olympus</a></li>
              <li><a href="https://welcome.voilk.com">Landing</a></li>
              <li><a href="https://social.voilk.com">Social</a></li>
              <li><a href="https://voilk.com/whitepaper.pdf">Whitepaper</a></li>
              <li><a href="https://swaper.voilk.com">Swaper</a></li>
              <li><a href="https://explorer.voilk.com">Explorer</a></li>
              <li><a href="https://signup.voilk.com">Register</a></li>
              <li><a href="https://affiliates.voilk.com/signin">Affiliates</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="rounded_shape light_rounded_shape4"></div>
    </div>
    <div class="bottom_footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="copyright">Copyright © 2023 All Rights Reserved.</p>
          </div>
          <div class="col-md-6">
            <ul class="list_none footer_menu">
              <li><a href="https://social.voilk.com/privacy.html">Privacy Policy</a></li>
              <li><a href="https://social.voilk.com/tos.html">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
})

export default Footer