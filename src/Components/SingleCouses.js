import React from 'react'

export default function SingleCouses(props) {
    window.scrollTo(0, 0);
    let e = JSON.parse(localStorage.getItem('scdata'));
    function openVideo() {
        if (localStorage.getItem("email") !== null) {
            document.getElementById("myModal").style.display = "block"
        }
        else document.getElementById("open").click();
    }
    function openBuy() {
        if (localStorage.getItem("email") !== null) {
            document.getElementById("myModal").style.display = "block"
        }
        else document.getElementById("open").click();
    }
    function addCart() {
        if (localStorage.getItem("email") === null)
            document.getElementById("open").click();
        else {
            let get = localStorage.getItem('cart')
            console.log(get);
            if (get === null) {
                let arr = [];
                arr[0] = e;
                console.log("Assign at index" + JSON.stringify(arr))
                localStorage.setItem('cart', JSON.stringify(arr));
                props.setData(JSON.parse(localStorage.getItem('cart')));
            }
            else {
                console.log("cool");
                let arr = [];
                arr = JSON.parse(get);
                let index = arr.findIndex(x => x.id.videoId === e.id.videoId);
                console.log(index);
                if (index > -1) { }
                else {
                    arr[arr.length] = e;
                    console.log("Assign at end" + JSON.stringify(arr))
                    localStorage.setItem('cart', JSON.stringify(arr));
                    props.setData(JSON.parse(localStorage.getItem('cart')));
                }
            }
            props.setcount(JSON.parse(localStorage.getItem('cart')).length);
        }
    }

    return (
        <div>
            <div className="TopicsInfoSC">
                <div className="container ">
                    <div className="row  ">
                        <div className="col-md-8">
                            <h1>{e.snippet.title}</h1>
                            <h3>{e.snippet.channelTitle}</h3>
                            <div className="star"><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></span><span className="ratting"> 4.6 (76,654 ratings)___258,520 students enrolled</span></div>
                            <p>Created by Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller Last updated 2/2020<br /> <span><i className="fa fa-comment" aria-hidden="true"></i></span>  English English , <span style={{ marginLeft: "1%" }}><i className="fa fa-address-card" aria-hidden="true"></i></span> French [Auto-generated], 6 more</p>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-8 none">
                        <div className="row learn_box">
                            <div className="col-md-6">
                                <h2>What you'll learn</h2>
                                <p><span><i className="fa fa-check" aria-hidden="true"></i></span> Build powerful, fast, user-friendly and reactive web apps</p><br />
                                <p><span><i className="fa fa-check" aria-hidden="true"></i></span> Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now</p>
                            </div>
                            <div className="col-md-6">
                                <h2 style={{ color: "white" }}> .</h2>
                                <p><span><i className="fa fa-check" aria-hidden="true"></i></span> Provide amazing user experiences by leveraging the power of JavaScript with ease</p><br />
                                <p><span><i className="fa fa-check" aria-hidden="true"></i></span> Learn React Hooks & Class-based Components</p>
                            </div>
                        </div>
                        <div className="coursetit">

                            <h2 >Course Content</h2>
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne">
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>Get started <span className="lectures">13 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0"><button className="btn btn-link btn-block text-left" >Introduction </button></h2>
                                            </div>
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0"><button className="btn btn-link btn-block text-left" >What is React ?</button></h2>
                                            </div>
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0"><button className="btn btn-link btn-block text-left" >Real-World SPAs & React Web Apps</button></h2>
                                            </div>
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0"><button className="btn btn-link btn-block text-left" >Writing our First React Code</button></h2>
                                            </div>
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0"><button className="btn btn-link btn-block text-left" >Why Should we Choose React? </button></h2>
                                            </div>
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0"><button className="btn btn-link btn-block text-left" >React Alternatives </button></h2>
                                            </div>
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0"><button className="btn btn-link btn-block text-left" >Understanding Single Page Applications and Multi Page Applications </button></h2>
                                            </div>
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0"><button className="btn btn-link btn-block text-left" >Course Outline </button></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col1" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span> Refreshing Next Generation JavaScript (Optional)<span className="lectures">23 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col1" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col2" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>Understanding the Base Features & Syntax  <span className="lectures">3 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col2" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col3" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>Working with Lists and Conditionals  <span className="lectures">13 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col3" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col4" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>Styling React Components & Elements  <span className="lectures">18 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col4" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col5" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>Debugging React Apps<span className="lectures">18 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col5" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col6" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>Diving Deeper into Components & React Internals <span className="lectures">12 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col6" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col7" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>A Real App: The Burger Builder (Basic Version)  <span className="lectures">13 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col7" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col8" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>Reaching out to the Web (Http / Ajax)<span className="lectures">27 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col8" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col9" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>Next Steps and Course Roundup <span className="lectures">22 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col9" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col10" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>Burger Builder Project: Accessing a Server<span className="lectures">7 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col10" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#col11" >
                                                <span ><i className="fa fa-plus" aria-hidden="true"></i></span>Bonus: Replacing Redux with React Hooks<span className="lectures">5 lectures</span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="col11" className="collapse" >
                                        <div className="card-body">....</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Requirements">
                            <h2>Requirements</h2>
                            <ul>
                                <li>JavaScript + HTML + CSS fundamentals are absolutely required</li>
                                <li>You DON'T need to be a JavaScript expert to succeed in this course!</li>
                                <li>ES6+ JavaScript knowledge is beneficial but not a must-have</li>
                                <li>NO prior React or any other JS framework experience is required!</li>
                            </ul>
                        </div>
                        <div className="Description">
                            <h1>Description</h1>
                            <h3>This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future :-)</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card Main_SingleSC" style={{ width: "100%" }}>
                            <img style={{ cursor: "pointer" }} src={e.snippet.thumbnails.high.url} className="card-img-top" alt="..." onClick={() => openVideo()} />
                            <h1 className="playsymbol" style={{ cursor: "pointer" }} onClick={() => openVideo()} ><span><i className="fa fa-play" aria-hidden="true"></i></span></h1>
                            <div className="card-body">
                                <h5 className="card-title"><span className="tlarge">₹455 </span><del>₹12,160</del> 96%off</h5>
                                <p className="offer">3 days left at this price!</p>
                                <button className="btn btn-outline-sign my-2 my-sm-0" type="button" onClick={() => addCart()}><b>Add to cart</b></button>
                                <button className="btn btn-outline-login my-2 my-sm-0" type="button" onClick={() => openBuy()}><b>{localStorage.getItem('email') === null ? "Buy Now" : "Watch Now"}</b></button>
                                <span className="Guarantee">30-Day Money-Back Guarantee</span>
                                <p>This course includes</p>
                                <ul>
                                    <li>40.5 hours on-demand video</li>
                                    <li> 48 articles</li>
                                    <li>223 downloadable resources</li>
                                    <li>Full lifetime access</li>
                                    <li>Certificate of Completion</li>
                                </ul><hr></hr>
                                <p className="share">Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myModal" className="modalz">
                <div className="modal-content">
                    <span onClick={() => { document.getElementById("myModal").style.display = "none"; }} className="closez">&times;</span>
                    <div className="embed-responsive embed-responsive-21by9">
                        <iframe title="Youtube" className="embed-responsive-item" src={"https://www.youtube.com/embed/" + e.id.videoId} ></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}


