import Login from "../../views/Login";
import { Routes, Route } from "react-router-dom";
import {
  NAVEGATION_HOME,
  NAVEGATION_REGISTER,
  NAVEGATION_FEED,
  NAVEGATION_ARTICLE,
} from "../../constants/navegation";
import Register from "../../views/Register/Components/Register";
import Feed from "../../views/Feed";
import Articles from "../../views/Articles";
import WrapperAuthorized from "../WrapperAuthorized";

const RoutersNavegation = () => {
  return (
    <Routes>
      <Route path={NAVEGATION_HOME} element={<Login />} />
      <Route path={NAVEGATION_REGISTER} element={<Register />} />
      <Route
        path={NAVEGATION_FEED}
        element={
          <WrapperAuthorized>
            <Feed />
          </WrapperAuthorized>
        }
      />
      <Route
        path={NAVEGATION_ARTICLE}
        element={
          <WrapperAuthorized>
            <Articles />
          </WrapperAuthorized>
        }
      />
    </Routes>
  );
};

export default RoutersNavegation;
