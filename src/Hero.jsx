import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Big mood trust fund intelligentsia craft beer. Vaporware keffiyeh
            four dollar toast, actually la croix vinyl man braid distillery roof
            party. Narwhal chillwave gochujang farm-to-table whatever blackbird
            spyplane tofu ennui lyft master cleanse mlkshk banjo. Venmo jawn
            tofu, tbh shaman pour-over four loko swag small batch.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
