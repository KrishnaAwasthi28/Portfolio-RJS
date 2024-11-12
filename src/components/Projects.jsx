const Projects=()=>{
    return <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Projects</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <a href="https://github.com/KrishnaAwasthi28/Amazon-Clone" className="github-link">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('https://wallpapers.com/images/hd/amazon-e-commerce-company-csw7ypxppsqd7yyr.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Amazon Clone </h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WU0Emt19dyXiCPIuhVtxIFbqx13mkj54hA&s" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                <small></small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                <small></small>
              </li>
            </ul>
          </div>
        </div>
        </a>
      </div>

      <div class="col">
        <a href="https://github.com/KrishnaAwasthi28/Credit-Card-Fraud-Detection" className="github-link" >
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage:"url('https://cdn.prod.website-files.com/65e210a414fae2cb8054a9b4/65e210a414fae2cb8054a9b9_Fraud.webp')" ,backgroundSize:"cover",backgroundPosition:"center"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Credit Card Fraud Detection</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://www.shutterstock.com/image-vector/hacker-icon-spy-agent-security-260nw-1636538851.jpg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                <small></small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                <small></small>
              </li>
            </ul>
          </div>
        </div>
        </a>
      </div>

      <div class="col">
        <a href="https://github.com/KrishnaAwasthi28/Chat-Web-Application" className="github-link">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage:"url('https://img.freepik.com/free-vector/dialogue-chat-clouds-speech-bubble-icon-from-lines-triangles-particle-style-design-low-poly-technology-devices-people-communication-concept-blue-background_587448-471.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">End to End Chat App</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                <small></small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                <small></small>
              </li>
            </ul>
          </div>
        </div>
        </a>
      </div>
    </div>
  </div>
}
export default Projects;