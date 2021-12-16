import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WindowsSize from '../../../WindowsSize';
import iShopIcon from './../../../E-commerce Project(PrepBytes)/Web/iSHOP Logo.svg';
import MenuIcon from './../../../E-commerce Project(PrepBytes)/Web/menu-svgrepo-com.svg';

function CollapsedMenu() {

    const [clickedOnCollapse, setClickedOnCollapse] = useState(false);
    const { height, width } = WindowsSize();

    return (
        <div className="d-flex flex-row justify-content-between mt-0 mb-0" style={{ "width": "98%", "margin": "auto", "minWidth": "fit-content", "zIndex":"1", "backgroundColor":"white" }}>
            <div><img src={iShopIcon} alt="" /></div>
            <div><img src={MenuIcon} alt="" width="50px" /></div>
        </div>
    )
}

export default CollapsedMenu;
