import { FcDiploma1 } from "react-icons/fc";
const Services = () => {
  return (
    <section className="container my-4">
  <h2 className="text-center mb-5 fw-bold">Certifications <FcDiploma1/></h2>
  <div className="row g-4">
    <div className="col-md-4">
      <div className="card shadow-sm border-0">
        <div className="position-relative cert-card">
          <img
            src="/images/oracle-java.png"
            className="img-fluid rounded"
            alt="Oracle"
          />
          <div className="cert-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 text-white d-flex flex-column justify-content-center align-items-center">
            <h5>Oracle Java Foundations Associate</h5>
            <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=06E9259A29E6E6862C20D046B4E3E42A4885FBFD44D829F52346B0E6CB35A50D" className="btn btn-light btn-sm mt-2">View Credential</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card shadow-sm border-0">
        <div className="position-relative cert-card">
          <img
            src="/images/ethnus-aws.png"
            className="img-fluid rounded"
            alt="Oracle"
          />
          <div className="cert-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 text-white d-flex flex-column justify-content-center align-items-center">
            <h5>AWS Solution Architect - ASP </h5>
            <a href="https://ethnus.com/certverify/" className="btn btn-light btn-sm mt-2">View Credential</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card shadow-sm border-0">
        <div className="position-relative cert-card">
          <img
            src="/images/udemy-java.png"
            className="img-fluid rounded"
            alt="Oracle"
          />
          <div className="cert-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 text-white d-flex flex-column justify-content-center align-items-center">
            <h5>Udemy Java Spring Framework</h5>
            <a href="https://www.udemy.com/certificate/UC-acd9b7e0-9670-4c18-8789-ce59c0d82758/" className="btn btn-light btn-sm mt-2">View Credential</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card shadow-sm border-0">
        <div className="position-relative cert-card">
          <img
            src="/images/coursera-java.png"
            className="img-fluid rounded"
            alt="Oracle"
          />
          <div className="cert-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 text-white d-flex flex-column justify-content-center align-items-center">
            <h5>Coursera Java Programming</h5>
            <a href="https://www.coursera.org/account/accomplishments/verify/92MVSADCMSXK" className="btn btn-light btn-sm mt-2">View Credential</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card shadow-sm border-0">
        <div className="position-relative cert-card">
          <img
            src="/images/ml.png"
            className="img-fluid rounded"
            alt="Oracle"
          />
          <div className="cert-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 text-white d-flex flex-column justify-content-center align-items-center">
            <h5>Simplilearn Machine Learning</h5>
            <a href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI2ODciLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl80MTYxMDg5XzE2NzkxMjc0MjAucG5nIiwidXNlcm5hbWUiOiJLcmlzaG5hIEF3YXN0aGkifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1255870065686045619&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVt0hJC%2FcrSw529k%2ByrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAOflxL1BAAAA" className="btn btn-light btn-sm mt-2">View Credential</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
  );
};
export default Services;
