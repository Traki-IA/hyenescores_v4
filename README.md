# 🏆 HyeneScores v4 - Graphite Frost Premium

> Application premium de gestion de ligue fantasy football avec design Graphite Frost

## 🎨 Design System

**Palette Graphite Frost** - Style premium inspiré Apple/Samsung :
- Fond noir pur (#000000)
- Cartes graphite avec dégradés subtils (#181d23 → #0f1318)
- Accents cyan doux (#b8d8e8)
- Ombres sophistiquées et borders délicates
- Format compact sans scroll

## 📱 Pages

### 1. Classement (/)
Tableau compact avec toutes les statistiques d'équipe :
- Position avec badges colorés
- Victoires-Nuls-Défaites
- Buts Pour-Buts Contre
- Différence de buts
- Caviste en footer

### 2. Match (/match)
Gestion des matchs de championnat :
- Sélecteurs d'équipes visuels
- Saisie scores
- Filter bar (Championnat, Saison, Journée, Import)
- Équipe exempte

### 3. Palmarès (/palmares)
Historique des champions :
- Filter bar 5 championnats (🏆 🇫🇷 🇪🇸 🇮🇹 🏴󠁧󠁢󠁥󠁮󠁧󠁿)
- Liste champions par saison
- Points totaux

### 4. Panthéon (/pantheon)
Classement historique :
- Tableau 8 colonnes
- Titres par championnat
- Total global

## 🚀 Installation

```bash
# Clone le repo
git clone https://github.com/Traki-IA/hyenescores_v4.git
cd hyenescores_v4

# Install dependencies
npm install

# Dev server
npm run dev

# Build
npm run build
```

## 📦 Déploiement Vercel

1. Connecte ton compte GitHub à Vercel
2. Importe le repo `hyenescores_v4`
3. Vercel détecte automatiquement Vite
4. Deploy !

**Auto-deploy** : Chaque push sur `main` déclenche un déploiement automatique.

## 🗂️ Structure

```
hyenescores_v4/
├── src/
│   ├── components/
│   │   └── BottomNav.tsx      # Navigation bottom
│   ├── pages/
│   │   ├── Index.tsx          # Classement
│   │   ├── Match.tsx          # Match
│   │   ├── Palmares.tsx       # Palmarès
│   │   └── Pantheon.tsx       # Panthéon
│   ├── App.tsx                # Router
│   ├── main.tsx               # Entry point
│   └── index.css              # Design system
├── package.json
├── vite.config.ts
└── vercel.json                # Config Vercel
```

## 📝 Notes Techniques

- **Framework** : React 18 + TypeScript
- **Build** : Vite
- **Routing** : React Router v6
- **Styling** : Pure CSS (Graphite Frost)
- **Mobile-first** : Optimisé 390px viewport
- **Données** : Fictives (à remplacer via Supabase)

## 🎯 Prochaines Étapes

- [ ] Connexion Supabase pour données réelles
- [ ] Système d'authentification
- [ ] Gestion matchs interactive
- [ ] Export/Import CSV
- [ ] Statistiques avancées

## 📄 License

Privé - © 2026 Traknar

---

**Version** : 4.0.0  
**Design** : Graphite Frost Premium  
**Status** : ✅ Prêt pour production
