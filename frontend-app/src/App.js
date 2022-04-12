import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import PrivateRoutes from "./Components/PrivateRoutes";
import { AuthProvider } from "./Context/AuthContext";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";



function App() {
  return (
    <div className="App">

      <center>

        <AuthProvider>

          <Header />
          <br /><br />
          <Routes>
            <Route index element={
              <PrivateRoutes>
                <HomePage />
              </PrivateRoutes>
            } />
            <Route path='/login' element={<LoginPage />} />
          </Routes>

        </AuthProvider>
      </center>

    </div>
  );
}

export default App;
