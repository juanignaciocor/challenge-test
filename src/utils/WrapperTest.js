import SnackbarProvider from "react-simple-snackbar";
import { UserContextProvider } from "../context/UserContext";
import { BrowserRouter } from "react-router-dom";

// La idea de este wrapper es usar todos los contextos que son necesarios para replicar un caso de uso

const WrapperTest = ({ children, user }) => {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <UserContextProvider storageUser={user}>{children}</UserContextProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
};

export default WrapperTest;
