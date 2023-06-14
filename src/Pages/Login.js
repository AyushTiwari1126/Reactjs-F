
import {useNavigate} from 'react-router-dom';
import APICall from '../network/APICall';
import Constant from '../network/LoginParameterConstants'

function Login(){


    const onLogin = (userName, Password)=>{
      APICall.login(userName, Password, Constant.issuerId, Constant.branchId)
      .then(navigate('/dashboard'))
      .catch((error) => alert("Unable to Login"));
    }

    const navigate = useNavigate();

        return(<>
         
         <main>
    <div className="container">

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="#" className="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt=""/>
                  {/* <span className="d-none d-lg-block">NiceAdmin</span> */}
                </a>
              </div>

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your username & password to login</p>
                  </div>

                  <form className="row g-3 needs-validation" novalidate>

                    <div className="col-12">
                      <label for="yourUsername" className="form-label">Username</label>
                      <div className="has-validation">
                       
                        <input type="text" name="username" className="form-control" id="yourUsername" placeholder="Enter name" required />
                        <div className="invalid-feedback">Please enter your username.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="yourPassword" className="form-label">Password</label>
                      <input type="password" name="password" className="form-control" id="yourPassword" required />
                      <div className="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                        <label className="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit" onClick={onLogin}>Login</button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have account? <a href="">Create an account</a></p>
                    </div>
                  </form>

                </div>
              </div>

             

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
        
        </>);
}

export default Login;