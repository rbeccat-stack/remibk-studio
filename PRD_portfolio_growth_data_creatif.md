# PRD — Portfolio one-page Growth / Data / Créatif

## 1. Objectif du projet

Créer un **site portfolio one-page en français** pour un profil hybride **Growth / Data / Créatif**.

Le site doit inspirer confiance, montrer la polyvalence du profil, présenter des projets concrets, expliquer la méthode de travail, afficher la stack utilisée, répondre aux questions fréquentes et permettre une prise de contact simple.

Le rendu doit être proche de la capture fournie : chaleureux, éditorial, artisanal, structuré en cartes, avec un fond crème, des accents terracotta et vert sauge, des bordures visibles mais fines, des coins arrondis et une mise en page respirante.

Le site ne doit pas ressembler à un template SaaS froid, corporate ou trop tech. Il doit évoquer un profil autonome, créatif, précis, orienté résultats.

---

## 2. Stack technique attendue

Utiliser une stack simple, robuste et compatible avec Vercel :

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **React**
- Déploiement prévu sur **Vercel**
- Versioning via **GitHub**
- Site statique ou quasi statique, sans backend obligatoire
- Formulaire contact fonctionnel au minimum côté front, avec possibilité d’intégrer plus tard Resend, Formspree, Airtable, Notion ou autre outil

Le projet doit être proprement organisé pour permettre l’amélioration continue par commits GitHub et déploiement automatique Vercel.

---

## 3. Contraintes éditoriales importantes

Le site doit inclure uniquement ces sections, dans cet ordre :

1. Hero
2. Bandeau défilant
3. Ce que j’apporte
4. Mes projets
5. Comment je travaille
6. Stack technique
7. FAQ
8. À propos
9. Contact

Ne pas inclure :

- Section tarifs
- Section devis
- Témoignages clients
- Logos clients
- Tableaux de pricing
- Promesses exagérées du type “x10 ton business”

---

## 4. Direction artistique

### Ambiance générale

Créer une interface :

- chaleureuse
- artisanale
- premium mais accessible
- éditoriale
- structurée
- avec une touche créative
- orientée portfolio personnel, pas agence

S’inspirer fortement de la capture :

- fond beige/crème
- cartes bordées
- sections bien séparées
- titres avec point coloré
- badges pill
- CTA arrondis
- alternance vert sauge / terracotta
- grille discrète ou texture très légère possible

---

## 5. Palette de couleurs

Utiliser des variables CSS dans `globals.css`.

Palette recommandée :

```css
--background: #F5EBCF;
--background-soft: #F9F0D8;
--card: #E6CBAA;
--card-light: #F2DFC2;

--text: #241A12;
--muted: #6D5A47;

--terracotta: #C75B2A;
--terracotta-dark: #9E3F1E;

--sage: #3E7562;
--sage-dark: #285444;

--purple-soft: #8E5BA6;

--border-dark: #2B1A12;
```

Le fond ne doit jamais être blanc pur.  
Le noir pur est à éviter sauf pour les bordures très fines.  
Les accents terracotta et vert sauge doivent être utilisés en alternance.

---

## 6. Typographie

Utiliser une combinaison élégante :

- Titres : serif ou sans-serif très marquée, bold
- Texte courant : sans-serif lisible, sobre
- Chiffres outline : très grands, fins, en contour ou faible opacité

Suggestion :

- `Inter` ou `Manrope` pour le texte
- `Fraunces`, `DM Serif Display`, `Instrument Serif` ou équivalent pour les titres

Les titres doivent avoir une présence forte, mais rester lisibles.

---

## 7. Layout global

### Structure

Créer une page unique avec ancres :

- `#accueil`
- `#apports`
- `#projets`
- `#methode`
- `#stack`
- `#faq`
- `#apropos`
- `#contact`

Largeur maximale du contenu :

```css
max-width: 1120px;
```

Marges latérales :

- desktop : `24px`
- mobile : `20px`

Espacement vertical recommandé :

- entre sections : `96px` desktop
- entre sections : `64px` mobile

---

## 8. Header

Créer un header sticky ou simple en haut de page.

Contenu :

- Logo texte : `Prénom Nom`
- Sous-texte optionnel : `Growth • Data • Créatif`
- Navigation :
  - Apports
  - Projets
  - Méthode
  - À propos
  - Contact
- Bouton CTA : `Me contacter`

Style :

- fond transparent ou beige légèrement translucide
- bordure inférieure très discrète
- nav compacte
- bouton terracotta ou vert sauge
- sur mobile : nav simplifiée, bouton visible ou menu burger simple

---

## 9. Section Hero

### Objectif

Présenter clairement le positionnement en moins de 5 secondes.

### Contenu

Titre sur 2 lignes :

```text
Je transforme les idées
en systèmes qui grandissent.
```

Le mot `grandissent` doit être en couleur accent terracotta ou vert sauge.

Sous-titre :

```text
Profil hybride Growth, Data & Créatif : j’aide les projets ambitieux à mieux comprendre leurs utilisateurs, tester plus vite, automatiser ce qui freine et raconter ce qui fait vendre.
```

Badge pill :

```text
Disponible pour nouveaux projets
```

CTA :

- Bouton plein : `Discuter du projet`
- Bouton outline : `Voir mes projets`

Ajouter une carte à droite sur desktop, inspirée de la capture, qui résume le profil.

Carte hero :

Titre :

```text
Ce que je combine
```

Checklist :

- Growth experiments
- Analyse data & dashboards
- Automatisation no-code / IA
- Création de contenu & storytelling

Mini-footer dans la carte :

- `4+ ans d’expérience`
- `18 projets lancés`
- `34 automatisations créées`

Style :

- grille 2 colonnes desktop
- une colonne mobile
- grande hauteur hero mais pas plein écran obligatoire
- fond avec très légère grille décorative possible
- carte bordée terracotta
- ombre très légère ou aucune

---

## 10. Bandeau défilant

Juste après le hero.

Créer un marquee horizontal en boucle.

Texte :

```text
GROWTH STRATEGY — DATA ANALYSIS — CREATIVE OPS — AUTOMATION — DASHBOARDS — CONTENT SYSTEMS — IA & NO-CODE — EXPÉRIMENTATION — ACQUISITION — CRM — FUNNELS —
```

Style :

- fond légèrement plus foncé que le background
- texte uppercase
- espacement large entre mots
- animation lente, fluide
- pause au hover si simple à faire
- éviter une animation agressive

---

## 11. Section “Ce que j’apporte”

Titre avec point coloré + mot souligné :

```text
Ce que j’apporte
```

Sous-titre :

```text
Un profil transverse pour relier stratégie, données, création et exécution sans multiplier les silos.
```

Créer 3 cartes.

### Carte 1

Icône : graphique, flèche, cible ou spark

Titre :

```text
Clarifier la croissance
```

Puces :

- Identifier les bons leviers d’acquisition
- Structurer les hypothèses à tester
- Prioriser les actions à impact réel

Bordure : terracotta

### Carte 2

Icône : database, chart ou table

Titre :

```text
Faire parler les données
```

Puces :

- Construire des dashboards lisibles
- Suivre les bons indicateurs
- Transformer les insights en décisions

Bordure : vert sauge

### Carte 3

Icône : plume, étoile, brush ou lightning

Titre :

```text
Créer des systèmes utiles
```

Puces :

- Automatiser les tâches répétitives
- Produire du contenu plus efficacement
- Aligner message, audience et canal

Bordure : terracotta ou violet doux

---

## 12. Section “Mes projets”

Titre :

```text
Mes projets
```

Sous-titre :

```text
Une sélection de projets où la stratégie, la donnée et la création se rencontrent.
```

Créer une grille de cards.  
Desktop : 2 colonnes.  
Mobile : 1 colonne.

Chaque card contient :

- icône
- titre
- courte description
- 3 à 4 points clés
- lien `Voir le projet →`

Les cartes doivent alterner les bordures terracotta et vert sauge.

### Projet 1

Titre :

```text
Dashboard Growth & Acquisition
```

Description :

```text
Conception d’un tableau de bord pour suivre les canaux d’acquisition, les conversions et les signaux de rétention.
```

Points :

- Tracking des sources et campagnes
- Visualisation des conversions
- Lecture claire des coûts et performances
- Recommandations d’optimisation

Lien :

```text
Voir le projet →
```

### Projet 2

Titre :

```text
Système de contenu IA + Notion
```

Description :

```text
Création d’un workflow éditorial pour passer plus vite de l’idée au contenu publié.
```

Points :

- Base d’idées centralisée
- Templates de briefs et scripts
- Automatisation des étapes répétitives
- Calendrier éditorial actionnable

### Projet 3

Titre :

```text
Refonte de funnel d’inscription
```

Description :

```text
Analyse et amélioration d’un parcours d’inscription pour réduire la friction et augmenter l’activation.
```

Points :

- Audit du parcours utilisateur
- Identification des points de friction
- Recommandations UX et copywriting
- Plan de tests A/B

### Projet 4

Titre :

```text
Playbook d’expérimentation Growth
```

Description :

```text
Mise en place d’un système simple pour cadrer, prioriser et apprendre des expérimentations.
```

Points :

- Backlog d’expériences
- Score ICE ou RICE
- Documentation des apprentissages
- Rituels de suivi hebdomadaire

---

## 13. Section “Comment je travaille”

Badge pill :

```text
Comment ça marche
```

Titre :

```text
Une méthode simple, rapide et lisible.
```

Sous-titre :

```text
Chaque mission suit un cadre clair pour avancer sans flou, sans tunnel et sans livrables inutiles.
```

Créer 4 cartes horizontales ou grille 4 colonnes desktop.

Chaque carte contient un grand numéro outline :

- 01
- 02
- 03
- 04

### Étape 01

Titre :

```text
Comprendre
```

Description :

```text
On clarifie le contexte, les objectifs, les contraintes et les vrais problèmes à résoudre.
```

### Étape 02

Titre :

```text
Structurer
```

Description :

```text
Je transforme les idées en plan d’action, hypothèses, priorités et livrables concrets.
```

### Étape 03

Titre :

```text
Produire
```

Description :

```text
Je crée, automatise, analyse ou optimise avec des points de validation réguliers.
```

### Étape 04

Titre :

```text
Mesurer
```

Description :

```text
On observe les résultats, on apprend, puis on améliore ce qui mérite de l’être.
```

Style :

- grand chiffre en outline terracotta
- carte beige plus foncée
- bordure fine
- micro-label au-dessus possible : `Étape`

---

## 14. Section Stack technique

Créer un bandeau de logos ou de noms d’outils en niveaux de gris.

Outils à afficher :

- Notion
- Airtable
- Make
- Zapier
- n8n
- GA4
- Looker Studio
- BigQuery
- SQL
- Python
- Figma
- Webflow
- Framer
- ChatGPT / Claude
- Vercel
- GitHub

Les logos peuvent être remplacés par des badges texte si l’installation de logos SVG est trop lourde.

Style :

- grille ou bandeau horizontal
- grayscale
- opacité réduite
- au hover : opacité pleine, légère montée
- ne pas utiliser de couleurs criardes

---

## 15. Section FAQ

Badge pill :

```text
FAQ
```

Titre :

```text
Les questions qu’on me pose souvent.
```

Créer un accordéon de 5 questions.

Chaque item :

- question visible
- icône `+`
- au clic : ouverture avec réponse
- le `+` devient `−` ou rotation 45°
- un seul item ouvert à la fois ou plusieurs possibles, au choix

Questions / réponses :

### Q1

```text
Tu es plutôt Growth, Data ou Créatif ?
```

Réponse :

```text
Les trois se complètent dans mon travail. La data permet de comprendre, le growth aide à tester et prioriser, la créativité transforme les apprentissages en messages, contenus ou expériences qui donnent envie d’agir.
```

### Q2

```text
Avec quels types de projets travailles-tu ?
```

Réponse :

```text
Je travaille surtout avec des projets digitaux, indépendants, startups, équipes marketing ou créateurs qui veulent mieux structurer leur acquisition, leurs contenus, leurs données ou leurs opérations.
```

### Q3

```text
Peux-tu intervenir sur une mission courte ?
```

Réponse :

```text
Oui. Je peux intervenir sur un audit, un sprint d’expérimentation, la création d’un dashboard, l’automatisation d’un workflow ou la clarification d’un funnel.
```

### Q4

```text
Est-ce que tu peux travailler avec mes outils existants ?
```

Réponse :

```text
Oui. L’idée est souvent de partir de l’existant : Notion, Airtable, Sheets, GA4, CRM, outils no-code, outils IA ou stack interne. Je propose ensuite des améliorations pragmatiques.
```

### Q5

```text
Comment démarre une collaboration ?
```

Réponse :

```text
On commence par un échange court pour comprendre le contexte, les objectifs et les contraintes. Ensuite, je propose un angle d’intervention clair avec les livrables associés.
```

---

## 16. Section À propos

Titre :

```text
À propos de moi
```

Sous-titre :

```text
Je relie les idées, les chiffres et les formats pour créer des systèmes plus clairs, plus utiles et plus performants.
```

Créer une grande carte bordée.

Contenu narratif :

```text
Mon parcours se situe entre stratégie de croissance, analyse de données et création de contenus.

J’aime comprendre ce qui bloque : un message trop flou, un parcours trop long, une donnée mal exploitée, une routine manuelle qui prend trop de temps, ou une idée forte qui n’a pas encore trouvé son bon format.

Mon rôle est de transformer cette complexité en systèmes simples : dashboards, workflows, funnels, contenus, automatisations, playbooks ou expérimentations.

Je travaille avec une approche très concrète : observer, formuler des hypothèses, construire vite, mesurer, puis améliorer. Pas de jargon inutile, pas de tunnel, pas de livrable décoratif.
```

Boutons dans la carte :

- plein vert sauge : `Me contacter`
- outline : `Voir mon CV`

Sous la carte, créer 4 mini-cartes stats.

Stats :

1. Chiffre : `4+`  
   Légende : `années d’expérience`

2. Chiffre : `18`  
   Légende : `projets lancés`

3. Chiffre : `34`  
   Légende : `workflows créés`

4. Chiffre : `120+`  
   Légende : `expériences analysées`

Style stats :

- gros chiffre outline ou très léger
- cartes bordées
- alternance terracotta / vert sauge / violet doux
- responsive en 2 colonnes mobile

---

## 17. Section Contact

Titre :

```text
Parlons de votre projet.
```

Sous-titre :

```text
Une idée, un blocage, une envie d’aller plus vite ? Envoyez-moi quelques lignes, je vous répondrai rapidement.
```

Layout desktop :

- colonne gauche : coordonnées
- colonne droite : formulaire

### Colonne coordonnées

Carte ou bloc avec :

Email :

```text
hello@prenomnom.com
```

Localisation :

```text
Basé en France — disponible à distance
```

Disponibilité :

```text
Disponible pour missions freelance, sprints ou accompagnements ponctuels
```

Réseaux :

- LinkedIn
- GitHub
- Portfolio PDF ou CV

### Formulaire

Champs :

- Nom
- Email
- Téléphone, optionnel
- Message

Bouton :

```text
Envoyer
```

Comportement attendu :

- validation front simple
- champs obligatoires : nom, email, message
- message de succès après soumission
- pas besoin de backend dans une première version
- prévoir une fonction `handleSubmit` facilement remplaçable plus tard par une API route ou un service externe

---

## 18. Footer

Créer un footer simple.

Contenu :

```text
© 2026 Prénom Nom — Growth, Data & Créatif.
```

Liens :

- LinkedIn
- GitHub
- Email

Style :

- fond beige légèrement plus foncé
- bordure top fine
- texte petit
- disposition responsive

---

## 19. Composants à créer

Créer des composants réutilisables :

```text
components/
  Header.tsx
  Hero.tsx
  Marquee.tsx
  SectionTitle.tsx
  PillBadge.tsx
  FeatureCard.tsx
  ProjectCard.tsx
  ProcessCard.tsx
  StackStrip.tsx
  FAQAccordion.tsx
  About.tsx
  ContactForm.tsx
  Footer.tsx
```

Créer un fichier de données centralisé :

```text
lib/content.ts
```

Ce fichier doit contenir :

- navigation
- apports
- projets
- étapes méthode
- stack
- FAQ
- stats
- coordonnées

Le contenu doit être facile à modifier sans toucher à la structure des composants.

---

## 20. Animations et interactions

Animations discrètes uniquement.

À implémenter :

- hover léger sur cartes : translation verticale `-2px`
- transition bordure / fond sur boutons
- accordéon FAQ fluide
- bandeau marquee infini
- ancres smooth scroll
- focus states accessibles sur boutons, liens et champs
- pas d’animations lourdes
- pas de dépendance animation obligatoire sauf si déjà installée

Respecter `prefers-reduced-motion`.

---

## 21. Responsive

Le site doit être parfaitement utilisable sur mobile.

Breakpoints :

- mobile : une colonne
- tablette : grilles 2 colonnes si pertinent
- desktop : hero 2 colonnes, projets 2 colonnes, méthode 4 colonnes

Contraintes mobile :

- éviter les titres trop grands qui cassent
- CTA en colonne ou pleine largeur si nécessaire
- cartes respirantes
- formulaire pleine largeur
- bandeau marquee lisible

---

## 22. Accessibilité

Exigences :

- contraste suffisant
- boutons et liens focus visibles
- labels associés aux champs du formulaire
- accordéon accessible au clavier
- titres hiérarchisés correctement : un seul `h1`, puis `h2`, `h3`
- textes alternatifs si logos ou icônes images
- ne pas utiliser uniquement la couleur pour transmettre une information

---

## 23. SEO

Ajouter les métadonnées suivantes :

Title :

```text
Prénom Nom — Growth, Data & Créatif
```

Description :

```text
Portfolio one-page d’un profil hybride Growth, Data & Créatif. Stratégie de croissance, analyse de données, automatisation, contenus et systèmes digitaux.
```

Open Graph :

```text
Prénom Nom — Growth, Data & Créatif
```

Prévoir une image OG placeholder simple si possible, sinon config prête à compléter.

---

## 24. Critères d’acceptation

Le projet est terminé lorsque :

- La page contient toutes les sections demandées dans le bon ordre
- Le style correspond à l’ambiance de la capture : crème, terracotta, vert sauge, cartes bordées, badges pill
- Le site est responsive mobile / tablette / desktop
- Le formulaire a une validation front fonctionnelle
- L’accordéon FAQ fonctionne
- Le bandeau de mots-clés défile en boucle
- Les cartes alternent visuellement les couleurs d’accent
- Il n’y a aucune section tarifs, devis ou témoignages
- Le code est propre, typé et organisé en composants
- Le contenu est centralisé dans un fichier facile à modifier
- Le projet peut être lancé avec :

```bash
npm install
npm run dev
```

- Le projet peut être buildé avec :

```bash
npm run build
```

---

## 25. Instructions d’exécution pour Claude Code

Créer ou mettre à jour le projet dans le dossier courant.

Procéder ainsi :

1. Initialiser une app Next.js TypeScript avec Tailwind si le projet est vide.
2. Créer la structure de composants indiquée.
3. Créer le fichier `lib/content.ts`.
4. Implémenter le design global dans `globals.css`.
5. Construire la page one-page dans `app/page.tsx`.
6. Vérifier le responsive.
7. Vérifier les états hover, focus et accordéon.
8. Vérifier qu’aucune section interdite n’est présente.
9. Lancer un build local et corriger les erreurs.
10. Préparer le projet pour push GitHub et déploiement Vercel.

---

## 26. Prompt direct à donner à Claude Code

```text
Tu es Claude Code. Crée un site portfolio one-page en français pour un profil hybride Growth / Data / Créatif.

Le site doit être développé avec Next.js, TypeScript et Tailwind CSS, prêt à être déployé sur Vercel via GitHub.

Inspire-toi fortement de cette direction artistique :
fond crème/beige chaud, pas blanc pur, ambiance chaleureuse et artisanale, cartes à bordures fines colorées, coins arrondis, fond de carte légèrement plus foncé ou plus clair que le background, deux accents principaux terracotta/orange chaud et vert sauge utilisés en alternance. Les titres de section doivent avoir un point coloré et un mot souligné. Utilise des badges pill arrondis. Le rendu doit être premium mais humain, pas corporate, pas SaaS froid.

Structure obligatoire dans cet ordre :
1. Hero
2. Bandeau défilant
3. Ce que j’apporte
4. Mes projets
5. Comment je travaille
6. Stack technique
7. FAQ
8. À propos
9. Contact

Ne crée pas de section tarifs, devis ou témoignages clients.

Crée des composants réutilisables :
Header, Hero, Marquee, SectionTitle, PillBadge, FeatureCard, ProjectCard, ProcessCard, StackStrip, FAQAccordion, About, ContactForm, Footer.

Centralise le contenu dans lib/content.ts pour que je puisse facilement modifier textes, projets, FAQ, stack et coordonnées.

Le hero doit contenir :
- un badge “Disponible pour nouveaux projets”
- un H1 sur 2 lignes : “Je transforme les idées / en systèmes qui grandissent.”
- le mot “grandissent” en couleur accent
- un sous-titre court expliquant le profil Growth, Data & Créatif
- deux CTA : “Discuter du projet” et “Voir mes projets”
- une carte résumé avec checklist : Growth experiments, Analyse data & dashboards, Automatisation no-code / IA, Création de contenu & storytelling

Ajoute un bandeau défilant horizontal avec :
GROWTH STRATEGY — DATA ANALYSIS — CREATIVE OPS — AUTOMATION — DASHBOARDS — CONTENT SYSTEMS — IA & NO-CODE — EXPÉRIMENTATION — ACQUISITION — CRM — FUNNELS —

Section “Ce que j’apporte” :
3 cartes :
- Clarifier la croissance
- Faire parler les données
- Créer des systèmes utiles

Section “Mes projets” :
4 cartes :
- Dashboard Growth & Acquisition
- Système de contenu IA + Notion
- Refonte de funnel d’inscription
- Playbook d’expérimentation Growth

Section “Comment je travaille” :
badge “Comment ça marche”, titre, puis 4 cartes avec grands numéros outline 01 à 04 :
- Comprendre
- Structurer
- Produire
- Mesurer

Section Stack :
affiche des badges ou logos grayscale :
Notion, Airtable, Make, Zapier, n8n, GA4, Looker Studio, BigQuery, SQL, Python, Figma, Webflow, Framer, ChatGPT, Claude, Vercel, GitHub.

Section FAQ :
accordéon de 5 questions :
- Tu es plutôt Growth, Data ou Créatif ?
- Avec quels types de projets travailles-tu ?
- Peux-tu intervenir sur une mission courte ?
- Est-ce que tu peux travailler avec mes outils existants ?
- Comment démarre une collaboration ?

Section À propos :
grande carte narrative avec paragraphes courts, boutons “Me contacter” et “Voir mon CV”, puis 4 mini-cartes stats :
4+ années d’expérience
18 projets lancés
34 workflows créés
120+ expériences analysées

Section Contact :
colonne coordonnées avec email, localisation, disponibilité, liens LinkedIn/GitHub.
Formulaire avec nom, email, téléphone optionnel, message, validation front simple et message de succès.

Contraintes techniques :
- responsive parfait
- un seul H1
- smooth scroll
- hover léger sur cartes
- focus states visibles
- accordéon accessible
- respecter prefers-reduced-motion
- npm run build doit passer sans erreur
- aucun backend nécessaire pour la V1 du formulaire, mais le code doit être facile à connecter plus tard à une API ou un service externe.

Utilise une palette proche :
background #F5EBCF
background soft #F9F0D8
card #E6CBAA
text #241A12
muted #6D5A47
terracotta #C75B2A
sage #3E7562
border dark #2B1A12

Implémente maintenant tout le site dans le dossier courant.
```
