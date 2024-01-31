import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const Signup = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");





    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/signup", {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
        })
            .then(() => {
                toast.success("user register successful")
                navigate("/login");
            })
            .catch((error) => {
                console.log("Error submitting form:", error);
                toast.error(error.response.data.message);
            });
    };

    return (
        <>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    name="firstname"
                                    value={firstName}
                                    onChange={(e) => setfirstName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">
                                    Last Name
                                </label>
                                <input type="text" className="form-control" id="lastname" name="lastname"
                                    value={lastName}
                                    onChange={(e) => setlastName(e.target.value)}
                                />
                            </div>
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
                            <div className="mb-3">
                                <label htmlFor="phonenumber" className="form-label">
                                    PhoneNumber
                                </label>
                                <input type="number" className="form-control" id="phonenumber" name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setphoneNumber(e.target.value)}
                                />
                            </div>


                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>


                        </form>
                        <p>If you have already account then please </p>
                        <Link to={"/login"}>Click here</Link>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    );
};

export default Signup;



// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'

// const Signup = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setlastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [message, setMessage] = useState(null);
//     const navagate = useNavigate();

//     console.log(message)
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:8000/signup", { firstName, lastName, email, password, phoneNumber })
//             .then((result) => {
//                 navagate("/login")

//             })
//             .catch(error => {
//                 console.error("Error submitting form:", error);
//                 setMessage(error.response.data.message);
//             });

//     }
//     return (
//         <div className="container text-center mt-5">
//             <div className="row">
//                 <div className="col"></div>
//                 <div className="col">
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3">
//                             <label htmlFor="firstname" className="form-label">
//                                 First Name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="firstname"
//                                 name='firstname'
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="lastName" className="form-label">
//                                 Last Name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="lastName"
//                                 name='lastName'
//                                 value={lastName}
//                                 onChange={(e) => setlastName(e.target.value)}
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="exampleInputEmail1" className="form-label">
//                                 Email address
//                             </label>
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 id="exampleInputEmail1"
//                                 aria-describedby="emailHelp"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}

//                             />
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="exampleInputPassword1" className="form-label">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 id="exampleInputPassword1"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)} />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="phoneNumber" className="form-label">
//                                 Phone Number
//                             </label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 id="phoneNumber"
//                                 name='phoneNumber'
//                                 value={phoneNumber}
//                                 onChange={(e) => setPhoneNumber(e.target.value)}

//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary">
//                             Sign Up
//                         </button>
//                         {
//                             message ? <p>{message}</p> : <></>
//                         }
//                     </form>
//                     <span>If you haave already account then please <Link to={"/login"}>Clicke here</Link> </span>
//                 </div>
//                 <div className="col"></div>
//             </div>
//         </div>


//     )
// }

// export default Signup;
