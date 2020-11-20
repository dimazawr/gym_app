import React from "react";
import programs from "../../programs_data";
import { TextBox } from "../TextBox/TextBox";
import { MapDataToTable } from "../MapDataToTable/MapDataToTable";

export const TrainingProgram = () => {
  let result;
  const valuesFromStorage = localStorage.getItem("savedState");
  let savedValues = JSON.parse(valuesFromStorage);

  if (savedValues.answer_one === "3") {
    // handling for the three days per week programs

    if (savedValues.answer_two === "Strength") {
      result = programs.find(({ name }) => name === "strength_long");
    } else {
      result = programs.find(({ name }) => name === "hypertrophy_long");
    }
  } else if (savedValues.answer_one === "2") {
    // handling for the two days per week programs

    if (savedValues.answer_two === "Strength") {
      result = programs.find(({ name }) => name === "strength_short");
    } else {
      result = programs.find(({ name }) => name === "hypertrophy_short");
    }
  }

  const description = result["desc"];
  const source = result["ref"];
  const program = MapDataToTable(result["days"]);

  return (
    <>
      <div className="container">
        <div className="row">{program}</div>
      </div>
      <div className="container">
        <TextBox text={description} />
        <p className="text-muted mt-3 mb-5">
          Some of the information above was taken from:{" "}
          <a href={source} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </p>
      </div>
    </>
  );
}
