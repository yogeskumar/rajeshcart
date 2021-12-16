import React, { useState } from 'react';
import './AccesoriesForRest.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crousals2 from './../../../E-commerce Project(PrepBytes)/miscellaneous/2_corousel.png';
import { Range } from 'react-range';
import { Slider } from '@material-ui/core';
import DropDownIcon from './../../../E-commerce Project(PrepBytes)/miscellaneous/dropdownIcon.png'
import CardsPlusPagination from './cards-and-pagination/CardsPlusPagination';

function AccesoriesForRest() {
    const [values, setValue] = useState([30, 70]);

    const [blueClicked, setBlueClicked] = useState(true);
    const [darkPinkClicked, setDarkPinkClicked] = useState(false);
    const [blackClicked, setBlackClicked] = useState(false);
    const [lightPinkClicked, setLightPinkClicked] = useState(false);
    const [yellowClicked, setYellowClicked] = useState(false);
    const [camronClicked, setCamronClicked] = useState(false);

    const updateRange = (e, data) => {
        setValue(data)
    }
    const handleBlue = () => {
        
    }
    const handleDarkPink = () => {
        
    }
    const handleBlack = () => {
        
    }
    const handleLightPink = () => {
        
    }
    const handleYellow = () => {
        
    }
    const handleCamron = () => {
        
    }
    return (
        <div>

            <div className='text-center' style={{ "backgroundColor": "#F6F7F8", "color": "#33A0FF", "width": "100%", "padding": "10px 0" }}>Store / Accesories</div>
            
            <div style={{ "width": "100%", "margin":"4vw auto" }}>
                
                <div className='d-flex flex-row justify-content-between flex-nowrap' style={{ "width": "80%", "margin": "auto" }}>
                    
                    <div className="left-side d-flex justify-content-between flex-column flex-nowrap" style={{ "width": "25%", minWidth:"fit-content", marginTop:"0", height:"fit-content" }}>
                        
                        <div className='rounded fw-bolder' style={{ "backgroundColor": "#F6F7F8", padding: "20px 20px", width:"100%", marginBottom:"10px" }}>
                            
                            <p className='fw-bolder' style={{ "margin": "0 0 20px 0", fontSize: "18px" }}>ACCESORIES</p>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div style={{}}>Apple Car</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>2</div>
                            </div>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div>Air port & wireless</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>48</div>
                            </div>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div>Cables & Docks</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>14</div>
                            </div>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div>Cases & Films</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>15</div>
                            </div>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div>Charging Devices</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>23</div>
                            </div>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div>Connected home</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>1</div>
                            </div>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div>Headphones</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>95</div>
                            </div>
                        </div>
                        
                        <div className='rounded fw-bolder' style={{ "backgroundColor": "#F6F7F8", padding: "20px 20px", margin:"10px auto", width:"100%" }}>
                            
                            <p className='fw-bolder' style={{ "margin": "0 0 20px 0", fontSize: "18px" }}>PRICES</p>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div>Range:</div>
                                <div>${values[0]}-${values[1]}</div>
                            </div>

                            <div className="myRange" style={{}}>
                                <Slider
                                    step={0.01}
                                    value={values}
                                    onChange={updateRange}
                                    // color='#F6F7F8'
                                />
                                {/* <Range
                                    step={0.1}
                                    min={0}
                                    max={100}
                                    values={values}
                                    onChange={(values) => {setValue(values)}}/> */}
                            </div>
                            
                        </div>
                        
                        <div className='rounded fw-bolder' style={{ "backgroundColor": "#F6F7F8", padding: "20px 20px", margin:"10px auto", width:"100%" }}>
                            
                            <p className='fw-bolder' style={{ "margin": "0 0 20px 0", fontSize: "18px" }}>COLOR</p>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap">
                                <span>
                                    <button style={{borderRadius:"50%", width:"20px", height:"20px", "border":"none", backgroundColor:"#006CFF"}} onClick={handleBlue} className={blueClicked?'forBlue':'removeAll'}></button>
                                </span>
                                <span>
                                    <button style={{borderRadius:"50%", width:"20px", height:"20px", "border":"none", backgroundColor:"#FC3E39"}} onClick={handleDarkPink}></button>
                                </span>
                                <span>
                                    <button style={{borderRadius:"50%", width:"20px", height:"20px", "border":"none", backgroundColor:"#171717"}} onClick={handleBlack}></button>
                                </span>
                                <span>
                                    <button style={{borderRadius:"50%", width:"20px", height:"20px", "border":"none", backgroundColor:"#FFF600"}} onClick={handleYellow}></button>
                                </span>
                                <span>
                                    <button style={{borderRadius:"50%", width:"20px", height:"20px", "border":"none", backgroundColor:"#FF00B4"}} onClick={handleLightPink}></button>
                                </span>
                                <span>
                                    <button style={{borderRadius:"50%", width:"20px", height:"20px", "border":"none", backgroundColor:"#EFDFDF"}} onClick={handleCamron}></button>
                                </span>
                            </div>
                            
                        </div>
                        <div className='rounded fw-bolder' style={{ "backgroundColor": "#F6F7F8", padding: "20px 20px", width:"100%", margin:"10px auto" }}>
                            
                            <p className='fw-bolder' style={{ "margin": "0 0 20px 0", fontSize: "18px" }}>BRAND</p>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div style={{}}>Apple</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>99</div>
                            </div>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div>LG</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>99</div>
                            </div>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div>Samsung</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>99</div>
                            </div>
                            
                            <div className="d-flex flex-row justify-content-between flex-nowrap forHover" style={{ fontSize: "14px" }}>
                                <div>Siemens</div>
                                <div style={{color:"#22262A", opacity:"0.35", margin:"10px 0"}} className=' forHover'>99</div>
                            </div>
                        </div>
                        
                        <button className='rounded' style={{padding:"10px 0", width:"100%", border:"0", backgroundColor:"#F6F7F8", margin:"10px auto"}}>MORE</button>
                    </div>

                    <div className="right-side d-flex justify-content-between flex-column flex-nowrap rounded" style={{ "width": "70%" }}>
                        
                        <div style={{ "backgroundColor": "#2E90E5", "width": "100%", "height": "50vh", "minHeight": "300px", "maxHeight": "500px" }} className='d-flex flex-row flex-nowrap justify-content-between pt-0 text-white text-start rounded'>

                            <div style={{ "width": "40%" }} className='align-items-center'>
                                <div className='container mx-auto' style={{}}>
                                    <div className="">
                                        <div className='fs-1'>iPhone 8</div>
                                        <div className='fs-4' style={{"margin":"30px 0"}}>Performance and design. Taken right to the edge.</div>
                                        <div className='fs-6'><u>SHOP NOW</u></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{"width":"60%", "position":"relative"}} className='text-center overflow-hidden'><div style={{"position":"absolute", "bottom":"0", "margin":"auto"}}><img src={Crousals2} className='rounded mx-auto d-block img-fluid' style={{"maxWidth":"100%", "height":"auto"}} alt="" /></div></div>


                        </div>

                        {/* right side filter */}

                        <div className='d-flex justify-content-between flex-row flex-nowrap rounded' style={{ margin: "10px auto", width: "100%", backgroundColor:"#F6F7F8", height:"fit-content", minWidth:"fit-content" }}>
                            
                            <div className='d-flex justify-content-between flex-row flex-nowrap overflow-visible align-items-center' style={{ width: "55%", margin:"1%", minWidth:"450px" }}>
                                <div>13 Items</div>
                                <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
                                    <span>Sort By</span>

                                    <span>
                                        <div className="dropdown">
                                            
                                            <button style={{ "borderColor": "#a6a6a6"}} className='text-center mybutton d-flex justify-content-between flex-row flex-nowrap align-items-center'><div>Name</div> | <img src={DropDownIcon} style={{ "width": "15px" }} alt="" /></button>

                                            <div className="dropdown-content2 text-start" style={{ "padding": "3px" }}>
                                                
                                                <div>Name</div>
                                                <div>Price</div>
                                                <div>Rating</div>

                                            </div>
                                        </div>
                                    </span>

                                </div>
                                <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
                                    <span>Show</span>

                                    <span>
                                        <div className="dropdown">
                                            
                                            <button style={{ "borderColor": "#a6a6a6" }} className='text-center mybutton d-flex justify-content-between flex-row flex-nowrap align-items-center'><div>12</div> | <img src={DropDownIcon} style={{ "width": "15px" }} alt="" /></button>

                                            <div className="dropdown-content2 text-start " style={{ "padding": "3px" }}>
                                                
                                                <div>6</div>
                                                <div>9</div>
                                                <div>12</div>

                                            </div>
                                        </div>
                                    </span>

                                </div>
                            </div>
                            <div style={{ width: "45%" }} className='d-flex text-end flex-row flex-nowrap overflow-visible align-items-center' style={{ margin:"1%"}}>
                                <button style={{border:"0", padding:"10px 5px", margin:"0 10px"}}><img className='my-auto' style={{margin:"auto"}} src="https://img.icons8.com/ios-glyphs/30/000000/squared-menu.png"/></button>
                                <button style={{border:"0", padding:"10px 5px", margin:"0 10px"}}><img className='my-auto' style={{margin:"auto"}} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png"/></button>
                            </div>
                        </div>
                        <div>
                            <CardsPlusPagination/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AccesoriesForRest;
