import React from 'react';
import './Section2.css';

export default function Section2() {
    const hostInfo = [
        {  id: 1,
            title: "Basic",
            p: "for very small businesses and freelancers.",
            info1:"Disk Space: ",
            info2:"500 M.B",
            info3:"Bandwidth: ",
            info4:"500 G.B",
            info5:"SubDomains: ",
            info6:"Unlimited",
            info7:"Parked Domains: ",
            info8:"E-mail Accounts",
            info9:"Cpanel (control panel): ",
            info10:"Yes",
            info11:"Money Back Guarantee: ",
            info12:"14 Days",
            button:"You will have 1 Gift",
            head :"card-head1",
            btncolor:"btn-color1"
        },
        {   id:2,
            title :"Pro",
            p:"for Individuals that need sharing vlogs.",
            info1:"Disk Space: ",
            info2:"3000 M.B",
            info3:"Bandwidth: ",
            info4:"3 TERA",
            info5:"SubDomains: ",
            info6:"Unlimited",
            info7:"Parked Domains: ",
            info8:"E-mail Accounts",
            info9:"Cpanel (control panel): ",
            info10:"Yes",
            info11:"Money Back Guarantee: ",
            info12:"14 Days",
            button:"1 Gift per/mo for year",
            head :"card-head2",
            btncolor:"btn-color2"
        },
        {   id:3,
            title :"Business",
            p:"for Team that need sharing and reporting.",
            info1:"Disk Space: ",
            info2:"5000 M.B",
            info3:"Bandwidth: ",
            info4:"5 TERA",
            info5:"SubDomains: ",
            info6:"Unlimited",
            info7:"Parked Domains: ",
            info8:"E-mail Accounts",
            info9:"Cpanel (control panel): ",
            info10:"Yes",
            info11:"Money Back Guarantee: ",
            info12:"14 Days",
            button:"3 Gifts per/mo for year",
            head :"card-head3",
            btncolor:"btn-color3"
        },
        {    id:4,
            title :"Enterprise",
            p:"for large companies that need admins & security",
            info1:"Disk Space: ",
            info2:"10000 M.B",
            info3:"Bandwidth: ",
            info4:"10 TERA",
            info5:"SubDomains: ",
            info6:"Unlimited",
            info7:"Parked Domains: ",
            info8:"E-mail Accounts",
            info9:"Cpanel (control panel): ",
            info10:"Yes",
            info11:"Money Back Guarantee: ",
            info12:"14 Days",
            button:"Just Call Us",
            head:"card-head4",
            btncolor:"btn-color4"
        },
    ]

    return (
        <>
            <section className="Hosting">
                <div className="title">
                    <h2>Hosting Pricing</h2>
                </div>
                <div className="Cards">
                    {
                        hostInfo.map((item)=> {
                            return  <div key={item.id} className='card-box'>
                                        <div className={item.head}></div>
                                        <div className="content">
                                    <div className="content-head">
                                        <h4>{item.title}</h4>
                                        <p>{item.p}</p>
                                    </div>
                                    <p>{item.info1}<span>{item.info2}</span></p>
                                    <p>{item.info3}<span>{item.info4}</span></p>
                                    <p>{item.info5}<span>{item.info6}</span></p>
                                    <p>{item.info7}<span>{item.info6}</span></p>
                                    <p>{item.info8}<span>{item.info6}</span></p>
                                    <p>{item.info9}<span>{item.info10}</span></p>
                                    <p>{item.info11}<span>{item.info12}</span></p>
                                    <div className={item.btncolor}>{item.button}</div>
                                </div>
                            </div>
                            })
                        }
            </div>
            <div className="Hosting-info">
            <p>
                Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.
                Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139</p>
            </div>
        </section>
        </>
    )
}
