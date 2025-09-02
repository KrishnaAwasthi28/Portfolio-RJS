import { VscDebugAll } from "react-icons/vsc";
const Header = ({selectedTab,setSelectedTab}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        {/* Brand */}
        <a
          href="/"
          className="navbar-brand d-flex align-items-center text-decoration-none"
        >
          <VscDebugAll style={{ fontSize: "2.2rem" ,fontWeight:"bold"}} />
          <span className="fs-3 ms-2 fw-bold">Krishna</span>
        </a>

        {/* Toggler (Hamburger Menu) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto nav-pills">
            <li className="nav-item" onClick={() => setSelectedTab("Home")}>
              <a
                href="#"
                className={`nav-link ${selectedTab === "Home" ? "active" : ""}`}
              >
                Home
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelectedTab("About")}>
              <a
                href="#"
                className={`nav-link ${selectedTab === "About" ? "active" : ""}`}
              >
                About
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelectedTab("Skills")}>
              <a
                href="#"
                className={`nav-link ${selectedTab === "Skills" ? "active" : ""}`}
              >
                Skills
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelectedTab("Project")}>
              <a
                href="#"
                className={`nav-link ${selectedTab === "Project" ? "active" : ""}`}
              >
                Projects
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelectedTab("Certification")}>
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "Certification" ? "active" : ""
                }`}
              >
                Certifications
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelectedTab("Education")}>
              <a
                href="#"
                className={`nav-link ${selectedTab === "Education" ? "active" : ""}`}
              >
                Education
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelectedTab("Contact")}>
              <a
                href="#"
                className={`nav-link ${selectedTab === "Contact" ? "active" : ""}`}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;