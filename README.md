# World Recipes Kitchen

![World Recipes Kitchen](https://imgix.cosmicjs.com/dc653800-81da-11f0-b0ac-f12686cb9ade-photo-1540420773420-3366772f4999-1756143744701.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern recipe website showcasing world cuisines with professional chef contributors. Browse authentic recipes from Mediterranean, Asian, Italian, and dessert categories with detailed cooking instructions and beautiful food photography.

## ✨ Features

- **Recipe Categories**: Browse by cuisine type (Mediterranean, Asian, Italian, Desserts)
- **Chef Profiles**: Professional chef authors with specialties and bios
- **Detailed Recipes**: Complete ingredients, instructions, cook times, and difficulty levels
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Rich Content**: HTML-formatted ingredients and instructions
- **Visual Appeal**: High-quality food photography with optimized images
- **Easy Navigation**: Intuitive category browsing and recipe discovery

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68aca007f01fd26965584601&clone_repository=68aca1bbf01fd26965584627)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a website for world food including recipes, authors, and categories"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Vercel** - Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Cosmic account with existing recipe content

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create `.env.local` file:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Recipes with Categories and Authors

```typescript
const response = await cosmic.objects
  .find({ type: 'recipes' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1); // Include related objects

const recipes = response.objects;
```

### Getting Recipe by Slug

```typescript
const response = await cosmic.objects.findOne({
  type: 'recipes',
  slug: recipeSlug
}).depth(1);

const recipe = response.object;
```

## 🔗 Cosmic CMS Integration

This application connects to your Cosmic bucket and uses:

- **Recipes** - Main content with ingredients, instructions, and metadata
- **Categories** - Cuisine classifications (Mediterranean, Asian, Italian, Desserts)
- **Authors** - Chef profiles with bios and specialties
- **Connected Objects** - Recipes link to authors and categories using object metafields

## 🚀 Deployment Options

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy automatically

### Netlify

1. Build the project: `bun run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables

### Environment Variables

Set these in your deployment platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key

<!-- README_END -->