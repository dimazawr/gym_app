import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { GlobalContextProvider } from "../../GlobalContext";
import { FinallStep } from "./FinallStep";

const mockToLocalStorage = (mockState) => {
  localStorage.setItem("savedState", JSON.stringify(mockState));
};

describe("FinallStep", () => {
  test("Renders FinallStep component", () => {
    // mocking localStorage
    let mockState = { answer_one: "3", answer_two: "Strength" };
    mockToLocalStorage(mockState);
    // wrapping in context
    const wrapper = ({ children }) => (
      <GlobalContextProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </GlobalContextProvider>
    );
    render(<FinallStep />, { wrapper });
  });

  describe("Renders all child components correctly", () => {
    test("renders Heading Component", () => {
      // mocking localStorage
      let mockState = { answer_one: "3", answer_two: "Strength" };
      mockToLocalStorage(mockState);
      // wrapping in context
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<FinallStep />, { wrapper });
      getByText("Here is your program");
    });

    test("renders TrainingProgram component", () => {
      // mocking localStorage
      let mockState = { answer_one: "3", answer_two: "Strength" };
      mockToLocalStorage(mockState);
      // wrapping in context
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </GlobalContextProvider>
      );
      const { container } = render(<FinallStep />, { wrapper });
      const tables = container.querySelectorAll("table");
      expect(tables.length).toBe(3);
    });

    test('renders Button component with "Reset" value', () => {
    // mocking localStorage
      let mockState = { answer_one: "3", answer_two: "Strength" };
      mockToLocalStorage(mockState);
      // wrapping in context
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<FinallStep />, { wrapper });
      getByText('Reset');
    })
  });

  test('"Reset" button clears localStorage and redirects to GetStartedStep', () => {
        // mocking localStorage
        let mockState = { answer_one: "3", answer_two: "Strength" };
        mockToLocalStorage(mockState);
        // wrapping in context
        const wrapper = ({ children }) => (
          <GlobalContextProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </GlobalContextProvider>
        );
        const { getByText } = render(<FinallStep />, { wrapper });
        fireEvent.click(getByText('Reset'))
        expect(window.localStorage.getItem('savedState')).toEqual(null)
        expect(window.location.pathname).toEqual('/')
  })
});
