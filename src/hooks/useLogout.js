import { useUserContext } from "../context/UserContext";

const useLogout = () => {
  const { setUser } = useUserContext();

  const handlerLogout = (e) => {
    e.preventDefault();
    setUser("");
    localStorage.removeItem("user");
    window.location.replace("/");
  };

  return { handlerLogout };
};

export default useLogout;
