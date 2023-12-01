import { rest } from "../config/axios";
import { useSnackbar } from "react-simple-snackbar";
import { useUserContext } from "../context/UserContext";

const useRemoveFeed = () => {
  const [openSnackbar] = useSnackbar();
  const { user } = useUserContext();

  const handlerRemoveFeed = async (idFeed) => {
    try {
      const response = await rest.delete(
        `/feeds/${idFeed}`,
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        },
        {}
      );
      openSnackbar(`Felicitationes se agrego :${response.data.title}`);
    } catch (err) {
      // TODO : Podriamos devolver una error que nos muestre un snackbar y asi informarle al usuario
      console.log(err);
    }
  };

  return {
    handlerRemoveFeed,
  };
};

export default useRemoveFeed;
