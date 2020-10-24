import React, {Fragment,useState, useEffect} from "react";
import './adminpanel.scss';

import SVG from 'react-inlinesvg';
import adminpanelSvg from '../img/adminpanel.svg';
import logo from '../img/logo.svg';

import {Link} from "react-router-dom";

// import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Adminpanel = () => { 
    

    return(
        <Fragment>
            <div style={{backgroundColor:"#161823"}}>
                {/* <Link to="/registration" className="reg"></Link>
                <Link to="/signin" className="sing"></Link>
                <Link to="/sei666" className="glav"></Link>
                <Link to="/merpro" className="linkMerPro"></Link> */}
                <SVG src={adminpanelSvg}/>

                <div className="borA p1"></div>
                <div className="borA p2"></div>
                <div className="borA p3"></div>
                <div className="borA p4"></div>
                <div className="borA p5"></div>
                <div className="borA p6"></div>

            </div>

        </Fragment>
    )
}
