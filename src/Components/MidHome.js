import React,{useState} from 'react'
import HomeCourses from './HomeCourses';

export default function MidHome(props) {
    window.scrollTo(0, 0);
    const [midsearch,setmidsearch]=useState("");
    function check(e){
        e.preventDefault();
        if(midsearch !== ""){
            props.setsearchVal(midsearch);
            props.setstartSearch(true);
        }
    }
    function TopicSearch(e){
        props.setsearchVal(e.target.innerText);
        props.setstartSearch(true);
    }
    return (
        <div>
            <div className="Below_nav">
                <h1><b>Learn on your schedule</b></h1>
                <p>Study any topic, anytime. Choose from thousands of <br class="tinitiny"/>expert-led courses now.</p>
                <form className="form-inline">
                    <div className="input-group">
                        <input type="text" value={midsearch} onChange={(e)=>setmidsearch(e.target.value)} className="form-control search_main1" placeholder="What do u want to learn" aria-label="Username" aria-describedby="basic-addon1" />
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-danger1 my-2 my-sm-0" type="submit" onClick={(e)=>check(e)}><span ><i className="fas fa-search"></i></span></button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row below_img">
                <div className="col-sm-4 col-6"><b>100,000 online courses</b><br />Explore a variety of fresh topics</div>
                <div className="col-sm-4 col-6"><b>Expert instruction</b><br />Find the right instructor for you</div>
                <div className="col-sm-4 tinitiny"><b>Lifetime access</b><br />Learn on your schedule</div>
            </div>

            <HomeCourses />
            <div>
                <div className="line"></div>
                <div className="local_design">
                    <div className="row inner_design">
                        <div className="col-2"><span><i className="fa fa-file-video" aria-hidden="true"></i></span></div>
                        <div className="col-2"><span><i className="fa fa-address-card" aria-hidden="true"></i></span></div>
                        <div className="col-2"><span><i className="fa fa-server" aria-hidden="true"></i></span></div>
                        <div className="col-2"><span><i className="fa fa-gavel" aria-hidden="true"></i></span></div>
                        <div className="col-2"><span><i className="fa fa-star" aria-hidden="true"></i></span></div>
                    </div>
                    <div className="row inner_mid_design">
                        <div className="col-sm-3 tinitiny inner_midicon_design"><span><i className="fa fa-pen" aria-hidden="true"></i></span></div>
                        <div className="col-sm-6 col-12">
                            <h4>Get personalized recommendations</h4>Answer a few questions for your top picks<br /><br />
                            <button className="btn btn-outline-sign my-2 my-sm-0"><b>Get Started</b></button>
                        </div>
                        <div className="col-sm-3 tinitiny inner_midicon_design" style={{ textAlign: "left" }}><span><i className="fa fa-camera" aria-hidden="true"></i></span></div>
                    </div>
                    <div className="row inner_design">
                        <div className="col-2"><span><i className="fa fa-thermometer-empty" aria-hidden="true"></i></span></div>
                        <div className="col-2"><span><i className="fa fa-ring" aria-hidden="true"></i></span></div>
                        <div className="col-2"><span><i className="fa fa-rocket" aria-hidden="true"></i></span></div>
                        <div className="col-2"><span><i className="fa fa-calendar" aria-hidden="true"></i></span></div>
                        <div className="col-2"><span><i className="fa fa-id-card" aria-hidden="true"></i></span></div>
                    </div>

                </div>
            </div>
            <div className="topsCatogories">
                <h2>Top categories</h2>
                <div className="row"> 
                    <div className="col-md-3 col-sm-3 top_cate" onClick={(e)=>TopicSearch(e)}><span><i className="fa fa-fire" aria-hidden="true" ></i>Development</span></div>
                    <div className="col-md-3 col-sm-4 top_cate" onClick={(e)=>TopicSearch(e)}><span><i className="fa fa-id-card" aria-hidden="true"></i>Business course</span></div>
                    <div className="col-md-3 col-sm-4 top_cate" onClick={(e)=>TopicSearch(e)}><span><i className="fa fa-desktop" aria-hidden="true"></i>IT and Software</span></div>
                    <div className="col-md-3 col-sm-3 top_cate" onClick={(e)=>TopicSearch(e)}><span><i className="fa fa-pen" aria-hidden="true"></i>Design</span></div><br class="tinitiny"/><br class="tinitiny" />
                    <div className="col-md-3 col-sm-4 top_cate" onClick={(e)=>TopicSearch(e)}><span><i className="fa fa-users" aria-hidden="true"></i>Marketing</span></div>
                    <div className="col-md-3 col-sm-4 top_cate" onClick={(e)=>TopicSearch(e)}><span><i className="fa fa-book" aria-hidden="true"></i>Personal Development</span></div>
                    <div className="col-md-3 col-sm-3 top_cate" onClick={(e)=>TopicSearch(e)}><span><i className="fa fa-camera" aria-hidden="true"></i>Photography</span></div>
                    <div className="col-md-3 col-sm-4 top_cate" onClick={(e)=>TopicSearch(e)}><span><i className="fa fa-music" aria-hidden="true"></i>Music</span></div>
                </div>
            </div>

        </div>
    )
}




