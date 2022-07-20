import { Route, Routes } from "react-router-dom";
import { Character } from "../pages/Character";
import { Login } from "../pages/Login";
import { Sheet } from "../pages/Sheet";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="login" element={<Login />} />
      <Route path="character" element={<Character />} />
      <Route path="sheet" element={<Sheet />} />
    </Routes>
  );
}
