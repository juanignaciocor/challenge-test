import { useState } from "react";

function useFormUser() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handlerChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  return {
    handlerChange,
    user,
  };
}

export default useFormUser;
