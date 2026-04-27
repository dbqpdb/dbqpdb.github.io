@AGENTS.md

# Project: dbqpdb.github.io

Academic website for Daniel Brenner (phonetician / speech technology engineer), built with al-folio (Jekyll).

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
- `_pages/cv.md` — jsonresume format, links to DanBrenner_CV.pdf
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

### Files removed (demo content):

- `_pages/about_einstein.md`, `profiles.md`, `dropdown.md`, `repositories.md`, `books.md`, `news.md`
- `_teachings/data-science-fundamentals.md`, `introduction-to-machine-learning.md`
- `_news/announcement_1.md`, `announcement_2.md`, `announcement_3.md`
- `books` collection removed from `_config.yml` and `jekyll-archives` config

### Files added:

- `_teachings/ling-538-computational-linguistics.md`
- `_teachings/ling-539-statistical-nlp.md`
- `_teachings/ling-581-advanced-computational-linguistics.md`
- `_teachings/ling-696g-advanced-speech-technology.md`
- `_teachings/ling-101-language.md`
- `_news/2026-spring-teaching.md`

## Still TODO

- [ ] Add profile photo (`assets/img/prof_pic.jpg`)
- [ ] Copy CV PDF to `assets/pdf/DanBrenner_CV.pdf`
- [ ] Set up GitHub Actions for deployment (needs Dart Sass for full SCSS compilation)
- [ ] Decide whether to keep or remove: blog page, projects page
- [ ] ImageMagick disabled locally (`imagemagick.enabled: false` in \_config.yml) — re-enable for production
- [ ] Consider Docker-based local dev for full Sass compilation
- [ ] Initial git commit and push

## Related Projects

- **CV source:** `~/Professional/db_cv/` (LaTeX)
- **BibTeX references:** `~/references/lit.bib`
- **Self-publishing project:** `~/Projects/AcademicPublishing/` (Jekyll + jekyll-scholar + KaTeX)
  - Website should remain compatible with this ecosystem
- **Teaching materials:** `~/Teaching/Spring2026/` (LING538, LING581, LING696G)
