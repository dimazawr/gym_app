import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { GlobalContextProvider } from "../../GlobalContext";
import { DaysStep } from "./DaysStep";


describe("DaysStep", () => {
  test("renders DaysStep Component", () => {
    // necessary step
    const wrapper = ({ children }) => (
      <GlobalContextProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </GlobalContextProvider>
    );
    render(<DaysStep />, { wrapper });
  });

  describe("Renders all child components correctly", () => {
    test("renders Heading Component", () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<DaysStep />, { wrapper });
      getByText("Step 1");
    });

    test("renders TextBox Component", () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<DaysStep />, { wrapper });
      getByText(
        "How many days per week do you want to spend in a gym? Choose one of the following options."
      );
    });

    test("renders RadioGroup Component", () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<DaysStep />, { wrapper });
      getByText("2");
      getByText("3");
    });

    describe("Renders Button component", () => {
      test("with Next value", () => {
        const wrapper = ({ children }) => (
          <GlobalContextProvider>
            <MemoryRouter>{children}</MemoryRouter>
          </GlobalContextProvider>
        );
        const { getByText } = render(<DaysStep />, { wrapper });
        getByText("Next");
      });

      test("with Previous value", () => {
        const wrapper = ({ children }) => (
          <GlobalContextProvider>
            <MemoryRouter>{children}</MemoryRouter>
          </GlobalContextProvider>
        );
        const { getByText } = render(<DaysStep />, { wrapper });
        getByText("Previous");
      });
    });
  });

  describe("Buttons behaviour", () => {
    test("on click navigate to GetStartedStep", () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<DaysStep />, { wrapper });
      const leftClick = { button: 0 };
      fireEvent.click(getByText("Previous"), leftClick);
      expect(document.location.pathname).toEqual("/");
    });

    test('If radio is unchecked, "Next" button is disabled', () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </GlobalContextProvider>
      );
      const { getByText } = render(<DaysStep />, { wrapper });
      expect(getByText("Next")).toBeDisabled();
    });

    test('If radio is checked, "Next" button is enabled and navigates to TrainigTypeStep', () => {
      // necessary step
      const wrapper = ({ children }) => (
        <GlobalContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </GlobalContextProvider>
      );
      const { getByText, getByDisplayValue } = render(<DaysStep />, {
        wrapper,
      });
      fireEvent.click(getByDisplayValue("3"));
      expect(getByText("Next")).not.toBeDisabled();
      fireEvent.click(getByText("Next"));
      expect(document.location.pathname).toEqual("/step_2");
    });
  });
});
