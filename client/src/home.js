// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Home = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     useEffect(() => {
//         if (!location.state?.data) {
//             navigate("/login");
//         }
//     }, [location.state?.data, navigate]);

//     const handleBlog = () => {
//         navigate('/newblog');
//     };

//     return (
//         <div className="container text-center mt-5">
//             <h1>
//                 welcome to{' '}
//                 {location.state?.data ? (
//                     <>{location.state?.data.firstName} </>
//                 ) : (
//                     <>Home Pages</>
//                 )}
//             </h1><br />
//             <button className="btn btn-primary" onClick={handleBlog}>
//                 Post New Blog
//             </button>
//         </div>
//     );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/blogalldata")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log("Error submitting form:", error);
                toast.error(error.response.data.message);
            });
    }, []);

    const navigate = useNavigate();

    const handleBlog = () => {
        navigate("/newblog");
    };

    return (
        <>
            <button className="btn btn-primary" onClick={handleBlog}>
                Post New Blog
            </button>
            <div className=" container d-flex flex-wrap justify-content-between ">
                {data.map((value, index) => {
                    return (
                        <div key={index}>
                            <div className="card m-3" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Title:{value.title}</h5>
                                    <div className="card-text">
                                        {value.body.length > 180 ? (
                                            <p>
                                                {value.body.slice(0, 180)}..
                                                <button onClick={() => navigate(`/home/${value._id}`)}>
                                                    Read More
                                                </button>
                                            </p>
                                        ) : (
                                            <p>{value.body}</p>
                                        )}
                                    </div>
                                    <h4 className="card-title">Author:{value.author}</h4>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Home;
