/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'; 
import { useRecipeStore } from '../recipeStore'; 

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate(); 
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); 

  const handleDelete = () => {
    deleteRecipe(recipeId); 
    navigate('/recipes'); 
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;