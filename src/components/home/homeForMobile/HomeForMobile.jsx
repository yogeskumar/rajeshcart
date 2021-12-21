import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import Carousel from './slider/MyCarousel';
import firstImage from './../../../E-commerce Project(PrepBytes)/miscellaneous/3_Corousel.png';
import JsonData from '../CardsInfo.json';
import MyCards from '../MyCards';
import Crousals2 from './../../../E-commerce Project(PrepBytes)/miscellaneous/2_corousel.png';
import './HomeForMobile.css';
import FeaturedServicesData from './featuredServices/FeaturedServices.json';
import FeaturedServices from './featuredServices/FeaturedServices.jsx';
import sliderdata from './slider/SliderData.json';
import SliderCard from './slider/SliderCard.jsx';
import Select from 'react-select';
import styled from "styled-components";

const HeadphoneImage = styled.img`
background-size: cover;
max-width: 400px;
height: 100%;
`;

const jsonData = JsonData;
const featuredservicesdata = FeaturedServicesData;
const menuOptions = [
                    { value: 'ALL', label: 'ALL' },
                    { value: 'Mac', label: 'Mac' },
                    { value: 'iPhone', label: 'iPhone' },
                    { value: 'iPad', label: 'iPad' },
                    { value: 'iPod', label: 'iPod' },
                    { value: 'Accesories', label: 'Accesories' }
    ]

function HomeForMobile() {
    return (
        <div className='d-flex flex-column flex-nowrap'>
            <div className='bg-dark text-center' style={{"height":"50vh", "width":"100%", "minHeight":"360px", "position":"relative"}}><HeadphoneImage src={firstImage} alt="" /></div>
            <h4 className="text-center" style={{ "margin": "10px 0" }}>BEST SELLER</h4>
                <span style={{"margin":"auto", "width":"95%"}}>
                            <Select options={menuOptions} style={{"margin":"auto"}} defaultValue={{ value: 'Mac', label: 'Mac' }} />
                        </span>
            <div className="d-flex flex-wrap justify-content-between" style={{"margin":"auto", "width":"60%"}}>
                {jsonData.map(data=>{
                    return <MyCards info={ data }/>
                })}
            
            </div>
            <div className='text-center fw-bolder text-primary' style={{"margin":"15px 0"}}><u>Load more</u></div>
            
            <div style={{ "backgroundColor": "#2E90E5", "width": "100%", "height": "600px"}} className='text-white d-flex flex-column justify-content-between'>
                    <div style={{"margin":"30px 0 0 30px", "height":"fit-content"}}>
                        <div className='fs-1 fw-bold'>iPhone 6 Plus</div>
                        <div className='fs-4' style={{"margin":"30px 0 10px 0"}}>Performance and design.</div>
                        <div className='fs-4' style={{"margin":"0 0 30px 0"}}>Taken right to the edge.</div>
                        <div className='fs-6'><u>SHOP NOW</u></div>
                    </div>
                    <div style={{"position":"relative", "height":"100%"}}>
                        <img src={Crousals2} style={{"position":"absolute", "bottom":"0"}} alt="" />
                </div>
            </div>
            
            <div className='d-flex flex-row flex-wrap justify-content-between' style={{"width":"90%", "margin":"auto", "marginTop":"60px"}}>{featuredservicesdata.map(data => {
                return <FeaturedServices data={data} />
            })}</div>
            
            
            <h2 className='text-center fw-bolder fs-4'>FEATURED PRODUCTS</h2>
            <div className='text-center text-dark' style={{"margin":"30px auto", "width":"95%", "minHeight":"150px", "maxWidth":"350px"}}>
                <Carousel Carousel
                show={4}
                infiniteLoop>
                    {sliderdata.map(data=>{
                        return <SliderCard info={data}/>
                    })}
                </Carousel>
            </div>
        </div>
    )
}



export default HomeForMobile;