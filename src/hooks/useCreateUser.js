import { rest } from "../config/axios";
import { NAVEGATION_FEED } from "../constants/navegation";
import { useSnackbar } from "react-simple-snackbar";

const useCreateUser = () => {
  const [openSnackbar] = useSnackbar();

  const handlerCreateUser = async (body) => {
    try {
      const response = await rest.post("/register", {
        username: body.username,
        password: body.password,
      });

      localStorage.setItem("user", response.data.access_token);
      window.location.replace(NAVEGATION_FEED);
    } catch (err) {
      openSnackbar(`Ups, ubo un error prueba mas tarde`);
    }
  };

  return {
    handlerCreateUser,
  };
};

export default useCreateUser;
