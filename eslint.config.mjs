import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Configuration pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialisation de FlatCompat pour la compatibilité avec les anciennes configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    // Configuration recommandée par défaut
    js: { rules: {} },
    ts: { rules: {} }
  }
});

// Configuration ESLint principale
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",  // Règles de base pour Next.js
    "next/typescript"       // Support TypeScript pour Next.js
  ),
  
  // Vous pouvez ajouter des configurations personnalisées ici
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // Avertir plutôt qu'erreur pour 'any'
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];

export default eslintConfig;