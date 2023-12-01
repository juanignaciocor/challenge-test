import "./App.css";
import Navegation from "./components/Navegation";
import RouterNavegation from "./components/RoutersNavegation";
import { UserContextProvider } from "./context/UserContext";
import SnackbarProvider from "react-simple-snackbar";

function App() {
  const localStorageUser = localStorage.getItem("user");
  // Agregaria un wrapper de ErrorBoundary para todos los errores que tengamos.
  return (
    <SnackbarProvider>
      <UserContextProvider storageUser={localStorageUser}>
        <div className="App">
          <Navegation />

          <RouterNavegation />
        </div>
      </UserContextProvider>
    </SnackbarProvider>
  );
}

export default App;
