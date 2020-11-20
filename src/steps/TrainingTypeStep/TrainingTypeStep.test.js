import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { GlobalContextProvider } from "../../GlobalContext";
import { TrainingTypeStep } from "./TrainingTypeStep";

describe("TrainingTypeStep", () => {
  test("Renders TrainingTypeStep component", () => {
    // necessary step
    const wrapper = ({ children }) => (
      <GlobalContextProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </GlobalContextProvider>
    );
    render(<TrainingTypeStep />, { wrapper });
  });

  describe("Renders all child components correctly", () => {
    test("renders Heading Component", () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<TrainingTypeStep />, { wrapper });
      getByText("Step 2");
    });

    test("renders TextBox Component", () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<TrainingTypeStep />, { wrapper });
      getByText(
        "Would you like to focus you training on strength or muscle hypertrophy? Choose one of the following options."
      );
    });

    test("renders RadioGroup Component", () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<TrainingTypeStep />, { wrapper });
      getByText("Strength");
      getByText("Hypertrophy");
    });

    describe("Renders Button component", () => {
      test("with Next value", () => {
        const wrapper = ({ children }) => (
          <GlobalContextProvider>
            <MemoryRouter>{children}</MemoryRouter>
          </GlobalContextProvider>
        );
        const { getByText } = render(<TrainingTypeStep />, { wrapper });
        getByText("Next");
      });

      test("with Previous value", () => {
        const wrapper = ({ children }) => (
          <GlobalContextProvider>
            <MemoryRouter>{children}</MemoryRouter>
          </GlobalContextProvider>
        );
        const { getByText } = render(<TrainingTypeStep />, { wrapper });
        getByText("Previous");
      });
    });
  });

  describe("Buttons behaviour", () => {
    test("on click navigate to DaysStep", () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<TrainingTypeStep />, { wrapper });
      const leftClick = { button: 0 };
      fireEvent.click(getByText("Previous"), leftClick);
      expect(document.location.pathname).toEqual("/step_1");
    });

    test('If radio is unchecked, "Next" button is disabled', () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<TrainingTypeStep />, { wrapper });
      expect(getByText("Next")).toBeDisabled();
    });

    test('If radio is checked, "Next" button is enabled and navigates to FinallStep', () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </GlobalContextProvider>
      );
      const { getByText, getByDisplayValue } = render(<TrainingTypeStep />, {
        wrapper,
      });
      fireEvent.click(getByDisplayValue("Strength"));
      expect(getByText("Next")).not.toBeDisabled();
      fireEvent.click(getByText("Next"));
      expect(document.location.pathname).toEqual("/result");
    });
  });
});
