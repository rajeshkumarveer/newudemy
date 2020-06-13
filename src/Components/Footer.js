import React from 'react'

export default function Footer() {
    return (
        <div >
            <hr></hr>
            <div className="row footer0"> <b>Top companies choose <span style={{color:"#007791"}}> Udemy for Business</span> to build in-demand career skills.</b>
            <img src="https://i.udemycdn.com/partner-logos/lyft-logo.svg" alt="fun"/>
            <img src="https://i.udemycdn.com/partner-logos/pinterest-logo.svg" alt="fun"/>
            <img src="https://i.udemycdn.com/partner-logos/adidas-logo.svg" alt="fun"/>
            <img src="https://i.udemycdn.com/partner-logos/eventbrite-logo.svg" alt="fun"/>
            <img src="https://i.udemycdn.com/partner-logos/surveymonkey-logo.svg" alt="fun"/>
            <img src="https://i.udemycdn.com/partner-logos/booking-logo.svg" alt="fun"/>
            </div>
            <hr></hr>
            <div className="row footer1">
                <div className="col-md-3"><b>Udemy for Business <br /> Teach on Udemy</b><br />Udemy app <br />About us</div>
                <div className="col-md-3">Careers<br />Blog <br />Help and Support <br /> Affiliate</div>
                <div className="col-md-3">SiteMap <br />Featured courses</div>
                <div className="col-md-3" style={{ textAlign: "end" }}><button className="btn btn-outline-login my-2 my-sm-0" style={{ padding: "1vh 4vh" }}><i className="fa fa-globe" aria-hidden="true"></i> <b>English</b></button></div>
            </div>
            <hr></hr>
            <div className="row footer2">
                <div className="col-md-7">
                    <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" className="navbar-brand" width="110vh" href="/" alt="Brand" />Copyright © 2020 Udemy, Inc.
                </div>
                <div className="col-md-5"style={{ textAlign: "end" }}>Terms Privacy Policy and Cookie Policy</div>
            </div>
            <div className="line"></div>
        </div>
    )
}
