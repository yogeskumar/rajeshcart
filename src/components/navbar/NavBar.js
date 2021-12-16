import React, { useState, useEffect } from 'react';
import WindowsSize from '../../WindowsSize';
import NavForRest from './NavForRest/NavForRest';
import NavForMobile from './NavForMobile/NavForMobile';

function NavBar() {

    const { height, width } = WindowsSize();

  return (
    <div>
      {width<=500?<NavForMobile/>:<NavForRest/>}      
    </div>
  );
}

export default NavBar;
