import create from 'zustand'

// eslint-disable-next-line no-unused-vars
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

  setRecipes: (recipes) => set({ recipes })
}));