import { Recipe } from '@/types'
import RecipeCard from '@/components/RecipeCard'

interface FeaturedRecipesProps {
  recipes: Recipe[]
}

export default function FeaturedRecipes({ recipes }: FeaturedRecipesProps) {
  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No featured recipes available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}