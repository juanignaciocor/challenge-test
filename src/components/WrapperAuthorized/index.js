import { useUserContext } from "../../context/UserContext";
import { NAVEGATION_HOME } from "../../constants/navegation";

//TODO: Crearia un hook para las redirecciones ya que se repite codigo en muchos lados

const WrapperAuthorized = ({ children }) => {
  // La utilidad de este wrapper es que si no estamos auth , nos envie a la vista de login
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
