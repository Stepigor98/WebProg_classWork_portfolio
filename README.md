# Igor Stepanenko — Personal Portfolio

A one-page, responsive dark-fantasy-inspired personal portfolio built with HTML, CSS and JavaScript. All artwork in `assets/` is original SVG artwork created for this site; no official video-game assets are used.

## What's inside

- `index.html` — the complete one-page site.
- `style.css` — styling, ornate shapes and mobile breakpoints.
- `script.js` — mobile navigation and section reveal animations.
- `Igor_Stepanenko_CV.pdf` — one-page CV linked from the website.
- `assets/crest.svg` and `assets/landscape.svg` — original decorative artwork.

## How to preview

Extract the entire ZIP and open **index.html** in your browser. Keep the files and the `assets` folder together. The Google Fonts load when an internet connection is available; fallback fonts work offline.

## How to publish on GitHub Pages

1. Create a new **public** GitHub repository (e.g. `igor-portfolio`).
2. Upload the **contents** of the extracted folder. `index.html` must be in the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch** → `main` / `(root)` and save.
5. Wait for GitHub Pages to publish and open the URL shown in Settings. Test it on your phone as well.

## PostCSS Playground

The assignment specifies [PostCSS Playground](https://sneakertack.github.io/postcss-playground/). To demonstrate CSS processing there:

1. Open the link and paste the contents of `style.css` into its CSS input.
2. Enable the appropriate available processing plugin(s), for example Autoprefixer if you want browser vendor prefixes.
3. Run the processing and inspect the output. Copy the generated CSS into `style.css` and save it.
4. Recheck the page in a browser and commit the updated CSS to GitHub.

**Important:** PostCSS itself doesn't automatically minify CSS; minification depends on the configured plugin. The stylesheet in this archive is already written compactly, but it has not been run through the online Playground.

## Content notes

- Replace any profile text, CV details or project descriptions you'd like to refine before public publication.
- The SetNora card currently links to the **GitHub profile**, because no public SetNora repository URL was provided.
- Original fan-inspired aesthetic, not affiliated with or endorsed by The Witcher game franchise.
