import { FcApproval,FcProcess,FcDepartment } from "react-icons/fc";
const Education = () => {
  return (
    <section className="container my-4">
      <h2 className="text-center mb-5 fw-bold">Education <FcDepartment/> </h2>

      <div className="timeline">
        {/* VIT Bhopal */}
        <div className="timeline-item">
          <div className="timeline-dot bg-primary"></div>
          <div className="timeline-content shadow p-4 rounded">
            <h5 className="fw-bold">B.Tech in Computer Science <FcProcess /></h5>
            <p className="mb-1 fw-600">VIT Bhopal University (2022 – Present)</p>
            <small className="text-muted">GPA: 8.09 / 10</small>
          </div>
        </div>

        {/* ISC */}
        <div className="timeline-item">
          <div className="timeline-dot bg-success"></div>
          <div className="timeline-content shadow p-4 rounded">
            <h5 className="fw-bold">Higher Secondary (ISC) <FcApproval/></h5>
            <p className="mb-1">W.H. Smith Memorial School (2019 – 2021)</p>
            <small className="text-muted">Percentage: 84.2%</small>
          </div>
        </div>

        {/* ICSE */}
        <div className="timeline-item">
          <div className="timeline-dot bg-danger"></div>
          <div className="timeline-content shadow p-4 rounded">
            <h5 className="fw-bold">Secondary (ICSE) <FcApproval/></h5>
            <p className="mb-1">W.H. Smith Memorial School (2008 – 2019)</p>
            <small className="text-muted">Percentage: 78.8%</small>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
