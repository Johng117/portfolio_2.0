import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

test("renders the footer text correctly", () => {
  render(<Footer />);
  const pElement = screen.getByText(/copyright/i);
  expect(pElement).toBeInTheDocument();
});
