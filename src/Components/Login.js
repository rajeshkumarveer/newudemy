import React,{useState} from 'react';

export default function Login(props) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function check(){
        if(email.replace('@','')!=="" && password!=="" && email.includes("@")){
            localStorage.setItem('email',email);
            localStorage.setItem('password',password);
            setEmail("");setPassword("");setName("");
            document.getElementsByClassName("close")[0].click()
            props.props.setIslogin(true);
        }
        else{
            alert("Enter valid Email and password");
        }
    }
    return (
        <div className="modal fade" id="exampleModal"  role="dialog" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel"><span className="modelspan"></span> and Start Learning!</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form">
                            <div className="input-group first_inp">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                </div>
                                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-unlock-alt" aria-hidden="true"></i></span>
                                </div>
                                <input type="Password" className="form-control" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                        </form>
                        <button className="btn btn-outline-sign my-2 my-sm-0" type="button" onClick={()=>{check()}}><b><span className="modelspan"></span></b></button>
                        <br /><br /><br />
                        <div className="model_dis">By signing up, you agree to our Terms of Use and Privacy Policy.</div>
                    </div>
                    <div className="modal-footer">
                        <button type="button close" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

