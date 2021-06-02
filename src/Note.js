import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.address}</p>
      <p>
        {props.from} to {props.to}
      </p>
      <p>{props.available_capacity_dose1}</p>
      <p>{props.available_capacity_dose2}</p>
      <p>{props.vaccine}</p>
    </div>
  );
}

export default Note;
