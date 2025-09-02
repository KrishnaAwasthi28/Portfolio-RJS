import { FcSupport } from "react-icons/fc";
import { FaFileCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { SiCodeblocks } from "react-icons/si";
const Portfolio = () => {
  return (
    <>
      <section className="container my-4">
      <h2 className="text-center mb-5 fw-bold">Skills <FcSupport/></h2>

      <div className="row g-4">
        {/* Languages */}
        <div className="col-md-6">
          <div className="card shadow-lg h-100 p-3">
            <div className="card-body">
              <h4 className="card-title mb-4">Languages <FaFileCode/></h4>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge bg-primary fs-6 px-3 py-2">Java ☕</span>
                <span className="badge bg-warning text-dark fs-6 px-3 py-2">Python 🐍</span>
                <span className="badge bg-info text-dark fs-6 px-3 py-2">JavaScript</span>
              </div>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="col-md-6">
          <div className="card shadow-lg h-100 p-3">
            <div className="card-body">
              <h4 className="card-title mb-4">Frameworks <FaCodeBranch/></h4>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge bg-success fs-6 px-3 py-2">Spring Boot</span>
                <span className="badge bg-info text-dark fs-6 px-3 py-2">ReactJS ⚛️</span>
                <span className="badge bg-success fs-6 px-3 py-2">Spring Security</span>
                <span className="badge bg-secondary fs-6 px-3 py-2">WebSockets</span>
                <span className="badge bg-primary fs-6 px-3 py-2">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="col-md-6">
          <div className="card shadow-lg h-100 p-3">
            <div className="card-body">
              <h4 className="card-title mb-4">Databases <BsDatabaseFillCheck/></h4>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge bg-danger fs-6 px-3 py-2">MySQL</span>
                <span className="badge bg-dark fs-6 px-3 py-2">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Others */}
        <div className="col-md-6">
          <div className="card shadow-lg h-100 p-3">
            <div className="card-body">
              <h4 className="card-title mb-4">Others <SiCodeblocks/></h4>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge bg-warning text-dark fs-6 px-3 py-2">AWS</span>
                <span className="badge bg-dark fs-6 px-3 py-2">Git/GitHub</span>
                <span className="badge bg-secondary fs-6 px-3 py-2">REST APIs</span>
                <span className="badge bg-success fs-6 px-3 py-2">Machine Learning</span>
                <span className="badge bg-primary fs-6 px-3 py-2">HTML/CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Portfolio;
