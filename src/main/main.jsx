import React, {Fragment} from "react";
import './main.scss';

import SVG from 'react-inlinesvg';
import mainsvg from '../img/main.svg';

export const main = () => {  
    return(
        <Fragment>
            <div style={{backgroundColor:"rgb(33,36,52)"}}>
                <button className="sing">sing in</button> 
                <SVG style={{width:"100%"}} src={mainsvg}/>
            </div>
        </Fragment>
    )
}
