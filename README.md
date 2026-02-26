# Personal Homepage

This repository contains a lightweight, static personal homepage template used on GitHub Pages. The site is intentionally simple: almost all user-visible content and links are driven from a single configuration file so you only need to edit one place to update the site.


### Quick summary
- Edit site content: change `assets/js/config.js` (recommended). The site reads values from the global `CONFIG` object.
- Run locally: start a static server (examples below) and open `http://localhost:8000`.
- Want additional features? Open an issue on this repository describing the feature — I'll add it or give guidance.


### Where to edit (the only file you usually need)
- `assets/js/config.js` — primary configuration. Change values here to update:
	- `CONFIG.name` — your display name
	- `CONFIG.avatar` — avatar image/thumbnail and profile photo
	- `CONFIG.bio`, `CONFIG.aboutme` — short and long descriptions
	- `CONFIG.contact` — links: email, github, google scholar, wechat, ORCID, etc.
	- `CONFIG.publications` — array of publications used to render the publications list
	- Any other fields present in the `CONFIG` object (check the file for current keys)


### Local preview
- From the repository root run a simple static server:
    ```bash
    python3 -m http.server 8000
    ```
- Open `http://localhost:8000` in your browser. Using a static server avoids fetch/CORS problems when the site loads JSON or other assets.

