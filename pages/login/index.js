import Head from "next/head";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "usman.akram@gmail.com",
    password: "usman",
  });
  const [errors, setErrors] = React.useState({});
  const [fetching, setFetching] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFetching(true);
    axios
      .post("/api/auth/login", user)
      .then((res) => {
        toast.success("Login Successfule");
        router.push("/admin");
      })
      .catch((err) => {
        toast.error("Unable to Login Try Again");
      })
      .finally(() => {
        setFetching(false);
      });
  };
  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <div className="body-inner">
        {/* Section */}
        <section className="fullscreen" data-bg-parallax="images/pages/1.jpg">
          <div className="container">
            <div>
              <div className="row">
                <div className="col-lg-5 center p-50 background-white b-r-6">
                  <h3>Login To Your Acocunt</h3>

                  <div className="form-group">
                    <label className="form-label"> Email</label>
                    <input
                      type="text"
                      className={
                        errors.email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      placeholder="Email"
                      disabled={fetching}
                      value={user.email}
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                  </div>
                  <div className="form-group m-b-5">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className={
                        errors.email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      placeholder="Password"
                      disabled={fetching}
                      value={user.password}
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                    />
                    <div className="invalid-feedback">{errors.password}</div>
                  </div>
                  {/* <div className="form-group form-inline text-left">
                      <div className="form-check">
                        <label>
                          <input type="checkbox" />
                          <small className="m-l-10"> Remember me</small>
                        </label>
                      </div>
                    </div> */}
                  <div className="text-left form-group">
                    <button
                      type="button"
                      disabled={fetching}
                      className="btn"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>

                  <p className="small">
                    Not Yet Registered?{" "}
                    <Link href="/register">
                      <a>Register New Account</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: Section */}
      </div>
    </React.Fragment>
  );
};

export default Login;
