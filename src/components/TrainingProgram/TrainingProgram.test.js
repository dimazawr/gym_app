import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TrainingProgram } from "./TrainingProgram";
import { programs_data } from "../../programs_data";


const strengthProgram = programs_data.find(({ name }) => name === "strength_long");



const mockToLocalStorage = (mockState) => {
  localStorage.setItem("savedState", JSON.stringify(mockState));
};

describe("TrainingProgram", () => {
  test("renders TrainingProgram component with values from localStorage", () => {
    let mockState = { answer_one: "3", answer_two: "Strength" };
    mockToLocalStorage(mockState);
    render(<TrainingProgram />);
  });

  describe("Renders correct amount of training days(tables)", () => {
    test("two days = two tables", () => {
      let mockState = { answer_one: "2", answer_two: "Strength" };
      mockToLocalStorage(mockState);
      const { container } = render(<TrainingProgram />);
      const tables = container.querySelectorAll("table");
      expect(tables.length).toBe(2);
    });

    test("three days = three tables", () => {
      let mockState = { answer_one: "3", answer_two: "Strength" };
      mockToLocalStorage(mockState);
      const { container } = render(<TrainingProgram />);
      const tables = container.querySelectorAll("table");
      expect(tables.length).toBe(3);
    });
  });

  describe("Renders correct program type", () => {
    test('Renders "Strength" program', () => {
      let mockState = { answer_one: "3", answer_two: "Strength" };
      mockToLocalStorage(mockState);
      const { getByText } = render(<TrainingProgram />);
      getByText(strengthProgram['desc']);
    });

    test('Renders "Hypertrophy" program', () => {
      let mockState = { answer_one: "3", answer_two: "Hypertrophy" };
      mockToLocalStorage(mockState);
      const { getByText } = render(<TrainingProgram />);
      // for some reason the text from the programs_data doesn't work in here.. 
      getByText('"To sum up the key principles for hypertrophy training; you must progressively overload the muscles in training by increasing volume and/or density, and support your training with a caloric surplus; adequate protein and carbs; and maximize sleep, while minimizing stress, to aid recovery." P.S. The Hypertrophy program is made up by the author of this app and based on his own experience. Do it at your own risk... *NG = Narrow Grip, **WG = Wide Grip');
    });
  });
});
