import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Formblog from "../components/formblog";

const Editblog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/blog/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error submitting form:", error);
        toast.error(error.response.data.message);
      });
  }, [id]);

  const handleEditbyid = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/blog/" + id, data)
      .then((res) => {
        toast.success(res.data);

        navigate("/home");
      })

      .catch((error) => {
        console.log("Error submitting form:", error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
      <Formblog
        data={data}
        setData={setData}
        buttonName="Edit Blog"
        handleSubmit={handleEditbyid}
      />
    </>
  );
};

export default Editblog;
