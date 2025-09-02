import { RiShoppingBag2Fill } from "react-icons/ri";
import { FcEngineering } from "react-icons/fc";

const Projects = () => {
  return (
    <div class="container my-4" id="custom-cards">
      <h2 className="text-center mb-5 fw-bold">Projects <FcEngineering/></h2>

      <div class="container my-5">
        <div class="row">
          {/* <!-- Project 1 --> */}
          <div class="col-md-4">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
              <div class="card-body">
                <h5 class="card-title">E-Kart Website <RiShoppingBag2Fill /></h5>
                <p class="card-text">
                  A full-featured e-commerce platform with user authentication,
                  product management, cart, and order features.
                </p>
                <p>
                  <strong>Tech:</strong> ReactJS, Java, Spring Boot, MySQL
                </p>
                <a
                  href="https://github.com/KrishnaAwasthi28/E-Commerce-Website"
                  class="btn btn-sm btn-dark"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Project 2 --> */}
          <div class="col-md-4">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
              <div class="card-body">
                <h5 class="card-title">Room Chat Application</h5>
                <p class="card-text">
                  Real-time chat supporting one-to-one, group, and global chat
                  rooms.
                </p>
                <p>
                  <strong>Tech:</strong> Spring Boot, WebSockets, ReactJS,
                  MongoDB
                </p>
                <a
                  href="https://github.com/KrishnaAwasthi28/Room-Chat-App"
                  class="btn btn-sm btn-dark"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Project 3 --> */}
          <div class="col-md-4">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
              <div class="card-body">
                <h5 class="card-title">Credit Card Fraud Detection</h5>
                <p class="card-text">
                  ML-powered fraud detection system achieving high accuracy
                  using advanced classification algorithms.
                </p>
                <p>
                  <strong>Tech:</strong> Python, Pandas, NumPy, ML
                </p>
                <a
                  href="https://github.com/KrishnaAwasthi28/Credit-Card-Fraud-Detection"
                  class="btn btn-sm btn-dark"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
