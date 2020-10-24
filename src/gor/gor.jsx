import React, {Fragment,useState, useEffect} from "react";
import './gor.scss';

import SVG from 'react-inlinesvg';
import gorsvg from '../img/gor.svg';
import capsvg from '../img/cap.svg';
import logo from '../img/logo.svg';

import {Link} from "react-router-dom";

// import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Gor = () => { 
    

    return(
        <Fragment>
            <div style={{backgroundColor:"rgb(33,36,52)"}}>
                {/* <Link to="/registration" className="reg"></Link>
                <Link to="/signin" className="sing"></Link> */}
                <Link to="/sei666" className="glavGor"></Link>
                <SVG src={gorsvg}/>
                <SVG src={capsvg} className="cap"/>

            </div>
        </Fragment>
    )
}
