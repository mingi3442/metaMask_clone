import React from "react";
import { useObserver } from "mobx-react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Swap from "./pages/Swap";

export default function Router() {
  return useObserver(() => (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/swap" element={<Swap />} />
    </Routes>
  ));
}
