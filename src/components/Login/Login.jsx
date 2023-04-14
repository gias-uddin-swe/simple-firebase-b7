import React from "react";

const Login = () => {

  
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <form action="">
                <input
                  className="email p-3 m-2"
                  type="email"
                  placeholder="enter your email"
                />
                <input
                  className="password p-3 m-2"
                  type="password"
                  placeholder="enter your password"
                />
                <button className="btn btn-info w-75 p-2 mt-3">Login</button>
                <p className="p-2">
                  <small className="text-info">
                    are you new? register here..
                  </small>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
