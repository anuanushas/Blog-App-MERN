import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Newblog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/newblog", {
        title,
        body,
        author,
      })
      .then(() => {
        toast.success("New Blog Successful created");
        navigate("/home");
      })
      .catch((error) => {
        console.log("Error submitting form:", error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h1>Blogs Post</h1>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="body">Body:</label>
                <textarea
                  className="form-control"
                  id="body"
                  name="body"
                  value={body}
                  required
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={author}
                  required
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <br />

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newblog;
