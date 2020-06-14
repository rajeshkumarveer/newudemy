import React from 'react'
import {Link} from "react-router-dom";



export default function Cart(props) {
    function assignSC(e) {
        localStorage.setItem("scdata", JSON.stringify(e));
    }
    function removesc(a) {
        props.setcount(props.count-1);
        let e=JSON.parse(JSON.stringify(a))
        let index = props.data.findIndex(x => x.id.videoId === e.id.videoId);
        console.log(index);
        if (index > -1) {
            let s=props.data;
            s.splice(index, 1);
            console.log("Assign at end" + JSON.stringify(s))
            localStorage.setItem('cart', JSON.stringify(s));
            props.setData(JSON.parse(localStorage.getItem('cart')));
        }
        else console.log("something bad occur");


    }
    return (
        <div>
            <div className="carthead">
                <div className="container">
                    <div className="inner_">
                        <p> <span><i className="fa fa-home"></i> / </span>Shopping Cart</p>
                        <h1>Shopping Cart</h1>
                    </div>
                </div>
            </div>
            <div className="container cartcoursecontainer">
                <div className="row ">
                    <div className="col-md-8 ">
                        <div className="cartcourse">
                            <p className="courseno">{props.data.length} Course in Cart</p>
                            {props.data.map((e) => <div className="row box">
                                <div className="col-2 donss">
                                    <Link to={`/courses/${e.snippet.title.split(' ').join('-').split('|').join('')}`} onClick={() => { assignSC(e) }}>
                                        <img src={e.snippet.thumbnails.high.url} alt="cool" className="imgsearchc" />
                                    </Link>
                                </div>
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-9 ">
                                            <Link to={`/courses/${e.snippet.title.split(' ').join('-').split('|').join('')}`} onClick={() => { assignSC(e) }}>
                                                <h3>{e.snippet.title}</h3>
                                                <p className="funz2">{e.snippet.channelTitle}</p>
                                            </Link>
                                        </div>
                                        <div className="col-2 remove">
                                            <p onClick={() => removesc(e)}>Remove</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <Link to={`/courses/${e.snippet.title.split(' ').join('-').split('|').join('')}`} onClick={() => { assignSC(e) }}>
                                        <div className="sideeff"><b className="rup">₹ 455 </b><br /><del>₹12,160</del></div>
                                    </Link>
                                </div>
                            </div>)}
                        </div>
                        <div className="sideinfo">
                            <h3>Saved for later</h3>
                            <p>You haven't saved any courses for later.</p>
                        </div>
                    </div>
                    <div className="col-md-1 "></div>
                    <div className="col-md-3 ">
                        <div className="totalamt">
                            <p>Total :</p>
                            <h1>₹{props.data.length * 455}</h1>
                            <span><del>₹{props.data.length * 12160}</del><br />96% off</span>
                            <button className="btn btn-outline-sign my-2 my-sm-0" ><b>Checkout</b></button>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
