import React from "react";

const Formblog = ({ data, setData, buttonName, handleSubmit }) => {
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
                  value={data.title}
                  required
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="body">Body:</label>
                <textarea
                  className="form-control"
                  id="body"
                  name="body"
                  value={data.body}
                  required
                  onChange={(e) => setData({ ...data, body: e.target.value })}
                ></textarea>
              </div>

              <br />

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  {buttonName}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formblog;
