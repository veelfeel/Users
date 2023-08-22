import "./App.css";
import { UserProvider } from "./context/userContext";
import Home from "./pages/Home";

function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

export default App;
