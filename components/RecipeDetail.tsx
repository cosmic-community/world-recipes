import Link from 'next/link'
import { Recipe } from '@/types'

interface RecipeDetailProps {
  recipe: Recipe
}

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  const featuredImage = recipe.metadata?.featured_image
  const author = recipe.metadata?.author
  const category = recipe.metadata?.category
  const difficulty = recipe.metadata?.difficulty
  const prepTime = recipe.metadata?.prep_time
  const cookTime = recipe.metadata?.cook_time
  const servings = recipe.metadata?.servings
  const ingredients = recipe.metadata?.ingredients
  const instructions = recipe.metadata?.instructions

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      {featuredImage && (
        <div className="w-full h-96 bg-gray-200 overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={recipe.metadata?.recipe_name || recipe.title}
            width="1200"
            height="400"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Recipe Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/recipes" className="hover:text-primary-600">Recipes</Link>
            {category && (
              <>
                <span>/</span>
                <Link 
                  href={`/categories/${category.slug}`} 
                  className="hover:text-primary-600"
                >
                  {category.metadata?.category_name || category.title}
                </Link>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {recipe.metadata?.recipe_name || recipe.title}
          </h1>

          {recipe.metadata?.description && (
            <p className="text-xl text-gray-600 mb-6">
              {recipe.metadata.description}
            </p>
          )}

          {/* Recipe Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            {author && (
              <div className="flex items-center gap-2">
                {author.metadata?.profile_photo && (
                  <img
                    src={`${author.metadata.profile_photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={author.metadata?.name || author.title}
                    width="40"
                    height="40"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-medium text-gray-900">
                    {author.metadata?.name || author.title}
                  </p>
                  {author.metadata?.specialty_cuisines && (
                    <p className="text-gray-600 text-xs">
                      {author.metadata.specialty_cuisines}
                    </p>
                  )}
                </div>
              </div>
            )}

            {difficulty && (
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                difficulty.key === 'easy' ? 'bg-green-100 text-green-800' :
                difficulty.key === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {difficulty.value}
              </span>
            )}

            {prepTime && (
              <div className="flex items-center gap-1 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Prep: {prepTime} min
              </div>
            )}

            {cookTime && (
              <div className="flex items-center gap-1 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                Cook: {cookTime} min
              </div>
            )}

            {servings && (
              <div className="flex items-center gap-1 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Serves {servings}
              </div>
            )}
          </div>
        </div>

        {/* Recipe Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
              {ingredients ? (
                <div className="recipe-content" dangerouslySetInnerHTML={{ __html: ingredients }} />
              ) : (
                <p className="text-gray-600">No ingredients listed.</p>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
            {instructions ? (
              <div className="recipe-content" dangerouslySetInnerHTML={{ __html: instructions }} />
            ) : (
              <p className="text-gray-600">No instructions provided.</p>
            )}
          </div>
        </div>

        {/* Author Bio */}
        {author && author.metadata?.bio && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About the Chef</h3>
            <div className="flex items-start gap-4">
              {author.metadata.profile_photo && (
                <img
                  src={`${author.metadata.profile_photo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                  alt={author.metadata?.name || author.title}
                  width="80"
                  height="80"
                  className="w-20 h-20 rounded-full object-cover"
                />
              )}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {author.metadata?.name || author.title}
                </h4>
                <p className="text-gray-600 mb-2">{author.metadata.bio}</p>
                {author.metadata.specialty_cuisines && (
                  <p className="text-sm text-primary-600 font-medium">
                    Specialties: {author.metadata.specialty_cuisines}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}