import React from "react";


function Note(props) {
  return (
    <div className="note">
      <div className="cardHeading">
      <h1>{props.name}</h1>
      <p>{props.address}</p>
      </div>
    
      <p><img src="https://raw.githubusercontent.com/snehiljain34/images/9623f3fe030460c3047e760b86a5f917a6c7aeb9/time.svg"/>{props.from} to {props.to}</p>
      <p><span>Dose 1:</span> {props.available_capacity_dose1}</p>
      <p><span>Dose 2:</span> {props.available_capacity_dose2} <span>                    Age:</span> {props.age}</p>
      <div className="vaccineButton"><p><img src="https://raw.githubusercontent.com/snehiljain34/images/9623f3fe030460c3047e760b86a5f917a6c7aeb9/syringe.svg"/><span>{props.vaccine}</span></p></div>
    </div>
  );
}

export default Note;
