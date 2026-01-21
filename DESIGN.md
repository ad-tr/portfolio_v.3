# Design System - Minimal Brutalist AI

## Concept

Portfolio au design **Minimal Brutalist** avec une approche technique et puissante, mettant en avant l'expertise en IA à travers un design unique et mémorable.

## Caractéristiques principales

### 1. Typographie Massive
- **Titres XXL** : Font size responsive jusqu'à 12rem
- **Font principale** : Space Grotesk (géométrique, moderne)
- **Font mono** : JetBrains Mono (code, technique)
- **Letterspacing serré** : -0.05em pour impact visuel

### 2. Curseur Personnalisé
- Cercle bleu électrique qui suit la souris
- Mix blend mode pour effet de différence
- Expansion sur hover des éléments interactifs
- Halo lumineux qui suit le curseur (300px de diamètre)

### 3. Effets Visuels

#### Grille Background
- Grille subtile 50x50px en bleu électrique (3% opacité)
- Fixed position, couvre tout l'écran
- Ne gêne pas la lecture

#### Scan Line
- Ligne horizontale qui balaie l'écran verticalement
- Animation linéaire de 8 secondes
- Style terminal/matrice
- Opacité 30% pour subtilité

#### Glitch Effect
- Animation aléatoire toutes les 5 secondes
- Micro-déplacements de 2px
- Durée 300ms
- Appliqué au titre principal

#### Brutal Shadows
- Ombres décalées (8px/8px) en bleu électrique
- Augmentation au hover (12px/12px)
- Translation inverse au hover (-4px/-4px)
- Effet de lift 3D

#### Spotlight Effect
- Gradient radial qui suit la souris
- S'active au hover des cartes
- Révèle des détails
- Opacité douce

#### Electric Border
- Bordure 2px bleu électrique
- Animation de pulse (opacité 1 → 0.5 → 1)
- Double bordure avec effet de glow
- Durée 2 secondes

### 4. Palette de Couleurs

```css
Fond principal : #ffffff (blanc pur)
Texte principal : #0a0a0a (noir profond)
Accent électrique : #0066ff (bleu électrique)
Gris de fond : #fafafa (très léger)
```

### 5. Composants UI

#### BrutalistCard
- Background blanc
- Border 2px noire
- Brutal shadow avec effet 3D
- Spotlight effect intégré
- Animation fade-in au scroll

#### BrutalistButton
- 3 variants : primary, secondary, outline
- Border 2px
- Uppercase + tracking
- Hover : translation -4px/-4px
- Tap : translation reset

#### ElectricBorder
- Wrapper avec double bordure animée
- Border pulse effect
- Utilisé pour mettre en avant

#### SectionNumber
- Numéro massif (9rem) en mono
- Ligne horizontale qui s'étend
- Label en brutal text
- Animation slide-in from left

#### GlitchText
- Texte qui glitch périodiquement
- Animation toutes les 5 secondes
- Durée 300ms
- Micro-déplacements

### 6. Layout & Structure

#### Grid System
- Max-width : 1400px
- Padding horizontal : 8px mobile, 16px desktop
- Gap standard : 8px / 16px
- Min-height sections : 100vh

#### Spacing
- Sections : py-32
- Entre éléments : mb-8 / mb-16
- Gaps : 4px / 8px / 16px

### 7. Animations

#### Timings
- Duration rapide : 0.3s - 0.4s
- Duration standard : 0.6s
- Duration lente : 1s - 1.2s
- Easing : cubic-bezier(0.34, 1.56, 0.64, 1)

#### Triggers
- Scroll : `whileInView` avec `viewport={{ once: true }}`
- Hover : `whileHover`
- Tap : `whileTap`
- Initial : fade + translate

### 8. Responsive

#### Breakpoints
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

#### Adaptations
- Typographie : clamp() pour fluid sizing
- Grid : 1 col mobile → 2 cols desktop
- Padding réduit sur mobile
- Navigation hamburger < 768px

## Effets Uniques

### 1. Geometric Accents
- Carrés en rotation lente (20s)
- Bordure 2px bleu électrique
- Opacité 20%
- Positionnement aléatoire
- Parallax au scroll

### 2. Reveal Effect
- Clip-path animation
- Direction : left to right
- Durée : 1s
- Easing : cubic-bezier(0.77, 0, 0.175, 1)

### 3. Progress Bars
- Height 2px
- Background gris 200
- Fill bleu électrique
- Animation width 0% → 100%
- Durée 1s avec delay échelonné

## Best Practices

### Performance
- Utiliser `will-change` avec parcimonie
- Animations CSS plutôt que JS quand possible
- `viewport={{ once: true }}` pour économiser
- Lazy load images

### Accessibilité
- Maintenir contraste suffisant
- Texte sélectionnable
- Navigation keyboard
- ARIA labels sur éléments interactifs

### Maintenance
- Variables CSS pour couleurs
- Composants réutilisables
- Props cohérentes
- TypeScript strict

## Technologies

- **Next.js 15** : Framework
- **Framer Motion** : Animations
- **TailwindCSS** : Styling
- **TypeScript** : Type safety
- **Space Grotesk** : Typography
- **JetBrains Mono** : Code font

## Inspiration

- Brutalisme architecture
- Terminal/CLI aesthetics
- Minimal Swiss design
- Tech/AI interfaces
- Cyberpunk accents
