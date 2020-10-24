import React, {Fragment,useState, useEffect} from "react";
import './mer_act.scss';

import SVG from 'react-inlinesvg';
import merActsvg from '../img/mer_act.svg';
import logo from '../img/logo.svg';

import {Link} from "react-router-dom";

// import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const merAct = () => { 
    

    return(
        <Fragment>
            <div style={{backgroundColor:"rgb(33,36,52)"}}>
                {/* <Link to="/registration" className="reg"></Link>
                <Link to="/signin" className="sing"></Link> */}
                <Link to="/sei666" className="glavMERACT"></Link>
                <SVG src={merActsvg}/>

                <Link to="/myMountain" className="myMountainCss"></Link>
            </div>
        </Fragment>
    )
}
