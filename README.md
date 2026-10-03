# Ayush Nandanwar Portfolio

A static portfolio site for Ayush Nandanwar.

## Local preview

Serve the repository root with a local HTTP server, then open `http://localhost:8000`:

```sh
python3 -m http.server 8000
```

## Release smoke test

Complete this checklist on the local preview before deployment:

- [ ] Check the hero, experience, selected work, projects, and contact sections render.
- [ ] Test dark and light themes, including theme persistence after a reload.
- [ ] At 375px, 768px, and desktop widths, check for clipped content and test the mobile navigation.
- [ ] Use keyboard navigation to verify visible focus, links, buttons, and in-page navigation.
- [ ] Enable reduced motion and verify scrolling and decorative effects do not animate.
- [ ] Scroll through the page and confirm images load, with no broken requests or console errors.
- [ ] Verify the CV download, contact links, favicon, and web app manifest.

## Deployment checklist

- [ ] Confirm the release smoke test is complete and all checks pass.
- [ ] Publish the site root with its `css/`, `data/`, `images/`, `js/`, and `webfonts/` assets.
- [ ] Check the deployed URL for missing assets, console errors, and correct light/dark theme colors.
- [ ] Re-test the CV download, theme persistence, mobile navigation, and lazy-loaded images on the deployed site.
