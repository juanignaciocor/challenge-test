import { render, screen } from "@testing-library/react";
import WrapperTest from "../../utils/WrapperTest";

import Login from "./index";

describe("Login Component", () => {
  it("Should render Login component", () => {
    render(
      <WrapperTest user={""}>
        <Login />
      </WrapperTest>
    );

    expect(screen.getByText(/Registrarse aqui/i)).toBeInTheDocument();
  });
});
