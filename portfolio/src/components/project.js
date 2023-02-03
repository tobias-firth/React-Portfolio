import React from "react";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="SpongeBob"
          src= {props.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
