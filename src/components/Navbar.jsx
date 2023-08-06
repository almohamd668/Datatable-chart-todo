import "./Navbar"

import {
  Link,
} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container">
          <Link className="navbar-brand" to={""}>
            logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={""}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={"comments"}>
                  comments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"posts"}>
                  Posts
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={"todos"}>
                Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"charts"}>
                Charts
              </Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
