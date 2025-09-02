import { FcAbout } from "react-icons/fc";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div class="container my-3 ">
      <div class="p-5 text-center bg-body-tertiary rounded-3 about">
        <h1 class="text-body-emphasis">
          About <FcAbout />{" "}
        </h1>
        <p class="col-lg-8 mx-auto fs-5 text-muted ">
          Hi, I’m Krishna Awasthi, a passionate <b>Full Stack Java Developer</b>with a
          strong foundation in <b>Java, Spring Boot, ReactJS, and REST APIs.</b> As an
          <b>Oracle Certified Java Foundations Associate</b>, I specialize in designing
          and building scalable, secure, and user-centric applications.<br/>I have
          hands-on experience developing end-to-end projects such as an
          <b>E-Commerce platform, a Real-Time Chat Application, and an ML-powered Credit Card Fraud Detection system.</b> My expertise spans across <b>MySQL,MongoDB, and AWS cloud services</b>, enabling me to deliver efficient and production-ready solutions.<br/>I thrive on solving complex problems in Data Structures, Algorithms, and System Design, and I’m continuously exploring <b>microservices, Spring Security, and AI-powered applications</b> to expand my skill set.<br/>Beyond coding, I enjoy learning emerging
          technologies and experimenting with innovative ideas. My ultimate goal is to grow as a versatile Software Development Engineer (SDE) and
          contribute to building impactful applications that truly make a
          difference.
        </p>
      </div>
    </div>
  );
};
export default About;
