import React, {Fragment,useState, useEffect} from "react";
import './merpro.scss';

import SVG from 'react-inlinesvg';
import merProsvg from '../img/mer_pro.svg';
import logo from '../img/logo.svg';

import {Link} from "react-router-dom";

// import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const merPro = () => { 
    

    return(
        <Fragment>
            <div style={{backgroundColor:"rgb(33,36,52)"}}>
                {/* <Link to="/registration" className="reg"></Link>
                <Link to="/signin" className="sing"></Link> */}
                <Link to="/sei666" className="glavMERPRO"></Link>
                <Link to="/sei666" className="glavMer"></Link>
                <SVG src={merProsvg}/>

                <div className="seiQ">sdfsdfsdfsdfsdf</div>

                <div className="borO p1"></div>
                <Link to="/meract" className="borO p2"></Link>
                {/* <div className="borO p2"></div> */}
                <div className="borO p3"></div>
                <div className="borO p4"></div>
                <div className="borO p5"></div>
            </div>
        </Fragment>
    )
}
