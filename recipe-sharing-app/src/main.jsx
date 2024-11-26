/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider, } from 'react-router-dom'
import App from './App';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoritesList from './components/FavoritesList';

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
      </Routes>
    </BrowserRouter>

);
