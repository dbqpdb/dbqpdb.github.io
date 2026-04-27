# dbqpdb.github.io

Personal academic website for **Daniel Brenner** — phonetician and speech technology engineer.

🌐 Live site: <https://dbqpdb.github.io>

Built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. The upstream theme docs (`INSTALL.md`, `CUSTOMIZE.md`, `QUICKSTART.md`, `FAQ.md`, `TROUBLESHOOTING.md`, `SEO.md`, `ANALYTICS.md`) are kept in this repo as a reference and are unchanged from upstream.

## Local development

The recommended path is Docker — it matches the production CI build (Ruby 3.3.5 + Dart Sass + ImageMagick):

```bash
docker compose up        # serves at http://localhost:8080
docker compose down      # stop and free the port
```

Native Ruby works too, but local Sass compilation is incomplete on Ruby 3.0 because al-folio's SCSS uses Dart Sass `@use` syntax while the local `sassc` only supports `@import`. See [CLAUDE.md](CLAUDE.md) for the workaround. To run the native build:

```bash
~/.local/share/gem/ruby/3.0.0/bin/bundle install
~/.local/share/gem/ruby/3.0.0/bin/bundle exec jekyll serve --port 4000
```

## Deployment

`main` → GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) → Jekyll build with Dart Sass + ImageMagick → PurgeCSS → publish `_site/` to the `gh-pages` branch (with `.nojekyll`) → GitHub Pages serves the result as static HTML.

## Personalization touchpoints

- [`_config.yml`](_config.yml) — site identity, scholar config, plugins
- [`_pages/about.md`](_pages/about.md) — landing page bio
- [`_pages/cv.md`](_pages/cv.md) + [`assets/json/resume.json`](assets/json/resume.json) — CV page; the downloadable PDF lives in [`dbqpdb/db_cv`](https://github.com/dbqpdb/db_cv)
- [`_bibliography/papers.bib`](_bibliography/papers.bib) — publications
- [`_teaching/`](_teaching/) — course pages
- [`_data/socials.yml`](_data/socials.yml) — email, GitHub, LinkedIn

A more complete inventory of customizations and known local-dev gotchas lives in [CLAUDE.md](CLAUDE.md).

## License

The al-folio theme is MIT-licensed (see [`LICENSE`](LICENSE)). Site content — bio, CV data, publications, teaching pages — is © Daniel Brenner.
