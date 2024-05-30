import React from 'react'
import './Footersection.css';

export default function Footersection() {
    return (
        <>
            <section className='Footer'>
                <div className="Footer1">
                    <div className="div1">
                        <img src="./../public/image/logo.png" alt="footer" />
                        <h4 className='Head-Office'>Head Office</h4>
                        <p>Syria - Latakia - grh2+hjx35.5199518</p>
                    </div>  
                    <div className="div1">
                        <h4>Sales</h4>  
                        <p>contact@focal-x.com +963 953 666 056</p>  
                        <h4>Public Relations</h4>
                        <p>pr@focal-x.com +963 953 666 052</p>
                    </div>
                    <div className="div1">
                        <h4>Customer Support</h4>  
                        <p>info@focal-x.com +963 953 666 054</p>
                        <h5>Human Resources</h5> 
                        <p>hr@focal-x.com</p>
                    </div> 
                    <div className="div1">
                        <h4>Useful Links</h4>
                        <p>Clients & Partners
                            Check Certificat ID
                            Check for employee
                            Our Brand ID guidlines
                        </p>
                    </div> 
                    <div className="icons">
                        <h4>Keep In Touch</h4>
                        <div className="icon">
                            <a href="https://www.facebook.com/"><img src="./../public/image/facebookfooter.png" alt="facebook" /></a>
                            <a href="https://www.facebook.com/"><img src="./../public/image/behancefooter.png" alt="behance" /></a>
                            <a href="https://www.facebook.com/"><img src="./../public/image/linkdin.png" alt="linkedin" /></a>
                            <a href="https://www.facebook.com/"><img src="./../public/image/instgramfooter.png" alt="instgram" /></a>
                            <a href="https://www.facebook.com/"><img src="./../public/image/twitterfooter.png" alt="twitter" /></a>
                        </div>
                    </div>        
                </div> 
                <div className="footer2">
                    <p>© 2021 - 2023 focal X L.L.C All Right Reserved</p>
                <div className="border">
                </div></div> 
            </section>
        </>
    )
}
