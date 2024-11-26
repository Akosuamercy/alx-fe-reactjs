/* eslint-disable no-unused-vars */
import './App.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import { Routes  } from 'react-router-dom';

    function App() {
      return (
        
         <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="recipes/id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/edit" element={<EditRecipeForm />} />
          </Routes>
      )
    }

export default App