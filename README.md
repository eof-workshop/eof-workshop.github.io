# Eyes of the Future workshop website

Static website for the Eyes of the Future workshop series. The project uses HTML, CSS and a small amount of vanilla JavaScript; it has no CMS, framework, package manager, database or build step.

## Structure

```text
.
├── index.html                     # current edition: EOF @ WACV 2027
├── editions/
│   ├── eccv-2024.html             # archive: ICVSE @ ECCV 2024
│   └── ijcnn-2025.html            # archive: IAISE @ IJCNN 2025
├── assets/
│   ├── css/styles.css             # shared design system
│   ├── js/main.js                 # menu, active navigation and back-to-top
│   ├── icons/favicon.svg
│   └── images/
│       ├── people/                # PNG portraits and placeholders
│       └── photos/                # optional workshop galleries
└── README.md
```

## Page templates

The project has two coherent page variants:

1. **Current edition** — `index.html`, with About, Call for Papers, Important Dates, Program, Invited Speakers, Awards, Organizers, Contact and Editions.
2. **Archived edition** — the pages in `editions/`, with Program, Invited Speakers, Awards, Accepted Papers, Organizers, Photos and edition navigation.

All visual components are shared through `assets/css/styles.css`. Speaker and organizer entries use the same `.person-card` component.

## Portraits

All people images are PNG files in:

```text
assets/images/people/
```

Several public portraits have already been cropped to square PNG files. Their online sources are documented in `assets/images/people/SOURCES.txt`. Before publication, verify the reuse and credit requirements of each source.

The following people still use the neutral EOF placeholder artwork:

- Michael Goesele
- Pietro Bartoli
- Luca Merigo
- several speakers and organizers from the archived editions

To replace an image, overwrite the corresponding PNG while keeping the same filename. A square image of at least 600 × 600 px is recommended.

## Archive photographs

The ECCV 2024 and IJCNN 2025 pages contain a public-facing “Photo archive coming soon” state. When event photos are available, replace that block with `.photo-gallery` and `.gallery-item` elements; the required styles are already included in `assets/css/styles.css`.

## Current items still to complete

Only two public details remain intentionally pending on the WACV 2027 page:

- the exact workshop day within January 4–5, 2027;
- the workshop-specific OpenReview submission URL.

The OpenReview status block can be replaced with a normal link as soon as the portal is active.

## Accepted-paper archives

Both archive pages preserve the accepted-paper titles and author lists. The ECCV 2024 page also records the workshop date, venue and room. The IJCNN 2025 schedule uses the same visual format as the current edition.

## Adding a future edition

Duplicate either file in `editions/`, then update:

- the page title and meta description;
- the hero metadata and statistics;
- the program, speakers, awards, accepted papers and organizers;
- the edition cards and footer links.

Keep `class="archive-page"` on the `<body>` element to retain the archive styling.

## Local preview

From the project directory, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The contents of this directory can be published directly with GitHub Pages or any standard static web host. Keep all relative paths unchanged.
