@AGENTS.md

# Project: dbqpdb.github.io

Academic website for Daniel Brenner (phonetician / speech technology engineer), built with al-folio (Jekyll).

🌐 **Live site:** <https://dbqpdb.github.io>

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site on a GitHub-hosted runner (Ruby 3.3.5 + Dart Sass + ImageMagick), runs PurgeCSS, drops a `.nojekyll` marker into `_site/`, and publishes the result to the `gh-pages` branch via `JamesIves/github-pages-deploy-action@v4`. GitHub Pages serves `gh-pages` as static HTML — the `.nojekyll` marker is required so the legacy Pages builder doesn't try to re-Jekyll-render the already-built output (which fails on al-folio plugins like `jekyll-toc` that aren't in the github-pages gem allowlist).

Pages source: `gh-pages` branch, root path. Configured via `gh api -X PUT /repos/dbqpdb/dbqpdb.github.io/pages` with `{"source": {"branch": "gh-pages", "path": "/"}}`.

## Local Development

```bash
# Install gems (bundler must be on PATH)
/home/db/.local/share/gem/ruby/3.0.0/bin/bundle install

# Build
/home/db/.local/share/gem/ruby/3.0.0/bin/bundle exec jekyll build

# Serve locally (http://localhost:4000)
/home/db/.local/share/gem/ruby/3.0.0/bin/bundle exec jekyll serve --port 4000
```

Bundler is installed at `~/.local/share/gem/ruby/3.0.0/bin/bundle` (not on default PATH).
Gems are vendored to `./vendor/bundle`.

## Known Issue: Sass Compilation

al-folio's SCSS uses Dart Sass `@use` syntax, but the local Ruby 3.0 + sassc gem only supports `@import`. This means `_sass/*.scss` files do **not** compile locally — `main.css` is essentially empty.

**Workaround:** Inline `<style>` overrides are in `_includes/head.liquid` to patch the most visible gaps (buttons, BibTeX blocks, list styling, hidden elements). These are marked with a comment explaining they're temporary.

**Production:** Docker and GitHub Actions use Dart Sass, so the full SCSS compiles correctly there.

## Key Customizations Made

### Files modified from al-folio defaults:

- `_config.yml` — personalized for Daniel Brenner, URL set to dbqpdb.github.io, scholar config for Brenner
- `_pages/about.md` — bio, subtitle, profile info
- `_pages/publications.md` — description updated
- `_pages/teaching.md` — simplified, nav_order 3
- `_pages/cv.md` — stub navbar entry; `permalink` points directly at the live PDF on `dbqpdb/db_cv` so the CV nav button is an external link and no HTML CV page is generated
- `_data/socials.yml` — email, GitHub, LinkedIn
- `assets/json/resume.json` — full CV data (education, work history, skills, languages)
- `_bibliography/papers.bib` — 14 publications from ~/references/lit.bib (abbr fields removed)
- `_includes/header.liquid` — search button removed, navbar made opaque via inline style
- `_includes/footer.liquid` — footer made opaque via inline style
- `_includes/head.liquid` — inline CSS overrides for buttons, BibTeX blocks, dark code theme, list markers
- `_layouts/bib.liquid` — replaced to show BibTeX-only (no formatted text), with copy-to-clipboard button
- `_plugins/google-scholar-citations.rb` — removed activesupport dependency (incompatible with Ruby 3.0)
- `_plugins/inspirehep-citations.rb` — same fix
- `_sass/_navbar.scss` — opacity set to 1
- `.github/workflows/deploy.yml` — added a `touch _site/.nojekyll` step before the Pages deploy
- `_config.yml` — `imagemagick.enabled: true` (the deploy runner installs imagemagick)

### Files removed (demo content):

- `_pages/about_einstein.md`, `profiles.md`, `dropdown.md`, `repositories.md`, `books.md`, `news.md`
- `_teaching/data-science-fundamentals.md`, `introduction-to-machine-learning.md`
- `_news/announcement_1.md`, `announcement_2.md`, `announcement_3.md`
- `books` collection removed from `_config.yml` and `jekyll-archives` config
- `_data/cv.yml` (Einstein RenderCV demo), `assets/rendercv/` (config dir), `.github/workflows/render-cv.yml` — the parallel RenderCV pipeline conflicted with the JSONResume-based CV page and the workflow was failing on the demo content. The HTML CV page was later removed entirely; the CV nav button now links directly to the live PDF at [`dbqpdb/db_cv`](https://github.com/dbqpdb/db_cv) via the external `permalink` in `_pages/cv.md`.

### Files added:

- `_teaching/ling-538-computational-linguistics.md`
- `_teaching/ling-539-statistical-nlp.md`
- `_teaching/ling-581-advanced-computational-linguistics.md`
- `_teaching/ling-696g-advanced-speech-technology.md`
- `_teaching/ling-101-language.md`
- `_news/2026-spring-teaching.md`

## Still TODO

- [ ] Decide whether to keep or remove: blog page, projects page (currently using al-folio defaults; demo posts/projects still ship at `/blog/` and `/projects/`)
- [ ] Consider Docker-based local dev for full Sass compilation (would also remove the inline-CSS workaround in `_includes/head.liquid`)
- [ ] Triage the remaining non-blocking workflows that failed on the initial push but aren't on the deploy critical path (e.g. lighthouse-badger, broken-links-site)

## Related Projects

- **CV source:** `~/Professional/db_cv/` (LaTeX)
- **BibTeX references:** `~/references/lit.bib`
- **Self-publishing project:** `~/Projects/AcademicPublishing/` (Jekyll + jekyll-scholar + KaTeX)
  - Website should remain compatible with this ecosystem
- **Teaching materials:** `~/Teaching/Spring2026/` (LING538, LING581, LING696G)
