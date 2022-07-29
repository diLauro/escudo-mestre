import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../components/AuthRoute";
import { Character } from "../pages/Character";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Sheet } from "../pages/Sheet";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute>
            <Home />
          </AuthRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="login/:key" element={<Login />} />
      <Route
        path="character"
        element={
          <AuthRoute>
            <Character />
          </AuthRoute>
        }
      />
      <Route
        path="sheet"
        element={
          <AuthRoute>
            <Sheet />
          </AuthRoute>
        }
      />
    </Routes>
  );
}
