import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import imageArt from "../img/back1.png";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import "./login.css";

function Reset() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4001/resetpass/${id}/${token}`, {
        password,
      })
      .then((res) => {
        if (res.data.Status == "Success") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  const [isHoveredSignUp, setIsHoveredSignUp] = useState(false);
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);

  const buttonStyle = {
    marginRight: "10px",
    borderRadius: "12px",
    color: "#000000",
    border: "2px solid transparent",
    transition: "border 0.3s",
    fontWeight: "500",
    fontSize: "1rem",
  };
  const buttonHoverStyle = {
    border: "2px solid #000000",
  };
  const cardNew = {
    width: "75%",
    paddingTop: "7%",
  };

  return (
    <div className="cardStyle">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ top: 0 }}>
        <div className="BAR">
          <Link to="/" className="navbar-brand">
            <img
              src={Logo}
              style={{ height: "150%", marginLeft: "15%" }}
              alt="Logo"
            />
          </Link>
          <div className="d-flex">
            <ul
              className="navbar-nav"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <li className="nav">
                <Link
                  to="/register"
                  className="nav-link btn btn-outline rounded-10"
                  style={{
                    ...buttonStyle,
                    ...(isHoveredSignUp ? buttonHoverStyle : {}),
                  }}
                  onMouseEnter={() => setIsHoveredSignUp(true)}
                  onMouseLeave={() => setIsHoveredSignUp(false)}
                >
                  Signup
                </Link>
              </li>
              <li className="nav">
                <Link
                  to="/login"
                  className="nav-link btn btn-size-10 rounded-10"
                  style={{
                    ...buttonStyle,
                    ...(isHoveredLogin ? buttonHoverStyle : {}),
                  }}
                  onMouseEnter={() => setIsHoveredLogin(true)}
                  onMouseLeave={() => setIsHoveredLogin(false)}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="blurredCardStyle mx-auto p-2 rounded-4 px-4">
        <div>
          <img src={imageArt} alt="" className="art" />
        </div>
        <div style={cardNew}>
          <h2
            className="d-flex justify-content-center align-items-center"
            style={{ color: "#262626", fontWeight: "550" }}
          >
            Reset Password
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div
                className="mb-1"
                style={{ color: "#262626", fontWeight: "550" }}
              >
                <label className="formLabel" htmlFor="email">
                  New Password
                </label>
              </div>
              <div>
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  className="inputStyle form-control rounded-3"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn w-50 rounded-pill"
                style={{
                  backgroundColor: "#007697",
                  color: "#FFF",
                  marginTop: "5%",
                }}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
