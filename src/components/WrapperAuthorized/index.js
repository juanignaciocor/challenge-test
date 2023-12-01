import { useUserContext } from "../../context/UserContext";
import { NAVEGATION_HOME } from "../../constants/navegation";

const WrapperAuthorized = ({ children }) => {
  const { user } = useUserContext();
  const redirectToLogin = (e) => {
    e.preventDefault();
    window.location.replace(NAVEGATION_HOME);
  };

  if (!user) {
    return (
      <div>
        <span>No se encuentra authorizado para esta seccion</span>
        <button onClick={redirectToLogin}>Volver al login</button>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default WrapperAuthorized;
