import Head from "next/head";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const Register = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [fetching, setFetching] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFetching(true);
    axios
      .post("/api/auth/register", user)
      .then((res) => {
        toast.success("Registeration Successfule");
        router.push("/login");
      })
      .catch((err) => {
        console.log("Error");
        if (err.response) {
          setErrors(err.response.data);
        } else toast.error("Somathing Bad Happened");
      })
      .finally(() => {
        setFetching(false);
      });
  };
  return (
    <React.Fragment>
      <Head>
        <title>Register</title>
      </Head>
      <div className="body-inner">
        {/* Section */}
        <section className="fullscreen" data-bg-parallax="images/pages/1.jpg">
          <div className="container">
            <div>
              <div className="row">
                <div className="col-lg-5 center p-50 background-white b-r-6">
                  <h3>Register New Acocunt</h3>
                  <form>
                    <div className="form-group">
                      <label className="form-label"> Name</label>
                      <input
                        type="text"
                        className={
                          errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Name"
                        disabled={fetching}
                        value={user.name}
                        onChange={(e) => {
                          setUser({ ...user, name: e.target.value });
                        }}
                      />
                      <div className="invalid-feedback">{errors.name}</div>
                    </div>
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
                        Register
                      </button>
                    </div>
                  </form>
                  <p className="small">
                    Already have an account?{" "}
                    <Link href="/login">
                      <a>Login</a>
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

export default Register;
