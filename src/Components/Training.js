// Library
import React from "react";
// Css external
import "./Training.css";

//JSX
const Traning = () => {
  const trainings = [
    {
      title: "Web Development",
      description: "Learn how to develop dynamic, interactive websites.",
    },
    {
      title: "Graphic Design",
      description: "Master graphic design tools to create impactful visuals.",
    },
    {
      title: "Computer Network",
      description:
        "Acquire the skills needed to manage and configure computer networks.",
    },
    {
      title: "Microsoft Office",
      description:
        "Become an expert in Microsoft Office software such as Word, Excel, PowerPoint, etc.",
    },
  ];

  return (
    <div className="training-container">
      <h2>Our Courses</h2>
      <div className="training-list">
        {trainings.map((training, index) => (
          <div className="training-card" key={index}>
            <h3>{training.title}</h3>
            <p>{training.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traning;
