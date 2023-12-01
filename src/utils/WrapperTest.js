import SnackbarProvider from "react-simple-snackbar";
import { UserContextProvider } from "../context/UserContext";
import { BrowserRouter } from "react-router-dom";

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
