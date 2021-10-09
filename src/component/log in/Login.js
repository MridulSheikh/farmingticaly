import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css"
const Login = () => {
    return (
        <div className="login">
        <div className="row">
        <div className="col-md-6">
        <form className="from ">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" required/>
        </div>
        <button type="submit" class="btnw btn-success py-1">Login</button>
      </form>
      <p className="mt-3">Are you new here ? <Link to="/singup">Sing up</Link> </p>
      <div className="social mt-5">
      <button className=" btns"> continue with  <img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="" width="20px" /></button>
      <h5 className="text-center my-3">or</h5>
      <button className="mb-5 btns"> continue with  <img src="https://pngpress.com/wp-content/uploads/2020/08/uploads_facebook_logos_facebook_logos_PNG19750.png" alt="" width='20px' /></button>
      </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center aling-items-center">
        <img src="https://img.freepik.com/free-vector/woman-greenhouse-2d-web-banner-poster-woman-holding-radish-horticulturist-flat-character-cartoon-background-growing-flowers-vegetables-printable-patches-colorful-web-elements_151150-1586.jpg?size=626&ext=jpg" alt="" width="85%" />
        </div>
        </div>
        </div>
    );
};

export default Login;