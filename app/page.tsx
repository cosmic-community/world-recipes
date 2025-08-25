import { getRecipes, getCategories } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import FeaturedRecipes from '@/components/FeaturedRecipes'
import CategoryGrid from '@/components/CategoryGrid'

export default async function HomePage() {
  const [recipes, categories] = await Promise.all([
    getRecipes(),
    getCategories()
  ])

  const featuredRecipes = recipes.slice(0, 3)

  return (
    <div>
      <Hero />
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Recipes</h2>
            <p className="text-lg text-gray-600">Discover our most popular dishes from around the world</p>
          </div>
          <FeaturedRecipes recipes={featuredRecipes} />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Cuisine</h2>
            <p className="text-lg text-gray-600">Explore authentic flavors from different culinary traditions</p>
          </div>
          <CategoryGrid categories={categories} />
        </div>
      </section>
    </div>
  )
}