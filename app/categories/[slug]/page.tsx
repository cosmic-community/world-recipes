// app/categories/[slug]/page.tsx
import { getCategory, getRecipesByCategory, getCategories } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import RecipeGrid from '@/components/RecipeGrid'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: Props) {
  // IMPORTANT: In Next.js 15+, params are now Promises and MUST be awaited
  const { slug } = await params
  const [category, recipes] = await Promise.all([
    getCategory(slug),
    getRecipesByCategory(slug)
  ])

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category.metadata?.category_name || category.title}
          </h1>
          {category.metadata?.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {category.metadata.description}
            </p>
          )}
        </div>
        
        <RecipeGrid recipes={recipes} />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const categories = await getCategories()
  
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${category.metadata?.category_name || category.title} Recipes - World Recipes Kitchen`,
    description: category.metadata?.description || `Explore ${category.title} recipes from around the world`,
  }
}