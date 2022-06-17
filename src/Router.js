import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Swap from "./pages/Swap";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/swap" element={<Swap />} />
    </Routes>
  );
}
