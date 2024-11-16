import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div>
      
      <div className="content">
        <section className="hero">
          <h1>Welcome to Eco Case</h1>
          <p>Explore our research, team, and impact.</p>
        </section>
        <section id="about" className="section">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel lacus ut risus volutpat fermentum. 
            Vivamus consequat tortor et malesuada lacinia.
          </p>
        </section>
        <section id="research" className="section">
          <h2>Our Research</h2>
          <p>
            Quisque in risus erat. Donec lacinia ante nec mauris sollicitudin, vel aliquam ante sollicitudin. Proin sit amet ligula urna.
          </p>
        </section>
        <section id="team" className="section">
          <h2>Meet the Team</h2>
          <p>
            Sed euismod, lectus ac tristique cursus, libero purus viverra libero, eu tristique urna purus a augue. Integer ac velit at dui feugiat sodales.
          </p>
        </section>
        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>
            Aliquam erat volutpat. Etiam vel augue fringilla, efficitur enim in, vehicula dui. Aenean sit amet dolor sed purus gravida pretium at sit amet ligula.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
