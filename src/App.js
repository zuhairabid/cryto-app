import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SingleCoin from "./pages/SingleCoin";
import News from "./pages/News";

function App() {
  return (
    <div className="bg-[#14161A]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:id" element={<SingleCoin />} />
        <Route path="/news" element={<News />} />
      </Routes>
      {/* <Header />
      <HomePage /> */}
    </div>
  );
}

export default App;
