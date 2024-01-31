import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")



    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/login", {


            email,
            password,
        }).then((res) => {
            toast.success("user login successful")

            const data = res.data;
            navigate("/home", { state: { data } })
        })
            .catch(error => {
                console.log(error)
                toast.error(error.response.data.message);


            })
    }

    return (

        <div className="container text-center mt-5">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form onSubmit={handleLogin}>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" id="email" name="email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>


                        <button type="submit" className="btn btn-primary">
                            SignIn
                        </button>

                    </form>
                    <p>If you have already account then please </p>
                    <Link to={"/signup"}>Click here</Link>
                </div>
                <div className="col"></div>
            </div>
        </div>

    )
}

export default Login;




// import axios from 'axios';
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Login = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navagate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:8000/login", { email, password })
//             .then(() => {
//                 navagate("/")
//             })
//             .catch(error => {
//                 console.error("Error submitting form:", error);
//             });
//     }

//     return (
//         <>
//             <div className="container text-center mt-5">
//                 <div className="row">
//                     <div className="col"></div>
//                     <div className="col">
//                         <form onSubmit={handleLogin}>
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputEmail1" className="form-label">
//                                     Email address
//                                 </label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     id="exampleInputEmail1"
//                                     aria-describedby="emailHelp"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                                 <div id="emailHelp" className="form-text">
//                                     We'll never share your email with anyone else.
//                                 </div>
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputPassword1" className="form-label">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     id="exampleInputPassword1"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </div>

//                             <button type="submit" className="btn btn-primary">
//                                 Login
//                             </button>
//                         </form>
//                         <span>If you dont have account then please <Link to={"/signup"}>Clicke here</Link> </span>
//                     </div>
//                     <div className="col"></div>
//                 </div>
//             </div >




//         </>
//     )
// }
// export default Login