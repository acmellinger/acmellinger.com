# My Personal Landing Page

A personal landing page with links to email (secured by recaptcha and a custom backend service), linkedin, github, etc. Written in React and setup to run on Github Pages.

## Running locally

```
yarn install
yarn start
```

## Deploying

The code should auto deploy any changes to the `main` branch via Github Actions. See `./github/worflows/main.yaml`

## Files to update to personalize

To personalize this site update the following files:

```
public/* (CNAME, favicons, index.html (including analytics tag))
.env
package.json (name and homepage)
src/components/links
```

## Credits / Inpired By

https://github.com/murraco/jekyll-theme-minimal-resume
