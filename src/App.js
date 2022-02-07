import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./views/Login";
import SignUp from "./views/SignUp";
import MainMenu from "./views/MainMenu";
import NewInput from "./views/NewInput";
import NewOutput from "./views/NewOutput";

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/new-input" element={<NewInput />} />
        <Route path="/new-output" element={<NewOutput />} />
      </Routes>
    </BrowserRouter>
  );
}
