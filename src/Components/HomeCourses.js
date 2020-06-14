import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export default function HomeCourses(props) {
    window.scrollTo(0, 0);
    //AIzaSyC2WZgt05bCCYXcTg0s-eQDkoR0Cy-ArZ8
    let api = "AIzaSyB1hD7YASHt4QAPV7mv9a1Thn13shILn74";
    const [data, setData] = useState([]);

    useEffect(() => {
        let random=["Angular","Reactjs","nodejs","mongodb"]
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&q=${random[Math.floor(Math.random() * 4)]}&key=${api}`)
            .then(res => {
                setData(res.data.items);
            })
            .catch((e)=>{alert("Error occur in fetching data.....")})
    }, [api])
    //https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=18&regionCode=In&key= --->Popular video
    //e.snippet.thumbnails.standard.url----->image
    //e.snippet.title------------>title
    //e.channelTitle ------------>channeltitle

    function assignSC(e){
        localStorage.setItem("scdata",JSON.stringify(e));
    }

    return (
        <div>
            <div className="row courses_row">
                
                {data.map((e,i) =><div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 courses_inner" key={i} ><Link to={`/courses/${e.snippet.title.split(' ').join('-').split('|').join('')}`} onClick={()=>{assignSC(e)}} > <div className="card" >
                <img className="card-img-top" src={e.snippet.thumbnails.medium.url} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{e.snippet.title}</h5>
                    <p className="card-text">{e.snippet.channelTitle}</p>
                    <div className="star"><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></span></div>
                    <div style={{ textAlign : "right" }} ><span style={{fontSize: "1.6vh"}}><del>12480</del></span><span style={{marginLeft :"2vh"}}><b>₹ 455</b></span>
                    </div>
                </div>
            </div></Link></div>)}
                

            </div>

            
        </div>
    )
}
