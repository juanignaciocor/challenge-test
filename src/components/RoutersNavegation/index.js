import Home from "../../views/Home";
import { Routes, Route } from "react-router-dom";
import { NAVEGATION_HOME } from "../../constants/navegation";

const RoutersNavegation = () => {
  return (
    <Routes>
      <Route path={NAVEGATION_HOME} element={<Home />} />
    </Routes>
  );
};

export default RoutersNavegation;
