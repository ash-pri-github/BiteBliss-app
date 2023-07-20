import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            Our food is special because of the diverse ingredients, skilled craftsmanship, cultural 
            significance, 
            and sustainability practices associated with it. 
            The blend of flavors, textures, and presentation create a memorable dining 
            experience. Recipes passed down generations connect us to our roots, while the
             story of food production emphasizes its quality and ethical value. Ultimately, our 
             food nourishes both our bodies and souls, transcending taste to reveal the beauty of 
             our world.
            </p>
            <p>
            Additionally, the story behind our food, from farm to fork, adds to its allure. 
            The sustainable and ethical practices employed in its production contribute to its
             exceptional quality. By supporting local farmers and embracing organic methods, we honor 
             the Earth's bounties and ensure a healthier future for ourselves and the planet.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
