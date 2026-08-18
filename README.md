# Eyes of the Future workshop website

Static website for the Eyes of the Future workshop series. The project uses only HTML, CSS and a small amount of vanilla JavaScript: no CMS, framework, package manager, database or build step is required.

## Structure

```text
.
├── index.html                     # current edition: EOF @ WACV 2027
├── editions/
│   ├── eccv-2024.html             # archive template: ICVSE @ ECCV 2024
│   └── ijcnn-2025.html            # archive template: IAISE @ IJCNN 2025
├── assets/
│   ├── css/styles.css             # shared design system for every edition
│   ├── js/main.js                 # menu, active navigation and back-to-top
│   ├── icons/favicon.svg
│   └── images/people/             # speaker and organizer portraits/placeholders
└── README.md
```

## Template system

The site has two coherent page variants:

1. **Current edition** — `index.html`, with the current call for papers, dates, tentative program, speakers, awards, organizers and edition archive.
2. **Archived edition** — both pages in `editions/` use the same archive structure, navigation, hero, people cards, awards component and edition switcher.

All visual components are shared through `assets/css/styles.css`. Speaker and organizer cards deliberately use the same HTML structure and CSS class: `.person-card`.

## Replacing portraits

Every person has a separate placeholder file in:

```text
assets/images/people/
```

The easiest approach is to replace the corresponding SVG with a real portrait while keeping the same filename. The image should be square; the website will crop it automatically.

You may also use JPG, PNG or WebP files. In that case, update the relevant `src` attribute in the HTML, for example:

```html
<img src="assets/images/people/marco-paracchini.jpg" alt="Marco Paracchini">
```

## Information still to complete

The current WACV page intentionally leaves editable placeholders for:

- exact workshop day;
- submission deadline;
- OpenReview information;
- final archival/non-archival policy;
- exact Best Paper Award prize;
- speaker talk titles;
- real portraits and optional organizer biographies.

The IJCNN 2025 archive includes a ready-made placeholder for the accepted paper/poster list and a program structure that can be expanded with exact times. Both archive award sections include a place for the winning papers and recipients.

## Adding a future archive

Duplicate either file in `editions/`, then update:

- page title and meta description;
- edition hero and metadata;
- quick navigation links;
- program, speakers, awards, papers and organizers;
- edition cards and footer links.

Keep `class="archive-page"` on the `<body>` element so the archived-edition styling remains consistent.

## Local preview

From the project directory, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Deployment

Because the project is entirely static, the folder can be published directly with GitHub Pages, GitLab Pages, Netlify, Cloudflare Pages or any standard web server. Upload the contents of this directory without changing the relative paths.


## Content policy for editions

- `index.html` is the current WACV 2027 edition and follows the accepted proposal for title, CFP, deadlines, program, invited speakers, award, and organizers.
- Archive pages intentionally omit About, Call for Papers, and Important Dates.
- Every archive keeps Program, Invited Speakers, Awards, Accepted Papers, Organizers, Photos, and edition navigation.
- Archive gallery placeholders live in `assets/images/photos/`; replace them using the same filenames to publish event photos without editing HTML.
