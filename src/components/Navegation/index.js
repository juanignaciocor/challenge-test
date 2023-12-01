import {
  NAVEGATION_HOME,
  NAVEGATION_FEED,
  NAVEGATION_REGISTER,
} from "../../constants/navegation";
import useLogout from "../../hooks/useLogout";

import ItemLink from "./components/ItemLink";
import { useUserContext } from "../../context/UserContext";

// TODO: Llevaria esta constante a la carpeta constanst
// TODO: La validacion de la linea 39 la haria en alguna utils

const NAVEGATION_LIST = [
  {
    title: "login",
    url: NAVEGATION_HOME,
    showIfHaveUser: false,
  },
  {
    title: "registrate",
    url: NAVEGATION_REGISTER,
    showIfHaveUser: false,
  },
  {
    title: "feeds",
    url: NAVEGATION_FEED,
    showIfHaveUser: true,
  },
];

const Navegation = () => {
  const { handlerLogout } = useLogout();
  const { user } = useUserContext();

  return (
    <nav>
      {NAVEGATION_LIST.map((element) => {
        if (user && !element.showIfHaveUser) return null;
        return (
          <ItemLink
            title={element.title}
            key={element.title}
            url={element.url}
          />
        );
      })}
      {user ? <button onClick={(e) => handlerLogout(e)}>Logout</button> : null}
    </nav>
  );
};

export default Navegation;
