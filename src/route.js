import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="people-hub/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default AppRouter;
