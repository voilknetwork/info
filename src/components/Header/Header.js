import React, { memo } from 'react'

const Header = memo(() => {
  return (
    <header class="header_wrap fixed-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand page-scroll" href="#home">
                    <img class="logo_light" src="assets/images/logo.png" alt="logo" />
                    <img class="logo_dark" src="assets/images/logo_dark.png" alt="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="ion-android-menu"></span> </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li><a class="nav-link page-scroll" href="#how_it_work">How it Work</a></li>
                        <li><a class="nav-link page-scroll" href="#about">About</a></li>
                        <li><a class="nav-link page-scroll" href="#token">Token</a></li>
                        <li><a class="nav-link page-scroll" href="#road_map">Purpose</a></li>
                        <li><a class="nav-link page-scroll" href="#faq">FAQ</a></li>
                        <li><a class="nav-link page-scroll" href="#contact">Contact</a></li>
                    </ul>
                    <ul class="navbar-nav nav_btn">
                        <li><a class="nav-link page-scroll btn btn-default" 
                        href="https://signup.voilk.com/register">Generate Account</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  )
})

export default Header