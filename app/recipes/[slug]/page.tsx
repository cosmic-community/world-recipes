// app/recipes/[slug]/page.tsx
import { getRecipe, getRecipes } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import RecipeDetail from '@/components/RecipeDetail'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function RecipePage({ params }: Props) {
  // IMPORTANT: In Next.js 15+, params are now Promises and MUST be awaited
  const { slug } = await params
  const recipe = await getRecipe(slug)

  if (!recipe) {
    notFound()
  }

  return <RecipeDetail recipe={recipe} />
}

export async function generateStaticParams() {
  const recipes = await getRecipes()
  
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const recipe = await getRecipe(slug)

  if (!recipe) {
    return {
      title: 'Recipe Not Found',
    }
  }

  return {
    title: `${recipe.metadata?.recipe_name || recipe.title} - World Recipes Kitchen`,
    description: recipe.metadata?.description || `Learn how to make ${recipe.title}`,
  }
}