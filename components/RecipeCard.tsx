import Link from 'next/link'
import { Recipe } from '@/types'

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const featuredImage = recipe.metadata?.featured_image
  const author = recipe.metadata?.author
  const category = recipe.metadata?.category
  const difficulty = recipe.metadata?.difficulty
  const prepTime = recipe.metadata?.prep_time
  const cookTime = recipe.metadata?.cook_time

  const totalTime = (prepTime || 0) + (cookTime || 0)

  return (
    <Link href={`/recipes/${recipe.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        {featuredImage && (
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <img
              src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={recipe.metadata?.recipe_name || recipe.title}
              width="300"
              height="200"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600">
            {recipe.metadata?.recipe_name || recipe.title}
          </h3>
          
          {recipe.metadata?.description && (
            <p className="text-gray-600 mb-4 line-clamp-2">
              {recipe.metadata.description}
            </p>
          )}
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            {totalTime > 0 && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {totalTime} min
              </span>
            )}
            
            {difficulty && (
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                difficulty.key === 'easy' ? 'bg-green-100 text-green-800' :
                difficulty.key === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {difficulty.value}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            {author && (
              <span className="text-sm text-gray-600">
                By {author.metadata?.name || author.title}
              </span>
            )}
            
            {category && (
              <span className="text-sm text-primary-600 font-medium">
                {category.metadata?.category_name || category.title}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}