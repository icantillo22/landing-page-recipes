import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/recipe/:id" element={ <RecipeDetail /> } />
      </Routes>
    </BrowserRouter>
  );
}