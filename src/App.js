import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./views/Login";
import SignUp from "./views/SignUp";
import MainMenu from "./views/MainMenu";

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main-menu" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>

  );
}
