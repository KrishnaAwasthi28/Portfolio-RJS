import { FcAbout } from "react-icons/fc";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div class="container my-5 ">
      <div class="p-5 text-center bg-body-tertiary rounded-3 about">
        <h1 class="text-body-emphasis">
          About <FcAbout />{" "}
        </h1>
        <p class="col-lg-8 mx-auto fs-5 text-muted ">
          Hi, I'm Krishna Awasthi, a passionate coder and web developer
          currently in my 3rd year of pursuing a <b>Bachelor of Technology</b> in
          Computer Science and Engineering at <b>VIT Bhopal University</b>. With a
          strong foundation in <b>Java, C++, and Python</b>, I have developed a keen
          interest in machine learning and its applications. My journey in web
          development has been both exciting and fulfilling. I have successfully
          completed several projects, including an end-to-end chatting website
          that showcases my ability to create dynamic andinteractive web
          applications. My expertise in modern web development technologies
          allows me to build user-friendly and efficient websites thatcater to
          various needs. As a dedicated learner and problem-solver, I
          continuously seek new challenges and opportunities to enhance my
          skills. I am eager tocontribute to innovative projects and collaborate
          with like-mindedindividuals in the tech community. <br /> Thank you for
          visiting my portfolio. Feel free to explore my projects andget in
          touch if you would like to know more about my work or discusspotential
          collaborations.
        </p>
        
      </div>
    </div>
  );
};
export default About;
