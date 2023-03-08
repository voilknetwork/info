import React, { memo } from 'react'

const White = memo(() => {
  return (
    <section id="whitepaper" class="small_pt">
        <div class="container">
          
          <div id="contact">
            <div class="divider large_divider"></div>
            <div class="row text-center">
              <div class="col-md-12">
                <div class="title_light">
                  <span>Contact Us</span>
                  <h2>Get in touch!</h2>
                </div>
              </div>
            </div>
            <div class="divider small_divider"></div>
            <div class="row">
              <div class="col-md-7 col-lg-6 offset-lg-1">
                <p> 
                  Feel free to contact us, at any time you want, using our social media accounts. 
                  You can also reach to us by email.
                  <br />
                  <br />

                  Keep in mind, that if you lost your KeyFile, we cannot recover your account, 
                  it's blockchain based project, and only you can control your account, using your private keys.
                </p>
              </div>
              <div class="col-lg-5 col-md-5 res_sm_mt_30">
                <ul class="list_none contact_info mt-margin">
                  <li class="input-group-prepend align-items-center">
                    <i class="ion-ios-location"></i>
                    <div class="contact_detail">
                      <span>Discord</span>
                      <p>
                        <a href='https://discord.gg/KSBNcDpjDR'>https://discord.gg/KSBNcDpjDR</a>
                      </p>
                    </div>
                  </li>
                  <li class="input-group-prepend align-items-center">
                    <i class="ion-android-call"></i>
                    <div class="contact_detail">
                      <span>WhatsApp</span>
                      <p>+92-316-249-4001</p>
                    </div>
                  </li>
                  <li class="input-group-prepend align-items-center">
                    <i class="ion-ios-email"></i>
                    <div class="contact_detail">
                      <span>Email</span>
                      <p>support@voilk.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
})

export default White