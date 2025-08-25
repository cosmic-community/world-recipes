import Link from 'next/link'
import { Category } from '@/types'

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No categories found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => {
        const categoryImage = category.metadata?.category_image

        return (
          <Link key={category.id} href={`/categories/${category.slug}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {categoryImage && (
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src={`${categoryImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                    alt={category.metadata?.category_name || category.title}
                    width="300"
                    height="200"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600">
                  {category.metadata?.category_name || category.title}
                </h3>
                
                {category.metadata?.description && (
                  <p className="text-gray-600 line-clamp-3">
                    {category.metadata.description}
                  </p>
                )}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}