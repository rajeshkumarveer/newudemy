import React, { useState } from 'react'
import Login from './Login';
import { Link} from "react-router-dom";

export default function Navbar(props) {
    const [nsearchVal, setNsearchVal] = useState("");
    function call(e) {
        if (e === "login") {
            [0, 1].forEach((i) => { document.getElementsByClassName("modelspan")[i].innerHTML = "login"; })
            document.getElementsByClassName("first_inp")[0].style.display = "none";
        }
        else {
            document.getElementsByClassName("first_inp")[0].style.display = "flex";
            [0, 1].forEach((i) => { document.getElementsByClassName("modelspan")[i].innerHTML = "Sign Up"; })

        }
    }
    function changelout(e) {
        e.preventDefault();
        props.setIslogin(false);
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("cart");
        props.setData([]);
        props.setcount(0);
    }
    function TopicSearch(e) {
        props.setsearchVal(e.target.innerText);
        props.setstartSearch(true);
    }
    
    //<a className="nav-link" href="/cart">{props.data!==null&&props.data.length>0?<span style={{color: "#ec5252",fontSize : "2.3vh"}}><i className="fa fa-cart-plus" aria-hidden="true"></i></span>:<span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>}</a>
    return (

        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a href="/"><img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" className="navbar-brand" width="110vh" href="/" alt="Brand" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="nav_mid">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" >
                                <i className="fa fa-th" aria-hidden="true"></i> Categories
                            </a>
                            <div className="dropdown-menu DropMenu" aria-labelledby="navbarDropdown">
                                <div className="dropdown-item" onClick={(e) => TopicSearch(e)}><span><i className="fa fa-fire" aria-hidden="true" ></i></span>Development</div>
                                <div className="dropdown-item" onClick={(e) => TopicSearch(e)}><span><i className="fa fa-id-card" aria-hidden="true"></i></span>Business course</div>
                                <div className="dropdown-item" onClick={(e) => TopicSearch(e)}><span><i className="fa fa-desktop" aria-hidden="true"></i></span>IT and Software</div>
                                <div className="dropdown-item" onClick={(e) => TopicSearch(e)}><span><i className="fa fa-pen" aria-hidden="true"></i></span>Design</div>
                                <div className="dropdown-item" onClick={(e) => TopicSearch(e)}><span><i className="fa fa-users" aria-hidden="true"></i></span>Marketing</div>
                                <div className="dropdown-item" onClick={(e) => TopicSearch(e)}><span><i className="fa fa-book" aria-hidden="true"></i></span>Personal Development</div>
                                <div className="dropdown-item" onClick={(e) => TopicSearch(e)}><span><i className="fa fa-camera" aria-hidden="true"></i></span>Photography</div>
                                <div className="dropdown-item" onClick={(e) => TopicSearch(e)}><span><i className="fa fa-music" aria-hidden="true"></i></span>Music</div>
                                <div className="dropdown-divider"></div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline">
                                <div className="input-group">
                                    <input type="text" value={nsearchVal} onChange={(e) => { setNsearchVal(e.target.value) }} className="form-control search_main" placeholder="search for anything" aria-label="Username" aria-describedby="basic-addon1" />
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={(e) => { e.preventDefault(); props.setstartSearch(true); props.setsearchVal(nsearchVal) }} ><span ><i className="fas fa-search"></i></span></button>
                                    </div>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        <Link to={`/cart`} className="nav-link"><div style={{position: "relative"}}><span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>{props.count>0?<span className="increament">{props.count}</span>:null}</div></Link>
                    </li>
                    {!props.islogin ? <>
                        <li className="nav-item">
                            <button className="btn btn-outline-login my-2 my-sm-0" type="button" onClick={(e) => { call("login") }} data-toggle="modal" data-target="#exampleModal"><b>Login</b></button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-sign my-2 my-sm-0" type="button" onClick={(e) => { call("logout") }} data-toggle="modal" data-target="#exampleModal" id="open"><b>Sign Up</b></button>
                        </li>
                    </> : <><li className="nav-item">
                        <a className="nav-link" href="/"><span><i className="fa fa-heart" aria-hidden="true"></i></span></a>
                    </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><span><i className="fa fa-bell" aria-hidden="true"></i></span></a>
                            </li>
                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" >{localStorage.getItem('email').toUpperCase()[0]}</a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="/" onClick={(e) => { changelout(e) }}>Logout</a>
                                </div>
                            </div>
                        </>}
                </ul>
                <Login props={props} />

            </div>

        </nav>
    )
}
