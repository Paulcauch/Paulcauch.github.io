# Paul Caucheteux — personal website

A simple academic page in English, with biography, publications and presentations.

## Updating the content

- `app/content.ts`: contact/profile links, portrait, publications and presentations.
- `app/page.tsx`: biography and page structure.
- `app/globals.css`: typography, colours, spacing and mobile layout.
- Put the chosen portrait and any PDFs in `public/`, then add their paths to the content.
- Missing links are omitted. No fictitious publications or download links are shown.

## Development

Use the project's installed package manager: `pnpm dev` and `pnpm build`.

## Draft status

Private preview; search indexing is disabled in `app/layout.tsx` until Paul chooses to publish publicly. The portrait and Scholar URL were supplied by Paul. The ICML poster and presentation links come from the official conference page.

## Sources used for the initial draft

- https://crest.science/user/paul-caucheteux/ — affiliation and professional email.
- https://www.linkedin.com/in/paul-caucheteux-100ab510a/ — profile supplied by Paul.
- https://www.linkedin.com/posts/paul-caucheteux-100ab510a_icml2026-machinelearning-optimaltransport-activity-7482351214735671296-FiRs — supervisors, Spotlight and poster in Seoul.
- https://arxiv.org/abs/2605.31369 — paper title, authors and research description.
- https://github.com/Paulcauch/Generative_Wasserstein_Flows — accompanying code.

The short research biography is an editorial draft based on the paper and should be reviewed by Paul.

- https://icml.cc/virtual/2026/poster/61240 — conference presentation and poster resources.
- https://scholar.google.com/citations?user=xs6sAm4AAAAJ — Scholar profile supplied by Paul.
