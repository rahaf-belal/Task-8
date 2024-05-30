import React from 'react'
import './Section1.css';

export default function Section1() {
    return (
    <>
        <section className='our-services'>
            <h2 className='title'>Our Services</h2>
            <div className="services">
                <div className="card-services">
                    <h2>Branding</h2>
                    <p>
                        <b>The brand is hope,</b> It is also the source of inspiration for
                        everything you do when you deal with your customers and that is the
                        important and emotional thing. <b>Your Brand and Visual identity</b>
                        represents an intrinsic Value to your company.
                    </p>
                    <h4>In focal X agency, we provide:</h4>
                    <div className='branding-services'>
                        <p>Visual identity design.</p>
                        <p>Define Brand Identity.</p>
                        <p>Define Brand personality.</p>
                        <p>Building Your brand strategy.</p>
                        <p>Market research and competitors study.</p>
                    </div>
                    <h4>We walk with you from A to Z.</h4>
                    <div className="image">
                        <img src="./../public/image/brandingOrange.png" />
                    </div>
                </div>

                <div className="card-services burbile">
                    <h2>Marketing</h2>
                    <p>
                        Talk to your customers and tell them <b>you and your company's</b>
                        story through us the way you want.
                        Let us plan the content that will bring your audience closer to you.
                    </p>
                    <h4>In focal X agency, we provide:</h4>
                    <div className='branding-services'>
                        <p>Visual identity design.</p>
                        <p>Define Brand Identity.</p>
                        <p>Define Brand personality.</p>
                        <p>Building Your brand strategy.</p>
                        <p>Market research and competitors study.</p>
                    </div>
                    <h4>We walk with you from A to Z.</h4>
                    <div className="image">
                        <img src="./../public/image/markiting.png" />
                    </div>
                </div>
            </div>
        </section>

    </>
    )
}
