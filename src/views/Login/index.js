import { NavLink } from "react-router-dom";
import FormUser from "../../components/Forms/FormUser";
import useUserLogin from "../../hooks/useUserLogin";

const Login = () => {
  const { handlerLoginUser } = useUserLogin();

  return (
    <section>
      <FormUser onSubmit={handlerLoginUser} />
      <span>
        <NavLink to={"/register"} exact>
          Registrarse aqui
        </NavLink>
      </span>
    </section>
  );
};

export default Login;
