# Modifier mon site

Le contenu du site est en anglais. Ce guide explique les modifications courantes.

## 1. Ouvrir le dossier

Ouvrez ce dossier PersonalSite dans un éditeur de code ou de texte brut. Évitez Word ou Pages : ils n'enregistrent pas les fichiers au bon format.

## 2. Modifier les textes dans un seul fichier

Ouvrez `app/content.json`. Ce fichier contient :

| Partie | Ce que vous pouvez modifier |
| --- | --- |
| `profile.biography` | Le paragraphe de présentation |
| `profile.email`, `scholar`, `github`, `linkedin` | Les coordonnées et liens |
| `profile.portrait` | Le nom de la photo dans `public/` |
| `publications` | Les articles, auteurs, année, conférence et liens |
| `presentations` | Les présentations, lieu, année et type (`Poster`, par exemple) |
| `teaching.intro` | La phrase qui introduit les enseignements |
| `teaching.courses` | La liste des cours, années, niveaux et ressources |

Modifiez le texte **à l'intérieur des guillemets**, en gardant les virgules, crochets et accolades autour. Une apostrophe simple est autorisée. Si vous ajoutez des guillemets doubles dans le texte, écrivez `\"`.

Pour créer un lien dans la bio, utilisez `[texte affiché](https://adresse-du-lien)`. Exemple : `[CREST](https://crest.science/)`.

Pour ajouter une publication ou une présentation, dupliquez une entrée complète entre `{` et `}`, puis changez ses valeurs. Séparez les entrées par une virgule. Pour une présentation sans ressource disponible, utilisez `"links": []`.

Les années d'enseignement sont actuellement 2025–2026 et 2026–2027. La bio indique le début de la thèse en 2025.

## 3. Voir les modifications sur votre Mac

Double-cliquez sur `Apercu.command`. Une fenêtre Terminal s'ouvre ; cliquez sur l'adresse locale qu'elle affiche, habituellement `http://localhost:3000/`.

Vous pouvez aussi lancer, depuis le dossier PersonalSite :

```sh
./Apercu.command
```

Enregistrez `app/content.json` avec Cmd+S : l'aperçu se met à jour automatiquement. En cas d'erreur juste après une modification, vérifiez d'abord les guillemets et les virgules. Laissez la fenêtre Terminal ouverte pendant les modifications. Pour arrêter l'aperçu, pressez Ctrl+C dans cette fenêtre.

## 4. Photo et documents

Placez une nouvelle photo dans `public/`, puis indiquez son nom dans `profile.portrait`, précédé de `/`. Même principe pour un PDF : placez-le dans `public/` et ajoutez une ressource avec, par exemple, `"label": "Slides"` et `"url": "/slides.pdf"`.

### Ajouter une correction ou un support à un cours

1. Placez votre PDF dans `public/teaching/` (créez ce sous-dossier si nécessaire), par exemple `optimisation-td1-correction.pdf`.
2. Dans `app/content.json`, trouvez le cours dans `teaching.courses`.
3. Remplacez son `"links": []` par :

```json
"links": [
  {
    "label": "TD 1 — Solutions",
    "url": "/teaching/optimisation-td1-correction.pdf"
  }
]
```

Ce nom de PDF est un exemple : utilisez le nom exact du fichier que vous avez ajouté. Le lien apparaîtra sous le cours. Pour plusieurs documents, ajoutez d'autres objets dans `links`, séparés par des virgules. Vous pouvez aussi utiliser une URL complète vers un document déjà en ligne. Laissez `"links": []` lorsqu'aucun document n'est disponible : aucun lien vide ne sera affiché.

Pour ajouter un cours, dupliquez une entrée de `teaching.courses`, puis modifiez `title`, `description`, `years` et `links`. `description` peut être une chaîne vide si le niveau n'est pas précisé.

## 5. Apparence et structure

- `app/globals.css` règle les couleurs, tailles et espacements.
- `app/page.tsx` règle l'ordre des sections et leur structure.
- `app/layout.tsx` règle le titre affiché dans l'onglet du navigateur et les métadonnées.

Pour les changements de contenu courants, seul `app/content.json` est nécessaire.

## 6. Mettre à jour le lien en ligne

Enregistrer un fichier et lancer l'aperçu modifient la version locale. Le site hébergé ne se met pas à jour automatiquement.

Une fois les changements vérifiés, vous pouvez demander ici : « Publie mes modifications locales sur le même site privé ». Cela permet de vérifier et de mettre à jour la version hébergée. Le site reste privé et l'indexation par les moteurs de recherche reste désactivée tant que vous ne demandez pas sa publication publique.

## Sources used for the initial draft

- https://crest.science/user/paul-caucheteux/ — affiliation and professional email.
- https://www.linkedin.com/in/paul-caucheteux-100ab510a/ — profile supplied by Paul.
- https://www.linkedin.com/posts/paul-caucheteux-100ab510a_icml2026-machinelearning-optimaltransport-activity-7482351214735671296-FiRs — supervisors, Spotlight and poster in Seoul.
- https://arxiv.org/abs/2605.31369 — paper title, authors and research description.
- https://github.com/Paulcauch/Generative_Wasserstein_Flows — accompanying code.

The short research biography is an editorial draft based on the paper and should be reviewed by Paul.

- https://icml.cc/virtual/2026/poster/61240 — conference presentation and poster resources.
- https://scholar.google.com/citations?user=xs6sAm4AAAAJ — Scholar profile supplied by Paul.

Teaching content supplied by Paul on 9 September 2026.
