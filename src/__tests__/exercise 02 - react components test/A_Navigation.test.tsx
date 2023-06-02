import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";

describe('Home Page Navigation', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  it("Should render component with buttons", () => {
    // Arrange
    const aboutMeButton = screen.getByText("About Me");
    const settingsButton = screen.getByText("Settings");

    // Act

    // Assert
    expect(aboutMeButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();
  });

  it("Should navigate to about me page", () => {
    // Arrange
    const aboutMeButton = screen.getByText("About Me");

    // Act
    fireEvent.click(aboutMeButton);

    // Assert
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("Should navigate to settings page", () => {
    // Arrange
    const settingsButton = screen.getByText("Settings");

    // Act
    fireEvent.click(settingsButton);

    // Assert
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });
});