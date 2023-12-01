import { useCallback } from "react";
import useFormUser from "../../../hooks/useFormUser";

// TODO: Agregaria validaciones para el input button, ya que puede enviar los datos vacios y generar el request
// le generaria una validacion para que si no tiene alguno de los dos valores requeridos este disabled y tambien agregue
// un label rojo abajo de los campos requeridos.

const FormUser = ({ onSubmit }) => {
  const { handlerChange, user } = useFormUser();

  const handlerSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(user);
    },
    [onSubmit, user]
  );

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handlerChange}
          value={user.username}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handlerChange}
          value={user.password}
        />
      </div>
      <input type="submit" value="Enviar" onClick={handlerSubmit} />
    </form>
  );
};

export default FormUser;
