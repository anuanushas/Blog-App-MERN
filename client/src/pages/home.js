

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/blog")
            .then((res) => {

                setData(res.data);

            })
            .catch((error) => {
                console.log("Error submitting form:", error);
                toast.error(error.response.data.message);
            });
    }, []);

    const handleDeleteBlog = (id) => {
        axios
            .delete("http://localhost:8000/blog/" + id)
            .then((res) => {
                toast.success(res.data);

                setData(data.filter((value) => value._id !== id));
            })
            .catch((error) => {
                console.log("Error submitting form:", error);
                toast.error(error.response.data.message);
            });
    };
    // useEffect(() => {
    //     if (!localStorage.getItem("userId")) {
    //         navigate("/login")
    //     }
    // }, [navigate])



    // const handleBlog = () => {
    //     navigate("/new");
    // };


    return (
        <>
            <div className='container d-flex justify-content-around flex-wrap'>
                {
                    data.map((value, index) => {
                        return (<div key={index}>
                            <div className="card m-2" style={{ width: "24rem", height: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Author: {value.authorId.firstName}</h6>
                                    <p className="card-text">
                                        {value.body.length > 170 ? <> {value.body.slice(0, 170)}   <button className='btn btn-success m-2' onClick={() => navigate(`/read/${value._id}`)}>
                                            Read More
                                        </button>  </> : <>{value.body}</>}
                                    </p>
                                    {
                                        localStorage.getItem("userId") === value.authorId._id &&
                                        <button className='btn btn-info m-2' onClick={() => navigate(`/edit/${value._id}`)}> Edit Blog</button>
                                    }
                                    {
                                        localStorage.getItem("userId") === value.authorId._id &&
                                        <button className='btn btn-danger m-2' onClick={() => handleDeleteBlog(value._id)}> Delete Blog</button>
                                    }
                                </div>
                            </div>
                        </div >)
                    })
                }
            </div>
        </>
    )
};

export default Home;
