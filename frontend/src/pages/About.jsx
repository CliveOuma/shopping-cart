import React from 'react'
import { Footer, Navbar } from "../components";


const About = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          we're passionate about connecting you with the best laptops that suit your needs.
          As technology enthusiasts ourselves, we understand the significance of having reliable,
          high-performance devices that seamlessly integrate into your lifestyle.
          Our commitment is simple: to offer a carefully curated selection of laptops from top brands,
          ensuring you get the latest technology and innovation at your fingertips.
          Whether you're a professional seeking power-packed performance,
          a student in need of a reliable study companion, or someone
          who simply appreciates cutting-edge gadgets, we've got you covered.
          Why choose us? Quality and affordability are at the core of our values.
          We work directly with reputable manufacturers to bring you laptops that meet our rigorous standards.
          Our user-friendly website makes it easy for you to browse, compare,
          and choose the perfect laptop for your requirements.
          We believe in transparency and strive to provide accurate product information and clear pricing.
          No gimmicks, just straightforward, honest deals. Plus,
          our dedicated customer support team is always ready to assist you,
          ensuring a smooth shopping experience from start to finish.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default About;