import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from './slider/MyCarousel';
import firstImage from './../../../E-commerce Project(PrepBytes)/miscellaneous/corousel_3.png';
import JsonData from './../CardsInfo.json';
import MyCards from '../MyCards';
import Crousals2 from './../../../E-commerce Project(PrepBytes)/miscellaneous/2_corousel.png';
import './HomeForRest.css';
import FeaturedServicesData from './featuredServices/FeaturedServices.json';
import FeaturedServices from './featuredServices/FeaturedServices.jsx';
import sliderdata from './slider/SliderData.json';
import SliderCard from './slider/SliderCard.jsx';

const jsonData = JsonData;
const featuredservicesdata = FeaturedServicesData;

function HomeForRest() {
    return (
        <div className='d-flex flex-column flex-nowrap'>
            <img src={firstImage} width="100%" alt="" />
            <h4 className="text-center" style={{ "margin": "10px 0" }}>BEST SELLER</h4>
                <div className='d-flex flex-row justify-content-between flex-nowrap' style={{ "width": "fit-content", "margin":"15px auto 10px auto" }}>
                    <Link to='/' style={{ textDecoration: 'none', "margin":"auto 10px" }}>All</Link>
                    <Link to='/' style={{ textDecoration: 'none', "margin":"auto 10px" }}>Mac</Link>
                    <Link to='/' style={{ textDecoration: 'none', "margin":"auto 10px" }}>iPhone</Link>
                    <Link to='/' style={{ textDecoration: 'none', "margin":"auto 10px" }}>iPad</Link>
                    <Link to='/' style={{ textDecoration: 'none', "margin":"auto 10px" }}>iPod</Link>
                    <Link to='/' style={{ textDecoration: 'none', "margin":"auto 10px" }}>Accesories</Link>
            </div>
            <div className="d-flex flex-wrap justify-content-between" style={{"margin":"auto", "width":"60%"}}>
                {jsonData.map(data=>{
                    return <MyCards info={ data }/>
                })}
            </div>
            <div className='text-center fw-bolder text-primary' style={{"margin":"15px 0"}}><u>Load more</u></div>
            
            <div style={{ "backgroundColor": "#2E90E5", "width": "100%", "height": "50vh", "minHeight": "300px", "maxHeight": "500px" }} className='d-flex flex-row flex-nowrap justify-content-between'>
                <div className='child1' style={{"width":"50%"}}>
                    <div className="child1-child text-white fw-light">
                        <div className='fs-1'>iPhone 6 Plus</div>
                        <div className='fs-4' style={{"margin":"30px 0"}}>Performance and design. Taken right to the edge.</div>
                        <div className='fs-6'><u>SHOP NOW</u></div>
                    </div>
                </div>
                <div className='child2'>
                    <div className="child2-child">
                        <img src={Crousals2} style={{"height":"55vh"}} alt="" />
                    </div>
                </div>
            </div>
            
            <div className='d-flex flex-row flex-wrap justify-content-between' style={{"width":"60%", "margin":"auto", "marginTop":"60px"}}>{featuredservicesdata.map(data => {
                return <FeaturedServices data={data} />
            })}</div>
            
            
            <h2 className='text-center fw-bolder fs-4'>FEATURED PRODUCTS</h2>
            <div className='text-center text-dark' style={{"margin":"30px auto", "width":"60%", "minHeight":"150px", "minWidth":"600px"}}>
                <Carousel Carousel
                show={3}
                infiniteLoop>
                    {sliderdata.map(data=>{
                        return <SliderCard info={data}/>
                    })}
                </Carousel>
            </div>
        </div>
    )
}



export default HomeForRest;