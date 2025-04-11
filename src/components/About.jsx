import aboutImage from "../assets/about.webp";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
        About
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <img src={aboutImage} alt="About L U X O R A" className="w-full h-auto" />
        <p className="text-lg lg:text-3xl font-light text-center max-w-5xl mx-auto mt-8">
          At <span className="font-semibold">LUXORA</span>, we believe your home should reflect your lifestyle, personality, and dreams. With years of experience in luxury home renovations, our team is passionate about transforming spaces into beautifully designed, functional environments.
          <br /><br />
          From modern kitchens and spa-like bathrooms to elegant living rooms and inviting outdoor areas, <span className="font-semibold">LUXORA</span> delivers timeless design, quality craftsmanship, and attention to detail in every project. Whether you're reimagining a single room or renovating your entire home, we work with you to bring your vision to life.
          <br /><br />
          We don’t just renovate spaces — we create experiences that elevate the way you live.
        </p>
      </div>
    </section>
  );
};

export default About;
