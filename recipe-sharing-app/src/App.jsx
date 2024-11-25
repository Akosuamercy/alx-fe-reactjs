import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'

// @ts-ignore
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App

  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};


export default App
