import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "store/auth/authSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleLogin = () => {
    if (!name.trim().length) {
      return;
    }
    localStorage.setItem("ACCESS_TOKEN", "xxx");
    dispatch(login());
    navigate("/home");
  };
  return (
    <>
      <div id="login-page">
        <div className="row">
          <div className="col-lg-4">
            <form>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter any thing to login"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary"
                disabled={!name.trim().length}
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
