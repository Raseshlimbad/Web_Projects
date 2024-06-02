import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Cources from "./courses/Cources";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Cources />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
