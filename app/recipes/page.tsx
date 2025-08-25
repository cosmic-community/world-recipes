import { getRecipes } from '@/lib/cosmic'
import RecipeGrid from '@/components/RecipeGrid'

export const metadata = {
  title: 'All Recipes - World Recipes Kitchen',
  description: 'Browse all recipes from our world cuisine collection',
}

export default async function RecipesPage() {
  const recipes = await getRecipes()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Recipes</h1>
          <p className="text-lg text-gray-600">Discover our complete collection of world cuisine recipes</p>
        </div>
        
        <RecipeGrid recipes={recipes} />
      </div>
    </div>
  )
}