import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from './../../E-commerce Project(PrepBytes)/Web/facebook.svg';
import twitter from './../../E-commerce Project(PrepBytes)/Web/twitter.svg';
import westernunion from './../../E-commerce Project(PrepBytes)/Web/Western_union.svg';
import mastercard from './../../E-commerce Project(PrepBytes)/Web/master_card.svg';
import paypal from './../../E-commerce Project(PrepBytes)/Web/Paypal.svg';
import visa from './../../E-commerce Project(PrepBytes)/Web/visa.svg';

function Footer() {
    return (
        <div>
            <hr style={{ "margin": "20px auto", "color": "#b0b0b0", "backgroundColor": "#b0b0b0", "border": "0", "height": "1px" }} />
            <div className='d-flex flex-column flex-nowrap justify-content-between' style={{"margin":"auto", "width":"60%"}}>
                <div className='d-flex flex-row justify-content-between flex-wrap'>
                    <div style={{"maxWidth":"250px", "margin":"auto"}}>
                        <p className='text-start fw-bolder text-muted' style={{"fontSize":"36px"}}>iSHOP</p>
                        <p className='text-start' style={{"fontSize":"14px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                    </div>
                    <div style={{"maxWidth":"250px", "margin":"30px auto"}}>
                        <div style={{"margin":"auto"}}>
                            <p className='h4 fw-bolder' style={{"fontSize":"18px"}}>Follow Us</p>
                        <p className='text-start' style={{"fontSize":"14px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                        <div><span><img src={facebook} alt="" /></span><span style={{"marginLeft":"10px"}}><img src={twitter} alt="" /></span></div>
                        </div>
                    </div>
                    <div style={{ "maxWidth": "250px", "margin": "30px auto" }}>
                        <div style={{"margin":"auto"}}>
                        <p className='h4 fw-bolder' style={{"fontSize":"18px"}}>Contact Us</p>
                        <p className='text-start' style={{ "fontSize": "14px" }}>iShop: address @building 124 Call us now: 0123-456-789 Email: support@whatever.com</p>
                        </div>
                    </div>
                </div>
                <div><hr style={{ "margin": "20px auto", "color": "#b0b0b0", "backgroundColor": "#b0b0b0", "border": "0", "height": "1px" }} /></div>
                <div className='d-flex flex-row justify-content-between flex-wrap' style={{"margin":"auto", "width":"100%" }}>
                    <div style={{"maxWidth":"fit-content", "margin":"auto"}}>
                        <h5 style={{"margin":"20px auto", "fontSize":"18px"}}>Information</h5>
                        <p style={{"fontSize":"14px"}}>About Us</p>
                        <p style={{"fontSize":"14px"}}>Information</p>
                        <p style={{"fontSize":"14px"}}>Privacy Policy</p>
                        <p style={{"fontSize":"14px"}}>Terms & Conditions</p>
                    </div>
                    <div style={{"maxWidth":"fit-content", "margin":"auto"}}>
                        <h5 style={{"margin":"20px auto", "fontSize":"18px"}}>Service</h5>
                        <p style={{"fontSize":"14px"}}>About Us</p>
                        <p style={{"fontSize":"14px"}}>Information</p>
                        <p style={{"fontSize":"14px"}}>Privacy Policy</p>
                        <p style={{"fontSize":"14px"}}>Terms & Conditions</p>
                    </div>
                    <div style={{"maxWidth":"fit-content", "margin":"auto"}}>
                        <h5 style={{"margin":"20px auto", "fontSize":"18px"}}>Extras</h5>
                        <p style={{"fontSize":"14px"}}>About Us</p>
                        <p style={{"fontSize":"14px"}}>Information</p>
                        <p style={{"fontSize":"14px"}}>Privacy Policy</p>
                        <p style={{"fontSize":"14px"}}>Terms & Conditions</p>
                    </div>
                    <div style={{"maxWidth":"fit-content", "margin":"auto"}}>
                        <h5 style={{"margin":"20px auto", "fontSize":"18px"}}>My Account</h5>
                        <p style={{"fontSize":"14px"}}>About Us</p>
                        <p style={{"fontSize":"14px"}}>Information</p>
                        <p style={{"fontSize":"14px"}}>Privacy Policy</p>
                        <p style={{"fontSize":"14px"}}>Terms & Conditions</p>
                    </div>
                    <div style={{"maxWidth":"fit-content", "margin":"auto"}}>
                        <h5 style={{"margin":"20px auto", "fontSize":"18px"}}>Useful Links</h5>
                        <p style={{"fontSize":"14px"}}>About Us</p>
                        <p style={{"fontSize":"14px"}}>Information</p>
                        <p style={{"fontSize":"14px"}}>Privacy Policy</p>
                        <p style={{"fontSize":"14px"}}>Terms & Conditions</p>
                    </div>
                    <div style={{"maxWidth":"fit-content", "margin":"auto"}}>
                        <h5 style={{"margin":"20px auto", "fontSize":"18px"}}>Other Offers</h5>
                        <p style={{"fontSize":"14px"}}>About Us</p>
                        <p style={{"fontSize":"14px"}}>Information</p>
                        <p style={{"fontSize":"14px"}}>Privacy Policy</p>
                        <p style={{"fontSize":"14px"}}>Terms & Conditions</p>
                    </div>
                </div>
            </div>
            <hr style={{ "margin": "20px auto", "color": "#b0b0b0", "backgroundColor": "#b0b0b0", "border": "0", "height": "1px" }} />
            <div className='text-end' style={{"margin":"20px 20%"}}>
                <span style={{"margin":"0 10px"}}><img src={westernunion} alt="" /></span>
                <span style={{"margin":"0 10px"}}><img src={mastercard} alt="" /></span>
                <span style={{"margin":"0 10px"}}><img src={paypal} alt="" /></span>
                <span style={{"margin":"0 10px"}}><img src={visa} alt="" /></span>
            </div>
        </div>
    )
}

export default Footer;
