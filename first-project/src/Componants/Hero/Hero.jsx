import React from 'react';
import './Hero.css';

export default function Hero() {
    return (
        <section className='hero'>

            <div className='hero-content'>
                <h2>Hey !! Mario still here, But don’t forget that</h2>
                <p>
                    At focal X agency, we are working to build somthing different. Here
                    you’ ll have a group of creative people who specialize in: Branding,
                    Digital Marketing, Web/App Development, Ui/Ux Content creation,
                    Graphic design, Social media and More... So can take a tour in our
                    website, OR just <b>Press Start :)</b>
                </p>
            </div>

            <div className='hero-footer'>
                <div className='hero-image'>
                    <img src="./../public/image/fotter.svg" alt="fotter" className='footer-img' />
                    <img src="./../public/image/gameBoy.png" alt="gameBoy" className='game' />
                    <img src="./../public/image/pressStart.svg" alt="pressStart" className='pressStart' />
                    <img src="./../public/image/pattren.png" alt="pattren" className='pattren'/>
                </div>
            </div>

            <div className='hero-links'>
                <div className='icons'>
                    <a href="https://www.facebook.com/"><img src="./../public/image/facebook.png" alt="facebook" /></a>
                    <a href="https://www.facebook.com/"><img src="./../public/image/behance.png" alt="behance" /></a>
                    <a href="https://www.facebook.com/"><img src="./../public/image/linkedin.png" alt="linkedin" /></a>
                    <a href="https://www.facebook.com/"><img src="./../public/image/instgram.png" alt="instgram" /></a>
                    <a href="https://www.facebook.com/"><img src="./../public/image/twitter.png" alt="twitter" /></a>
                </div>
                <p>© 2021 - 2022 focal X agency All Right Reserved</p>
            </div>
        </section>
    )
}
