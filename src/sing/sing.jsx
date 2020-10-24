import React, {Fragment} from "react";
import './sing.scss';

import logo from '../img/logo.svg';

import {Link} from "react-router-dom";


export const Signin = () => {

    return(
        <Fragment>

            <div className="main" style={{backgroundColor:"#212434"}}>
            {/* <div className="main"> */}
                <div className="center container d-flex bor">
                    <div className="row w-100">
                        <div className="col-sm d-flex justify-content-center align-items-center">
                            <div className="body__block--image">
                                <Link to="/" className="text-center"><img src={logo} alt="" className="logo" /></Link>
                            </div>
                        </div>
                        <div className="lineReg"></div>
                        <div className="col-sm d-flex justify-content-center align-items-center m20">
                            <div className="w-75">
                                <form >
                                    <div className="form-group">
                                        <input  autoComplete="off" type="email" className="form-control inputLineBottom" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Почта"/>
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" type="password" className="form-control inputLineBottom" required id="exampleInputPassword1" placeholder="Пароль"/>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        {/* <button type="submit" className="btn btn-primary pinkborderbutton" >Войти</button> */}
                                        <Link to="/sei666" className="btn btn-primary pinkborderbutton sei"></Link>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <Link to="/registration" className="btn btn-link link p-0 colorA">Зарегистрироваться</Link>
                                        
                                        <Link to="/" className="btn btn-link link p-0 colorA">Забыли пароль?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            </div>

</Fragment>
)
}
