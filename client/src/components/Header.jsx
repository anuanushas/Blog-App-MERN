import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();

  const handllogOut = () => {
    toast.warn("User Logged Out");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    navigate("/login");
  };
  const userId = localStorage.getItem("userId");
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-primary text-primary "
        data-bs-theme="dark"
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to={"/home"}>
            MY BLOG
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="navbar-brand" to={"/home"}>
                Home
              </Link>
              {userId && (
                <Link className="navbar-brand" to={"/myblog"}>
                  My blog
                </Link>
              )}
              {userId && (
                <Link className="navbar-brand" to={"/new"}>
                  Create new blog
                </Link>
              )}
              {!userId && (
                <Link className="navbar-brand" to={"/signup"}>
                  SignUp
                </Link>
              )}
              {!userId && (
                <Link className="navbar-brand" to={"/login"}>
                  Login
                </Link>
              )}
              {userId && (
                <Link className="navbar-brand" onClick={handllogOut}>
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
