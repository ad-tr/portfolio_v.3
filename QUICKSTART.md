# Guide de démarrage rapide

## Installation

```bash
npm install
```

## Commandes disponibles

### Développement
```bash
npm run dev
```
Lance le serveur de développement sur http://localhost:3000

### Production
```bash
npm run build    # Compile le projet
npm start        # Lance le serveur de production
```

### Autres commandes
```bash
npm run lint     # Vérifie le code avec ESLint
```

## Structure des composants

### Composants UI réutilisables (`components/ui/`)
- **Button** - Boutons avec variants (primary, secondary, outline)
- **Card** - Cartes avec animations
- **Container** - Conteneur responsive
- **Section** - Sections de page
- **SectionTitle** - Titres de sections
- **Badge** - Badges pour tags

### Sections (`components/sections/`)
Toutes les sections principales du portfolio :
- Hero, About, Projects, Skills, Experience, Contact

## Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.ts` :
- `primary` : Bleu principal (#3B82F6)
- `secondary` : Violet secondaire (#6366F1)

### Contenu
Modifier le contenu directement dans les fichiers des sections :
- `components/sections/About.tsx` - Informations personnelles
- `components/sections/Projects.tsx` - Liste des projets
- `components/sections/Skills.tsx` - Compétences
- `components/sections/Experience.tsx` - Parcours
- `components/sections/Contact.tsx` - Coordonnées

### Métadonnées SEO
Modifier `app/layout.tsx` pour changer le titre, la description, etc.

## Tips

- Les animations Framer Motion sont déjà configurées
- Le responsive est géré automatiquement avec Tailwind
- Le smooth scroll est activé par défaut
- Les composants utilisent TypeScript pour la sécurité des types

## Problèmes courants

### Le serveur ne démarre pas
Vérifier que le port 3000 n'est pas déjà utilisé

### Erreurs de build
Supprimer `.next` et `node_modules` puis réinstaller :
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Support

Pour toute question ou problème, consulter la documentation de Next.js : https://nextjs.org/docs
