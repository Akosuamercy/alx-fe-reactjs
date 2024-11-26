/* eslint-disable no-undef */
import create from 'zustand'


const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

   
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

    updateRecipe: (recipeId, updatedData) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === recipeId ? { ...recipe, ...updatedData } : recipe
          ),
        })),

    setSearchTerm: (term) =>
        set(() => ({
            searchTerm: term,
        })),    

        addFavorite: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
  
     removeFavorite: (recipeId) =>
        set((state) => ({
         favorites: state.favorites.filter((id) => id !== recipeId),
      })),

      generateRecommendations: () =>
        set((state) => {
          const recommended = state.recipes.filter(
            (recipe) =>
              state.favorites.includes(recipe.id) && Math.random() > 0.5 
          );
          return { recommendations: recommended };
        }),
    }));

    (newRecipes) =>
        set(() => ({
          recipes: newRecipes,
        }))

export default useRecipeStore;
