# Wail Hannachi — Personal Portfolio

A lightweight, bilingual (EN / AR) portfolio built with plain HTML, CSS and JavaScript.
No frameworks, no build step, no backend.

## Structure

```
portfolio/
├── index.html          ← all the content (sections)
├── css/style.css       ← colors, layout, animations, dark/light, RTL
├── js/main.js          ← translations (EN/AR), theme, menu, scroll effects
└── assets/images/      ← your photo + screenshots
```

## Preview on your computer

**Easiest:** double-click `index.html` to open it in your browser.

**Better (same as the real website):** open a terminal in the `portfolio` folder and run

```
python3 -m http.server 8000
```

then visit http://localhost:8000

## Replace things

| What | How |
| --- | --- |
| **Your photo** | Replace `assets/images/wail.webp` with another image using the **same file name** (square, about 640×640 works best). |
| **Your PowerPoint slides** | Save screenshots in `assets/images/`. In `index.html`, find the *Slide Gallery* and replace each `<div class="ph">…</div>` with `<img src="assets/images/slide-1.jpg" alt="Describe the slide" loading="lazy" width="1280" height="720">`. Then edit the caption text under it. |
| **Add more slides** | Copy one `<figure class="shot glass reveal">…</figure>` block and paste it below the others. |
| **Client feedback** | Add a screenshot to `assets/images/`, then copy one `<figure class="fb glass reveal">…</figure>` block in `index.html`. |
| **Text (English / Arabic)** | Open `js/main.js`. Every text has a key (e.g. `hero_tagline`) with an English and an Arabic version. Edit both. |
| **Skill levels** | In `index.html`, each skill has 3 small bars. Add or remove the class `on` on the `<i>` tags (1 = Beginner, 2 = Fundamentals, 3 = Practicing). Update the `data-i18n` label to `lvl1`, `lvl2` or `lvl3` to match. Keep it honest and raise it as you grow. |
| **Email card** | In `index.html`, search for `OPTIONAL — add an email card`, remove the comment marks and put your real email in. |
| **Colors** | Top of `css/style.css` (`--neon`, `--sky`, `--navy`, `--black`). |

## Publish for free on GitHub Pages

1. Create a free account at https://github.com and click **New repository**. Name it `portfolio` (or `yourusername.github.io` for a shorter address). Keep it **Public**.
2. Click **uploading an existing file** and drag in everything *inside* the `portfolio` folder (`index.html`, `css`, `js`, `assets`). Click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After about a minute your site is live at `https://YOURUSERNAME.github.io/portfolio/`.

To update later: upload the changed files again and commit.

## Notes

- Dark mode is the default; the choice (theme and language) is remembered in the browser.
- Animations respect the system setting *Reduce motion*.
- The Google Fonts stylesheet needs internet; without it the site falls back to system fonts.
- PowerPoint social pages (TikTok, Instagram) and LinkedIn are kept in separate sections on purpose.
