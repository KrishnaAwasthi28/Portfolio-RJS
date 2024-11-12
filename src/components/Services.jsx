const Services = () => {
  return (
    <div class="container px-4 py-5" id="custom-cards">
      <h2 class="pb-2 border-bottom">Services </h2>

      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col service">
          <div class="card" style={{ width: "20rem" }}>
            <img src="https://www.sectorlink.com/img/blog/web-devel-important.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Web Development</h5>
              <p class="card-text">
              Creating responsive, user-friendly websites with clean code and modern web technologies to bring your vision to life
              </p>
              
            </div>
          </div>
        </div>

        <div class="col service">
          <div class="card" style={{ width: "20rem" }}>
            <img src="https://latamrecruit.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGbGF0YW1yZWNydWl0LmNvbSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjA4JTJGSG93LXRvLUhpcmUtSmF2YS1EZXZlbG9wZXJzLmpwZyZjYWNoZU1hcmtlcj0xNzE5MTIzMzQwLTQ4ODYzJnRva2VuPTIzNWUxZjFlM2Y5YmMwNjE.q.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Java Development</h5>
              <p class="card-text">
              Building scalable and efficient Java applications tailored to meet your business needs with robust backend solutions.
              </p>
              
            </div>
          </div>
        </div>

        <div class="col service">
          <div class="card " style={{ width: "20rem" }}>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/11/07002655/Machine-Learning-Services-banner.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Machine Learning</h5>
              <p class="card-text">
              Designing intelligent machine learning solutions that transform data into actionable insights for optimized decision-making
              </p>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Services;
