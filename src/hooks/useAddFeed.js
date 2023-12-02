import { rest } from "../config/axios";
import { useSnackbar } from "react-simple-snackbar";
import { useUserContext } from "../context/UserContext";

const useAddFeed = () => {
  const [openSnackbar] = useSnackbar();
  const { user } = useUserContext();

  const handlerAddFeed = async (url) => {
    try {
      const response = await rest.post(
        "/feeds/add",
        { url: url },
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        },
        {}
      );
      openSnackbar(`Felicitationes se agrego :${response.data.title}`);
    } catch (err) {
      openSnackbar(`Ups, ubo un error prueba mas tarde`);

    }
  };

  return {
    handlerAddFeed,
  };
};

export default useAddFeed;
