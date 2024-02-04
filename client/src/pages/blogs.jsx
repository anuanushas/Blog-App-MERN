import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Blogs = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  console.log(id);
  useEffect(() => {
    axios
      .get("http://localhost:8000/blog/" + id)
      .then((res) => {
        console.log(res.data.title);
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error submitting form:", error);
        toast.error(error.response.data.message);
      });
  }, [id]);
  return (
    <>
      {data ? (
        <div>
          <h1>{data?.title}</h1>
          <h1>{data.body}</h1>
          <h1>{data.author}</h1>
        </div>
      ) : (
        <div>Data Loading ...</div>
      )}
    </>
  );
};

export default Blogs;
