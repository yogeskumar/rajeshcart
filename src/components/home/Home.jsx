import React from 'react';
import WindowsSize from './../../WindowsSize';
import 'bootstrap/dist/css/bootstrap.min.css';
import firstImage from './../../E-commerce Project(PrepBytes)/miscellaneous/corousel_3.png'
import HomeForMobile from './homeForMobile/HomeForMobile';
import HomeForRest from './homeForRest/HomeForRest';

function Home() {
    const {width, height} = WindowsSize()
    return (
        <div>
            {width<=500?<HomeForMobile/>:<HomeForRest/>}
        </div>
    )
}

export default Home;
