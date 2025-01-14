// Library
import React from "react";

// Css external
import("./Services.css");

const Services = () => {
  const services = [
    {
      title: "Web Programming",
      description: "Custom development for websites and web applications",
    },
    {
      title: "Web Hosting",
      description:
        "High-performance hosting with options tailored to your needs",
    },
    {
      title: "Graphic Design",
      description: "Create unique designs for your brand or project",
    },
    {
      title: "Computer Network",
      description: "Installation and management of computer networks",
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
