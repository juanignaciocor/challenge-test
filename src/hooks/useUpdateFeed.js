import axios from "axios";
const useAddFeed = () => {
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
      console.log(err);
    }
  };

  return {
    handlerAddFeed,
  };
};

export default useAddFeed;
