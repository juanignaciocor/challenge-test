import axios from "axios";
import { useSnackbar } from "react-simple-snackbar";

const useAddFeed = () => {
  const [openSnackbar] = useSnackbar();

  const handlerAddFeed = async (body) => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        username: body.username,
        password: body.password,
      });

      localStorage.setItem("user", response.data.access_token);
      // TODO: Redirigir a la vista a la vista principal , ya que tenemos el token para navegar
    } catch (err) {
      // TODO : Podriamos devolver una error que nos muestre un snackbar y asi informarle al usuario
      openSnackbar(`Ups, ubo un error prueba mas tarde`);
    }
  };

  return {
    handlerAddFeed,
  };
};

export default useAddFeed;
