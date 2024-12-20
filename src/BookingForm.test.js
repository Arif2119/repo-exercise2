import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import '@testing-library/jest-dom';s
test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={jest.fn()} />);
  const headingElement = screen.getByText("Book Your Table"); // Adjust text to match your component
  expect(headingElement).toBeInTheDocument();
});
