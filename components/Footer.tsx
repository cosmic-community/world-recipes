import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">🍽️ World Recipes Kitchen</h3>
            <p className="text-gray-300 mb-4">
              Discover authentic recipes from around the world with professional chef contributors.
              From Mediterranean classics to Asian fusion, explore diverse culinary traditions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/recipes" className="text-gray-300 hover:text-white">All Recipes</Link></li>
              <li><Link href="/categories" className="text-gray-300 hover:text-white">Categories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/categories/mediterranean" className="text-gray-300 hover:text-white">Mediterranean</Link></li>
              <li><Link href="/categories/asian" className="text-gray-300 hover:text-white">Asian</Link></li>
              <li><Link href="/categories/italian" className="text-gray-300 hover:text-white">Italian</Link></li>
              <li><Link href="/categories/desserts" className="text-gray-300 hover:text-white">Desserts</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} World Recipes Kitchen. Powered by Cosmic.
          </p>
        </div>
      </div>
    </footer>
  )
}