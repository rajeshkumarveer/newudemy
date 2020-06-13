import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link,useParams} from "react-router-dom"; 

export default function SearchContent(props) {
    window.scrollTo(0, 0);
    let { topicId } = useParams();
    const [data, setData] = useState([]);
    //AIzaSyC2WZgt05bCCYXcTg0s-eQDkoR0Cy-ArZ8
    let api = "AIzaSyC2WZgt05bCCYXcTg0s-eQDkoR0Cy-ArZ8";
    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${topicId}&key=${api}`)
            .then(res => {
                setData(res.data.items);
            })
            .catch((e) => { alert("some thing bad happen!.") })
    }, [topicId,api])
    function assignSC(e){
        localStorage.setItem("scdata",JSON.stringify(e));
    }
    let ran=Math.floor(Math.random() * 500)+1;
    return (
        <div className="searchContent">
            <h1>{ran} results for “{topicId}”</h1>
            <div className="decbox">
                <h3><span><i className="fa fa-calendar-check" aria-hidden="true"></i> </span>Not sure? All courses have a 30-day money-back guarantee</h3>
            </div>
            <div className="relevent"><button className="btn btn-outline-login my-2 my-sm-0" ><b>Most Relavant</b></button><span>{ran} result</span></div>

            {data.map((e,i) =><Link to={`/courses/${e.snippet.title.split(' ').join('-').split('|').join('')}` } key={i} onClick={()=>{assignSC(e)}}> <div className="row seachcourse" >
                <div className="col-md-3">
                    <img src={e.snippet.thumbnails.high.url} alt="cool" className="imgsearchc" />
                </div>
                <div className="col-md-9 row">
                    <div className="col-10 mainTopicCont">
                        <h3>{e.snippet.title}</h3>
                        <p className="funz">{e.snippet.description} </p>
                        <p className="funz2">{e.snippet.channelTitle}</p>
                        <div className="star"><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></span><span className="ratting"> (76,782)</span></div>
                        <ul><li>{Math.floor(Math.random() * 50)+1} total hours</li><li>{Math.floor(Math.random() * 500)+1} lectures</li><li>All Levels</li></ul>
                    </div>
                    <div className="col-2 mainTopicContRight">
                        <div><b>₹455</b><br /><del>₹12,160</del></div>
                    </div>
                </div>

            </div></Link>)}

        </div>
    )
}
