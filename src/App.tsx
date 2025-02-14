import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import CocktailDetail from "./pages/CocktailDetail";
import Cocktails from "./pages/Cocktails";
import { Routes, Route } from "react-router";
import React from "react";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:idDrinks/:slug" element={<CocktailDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
