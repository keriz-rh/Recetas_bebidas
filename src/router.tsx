import { BrowserRouter, Routes, Route } from "react-router-dom";import MainLayout from "./layouts/MainLayout";
import IndexPage from "./views/Index";
import FavoritesPage from "./views/Favorites";
import GenerateAI from "./views/GenerateAI";

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<IndexPage />} index /> 
                <Route path="/favorites" element={<FavoritesPage />} /> 
                <Route path="/generate" element={<GenerateAI />} /> 
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
