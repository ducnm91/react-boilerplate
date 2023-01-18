import React, { useState } from "react";

function LoginPage() {
  const [name, setName] = useState("");
  return (
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
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
