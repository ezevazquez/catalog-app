# Catalog App

A **Next.js 14** application for managing and displaying product catalogs with **Sanity.io** as the backend.

## 🚀 Features
- Dynamic catalog pages based on client and catalog ID.
- Product listing with categories, sizes, and images.
- Sanity.io integration for content management.
- ShadCN UI components with TailwindCSS.
- Multi-language support.
- Dark/Light mode toggle.

## 🛠️ Tech Stack
- **Frontend:** Next.js 14, React, TailwindCSS, ShadCN UI.
- **Backend:** Sanity.io (CMS).
- **Database:** Sanity dataset.
- **State Management:** React hooks.

## 📦 Installation
```sh
# Clone the repository
git clone https://github.com/your-repo/catalog-app.git
cd catalog-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## ⚙️ Configuration
Create a `.env.local` file in the root directory and add:
```ini
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
```

## 📁 Project Structure
```
/catalog-app
│── app/
│   ├── [client]/[catalogId]/page.tsx  # Catalog page
│   ├── studio/  # Sanity Studio
│── components/
│   ├── catalogs/  # Catalog-related components
│   ├── products/  # Product components
│── lib/
│   ├── queries/  # Sanity queries
│── sanity/
│   ├── schemaTypes/  # Schema definitions
│── public/
│── styles/
│── next.config.mjs
│── tailwind.config.ts
│── package.json
│── README.md
```
