import React, { memo } from 'react'

const Clients = memo(() => {
  return (
    <section class="bg_black_dark client_logo">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <div class="title_light">
                <span>Partners</span>
                <h2>Our Clients</h2>
              </div>
            </div>
          </div>
          <div class="row align-items-center text_md_center">
            <div class="col-lg-2 col-md-4 col-6">
              <div>
                <img src="assets/images/light_client_logo1.png" alt="client_logo1" />
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div>
                <img src="assets/images/light_client_logo2.png" alt="client_logo2" />
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div>
                <img src="assets/images/light_client_logo3.png" alt="client_logo3" />
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div>
                <img src="assets/images/light_client_logo4.png" alt="client_logo4" />
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div>
                <img src="assets/images/light_client_logo5.png" alt="client_logo5" />
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div>
                <img src="assets/images/light_client_logo6.png" alt="client_logo6" />
              </div>
            </div>
          </div>
        </div>
        <div class="rounded_shape light_rounded_shape3"></div>
      </section>
  )
})

export default Clients