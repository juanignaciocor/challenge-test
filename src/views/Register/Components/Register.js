import FormUser from "../../../components/Forms/FormUser";
import useCreateUser from "../../../hooks/useCreateUser";
const Register = () => {
  const { handlerCreateUser } = useCreateUser();
  return <FormUser onSubmit={handlerCreateUser} />;
};

export default Register;
