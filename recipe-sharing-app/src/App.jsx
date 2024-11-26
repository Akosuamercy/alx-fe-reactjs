/* eslint-disable no-unused-vars */
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
