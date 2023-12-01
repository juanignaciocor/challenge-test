import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from "./index";

describe("Home Component", () => {
  it("Should render home component", () => {
    render(<Home />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
