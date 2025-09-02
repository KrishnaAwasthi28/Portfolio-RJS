import {useTypewriter} from 'react-simple-typewriter';


const Home = ({setSelectedTab}) => {
  const [typeEffect]=useTypewriter({
    words:['Krishna', 'A Coder','A Java Developer','A Full-Stack Developer'],
    typeSpeed:100,
    delaySpeed:60,
    loop:{},
  })
  return (
    <div class="container col-xxl-8 px-4 py-5 home">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="https://cdn.prod.website-files.com/644b6ab153ef61f3e0269d04/65ca6a00b5177a529b9a38f9_6564900380b182df62f86c9d_20943761%20(1).jpg"
            alt="Bootstrap Themes"
            width="600"
            height="500"
            loading="lazy"
            className='hero-img'
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            I'M <span>{typeEffect}</span>
          </h1>
          <p class="lead">
          A passionate Full Stack Developer with expertise in Java, ReactJS & modern web technologies
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-success btn-lg px-4 me-2 hire" >
            <a href="#" onClick={()=>setSelectedTab("Hire")}>Hire Me</a>
            </button>
            <button type="button" class="btn btn-primary btn-lg px-4 resume">
            <a href="RESUME_.pdf" download="Krishna_Awasthi_Resume.pdf">Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
