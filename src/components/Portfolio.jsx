import Projects from "./Projects";
import { FaJava } from "react-icons/fa6";
const Portfolio = () => {
  return (
    <>
    <div class="container px-4 py-5" id="icon-grid">
      <h2 class="pb-2 border-bottom">Skills </h2>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#bootstrap"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Java</h3>
            <p>Proficient in Java programming with expertise in developing robust, scalable applications and object-oriented solutions</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#cpu-fill"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Python</h3>
            <p>Skilled in Python development, with experience in building versatile applications, data analysis, and automation solution.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#calendar3"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">JavaScript</h3>
            <p>Experienced in JavaScript for building dynamic, interactive web applications and enhancing front-end functionality.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#home"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Machine Learning</h3>
            <p>Proficient in machine learning, with expertise in building predictive models, data analysis, and algorithm optimization</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#speedometer2"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">React JS</h3>
            <p>Some Experience in React.js, specializing in building responsive, high-performance UI with reusable components..</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#toggles2"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">DSA</h3>
            <p>Strong understanding of Data Structures and Algorithms, with expertise in optimizing code for efficiency and performance.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#geo-fill"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">SpringBoot</h3>
            <p>Proficient in Spring Boot, with experience in building robust, scalable, and efficient Java-based microservices and web applications.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#tools"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">HTML & CSS</h3>
            <p>Skilled in HTML and CSS for creating well-structured, visually appealing web layouts and ensuring responsive design</p>
          </div>
        </div>
      </div>
    </div>
    <Projects></Projects>
    </>
  );
};
export default Portfolio;
