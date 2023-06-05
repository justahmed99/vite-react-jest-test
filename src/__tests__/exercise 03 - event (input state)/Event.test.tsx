import { render, screen, fireEvent } from "@testing-library/react"
import UserInput from "../../pages/user-input/UserInput"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("UserInput", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <UserInput />
      </BrowserRouter>
    );
  });

  it("Should render the page", () => {
    // Arrange
    const firstNameInput = screen.getByLabelText('First name:');
    const lastNameInput = screen.getByLabelText('Last name:');

    // Act

    // Assert
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
  });

  it("Should get full name output", () => {
    // Arrange
    const firstNameInput = screen.getByLabelText('First name:') as HTMLInputElement;
    const lastNameInput = screen.getByLabelText('Last name:') as HTMLInputElement;
    const firstName = "Ahmed";
    const lastName = "John";

    // Act
    fireEvent.change(firstNameInput, { target: { value: firstName } });
    fireEvent.change(lastNameInput, { target: { value: lastName } });

    // Assert
    expect(firstNameInput.value).toBe(firstName);
    expect(lastNameInput.value).toBe(lastName);

  });


})