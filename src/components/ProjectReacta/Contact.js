import React from "react";
import "./Contact.css";
import Navbar from "./navbar";


export const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-lg text-white font-bold ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md p-4 ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => <div>{children}</div>;


const Homepage = () => {
  return (
    <div className="homepage">
              <Navbar />

      
      {/* Hero Section */}
      <section className="hero-section">
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration:
           0.8 }}
        > */}
          <h1 className="hero-title">Coding Made Fun for Kids!</h1>
          <h4 className="hero-text">
            We teach children aged 7-14 the fundamentals of coding in an
            engaging and playful way.
          </h4>
          <Button className="cta-button">Get Started</Button>
        {/* </motion.div> */}
      </section>

      {/* Image Section */}
      <section className="image-section">
        <img src="img.kids.webp" alt="تعليم البرمجة للأطفال 1" className="kids-image" />
        <img src="img.shcool.webp" alt="تعليم البرمجة للأطفال 2" className="kids-image" />
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">About Us</h2>
        <h5 className="section-text">
          At Junior Dev Academy, we believe every child has the potential to
          become a creator of technology. Our courses are designed to spark
          curiosity and build confidence in young learners.
        </h5>
      </section>
    </div>
  );
};

export default Homepage;