import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Formblog from "../components/formblog";

const Newblog = () => {
  const [data, setData] = useState({ title: "", body: "", authorId: "" });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/blog", {
        title: data.title,
        body: data.body,
        authorId: localStorage.getItem("userId"),
      })
      .then((res) => {
        toast.success("New Blog Successful created");

        navigate("/myblog");
      })
      .catch((error) => {
        console.log("Error submitting form:", error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <Formblog
      data={data}
      setData={setData}
      buttonName="Create Blog"
      handleSubmit={handleSubmit}
    />
  );
};

export default Newblog;
