import React from 'react';
import WindowsSize from '../../WindowsSize';
import AccesoriesForMobile from './accesoriesForMobile/AccesoriesForMobile';
import AccesoriesForRest from './accesoriesForRest/AccesoriesForRest';

function Accesories() {
    const { height, width } = WindowsSize();
    return (
        <div>
      {width<=500?<AccesoriesForMobile/>:<AccesoriesForRest/>} 
        </div>
    )
}

export default Accesories;