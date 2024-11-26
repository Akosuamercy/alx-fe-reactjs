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

    setSearchTerm: (term) =>
        set(() => ({
            searchTerm: term,
        })),    

        addFavorite: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
  
     removeFavorite: (recipeId) =>
        set((state) => ({
         favorites: state.favorites.filter((id) => id !== recipeId),
      })),
  

  setRecipes: (recipes) => set({ recipes })
}));