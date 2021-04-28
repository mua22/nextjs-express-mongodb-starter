import React from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const AdminNavBar = () => {
  const router = useRouter();
  return (
    <header id="header" className="light" data-fullwidth="true">
      <div className="header-inner">
        <div className="container">
          {/*Logo*/}
          <div id="logo">
            <a href="index.html">
              <span className="logo-default">Admin</span>
              <span className="logo-dark">Admin</span>
            </a>
          </div>

          <div id="mainMenu-trigger">
            <a className="lines-button x">
              <span className="lines" />
            </a>
          </div>
          {/*end: Navigation Resposnive Trigger*/}
          {/*Navigation*/}
          <div id="mainMenu">
            <div className="container">
              <nav>
                <ul>
                  <li>
                    <Link href="/">
                      <a>Visit Site</a>
                    </Link>
                  </li>

                  <li>
                    <a
                      href="/logout"
                      onClick={(e) => {
                        e.preventDefault();
                        axios.get("/api/auth/logout").then((res) => {
                          toast.success("Logged Out Successfully");
                          router.push("/login");
                        });
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/*end: Navigation*/}
        </div>
      </div>
    </header>
  );
};

export default AdminNavBar;
