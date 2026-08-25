# SquirrelDeck Public Site — GitHub-only cloud capture

Public information site for SquirrelDeck (松械平台), including product information, Traditional Chinese and English privacy policies, and support information.

This version reflects SquirrelDeck v1.0.0.1:

- user-configured browser automation, userscripts, reminders, UI tools, screenshots, and recordings;
- optional Google Drive settings synchronization using the limited `drive.appdata` and `drive.file` scopes;
- Firebase Authentication is used only for the Google account chooser and basic account identity data during account selection;
- optional GitHub-only cloud screenshot/recording through each user's private GitHub repository and GitHub Actions quota;
- AES-GCM encrypted GitHub OAuth credential ciphertext stored in the user's Google Drive hidden `appDataFolder`, with the decryption key kept only on the current Chrome device;
- optional local credential vault protected with PBKDF2-SHA-256 and AES-256-GCM;
- user-declared `@require`, `@resource`, `@updateURL`, and `@downloadURL` resources are handled as user-provided userscript content through Chrome's `userScripts` API;
- no Cloudflare Worker or SquirrelDeck developer media server is used for GitHub cloud capture;
- screenshot and recording media files are not stored in Google Drive.

## GitHub Pages

Publish the repository default branch (`main`) from `/(root)`.

Public pages:

- `index.html` — product/home page with integrated privacy/support views
- `privacy-policy.html` — Traditional Chinese privacy policy
- `privacy-policy-en.html` — English privacy policy
- `support.html` — support information

Static assets:

- `brand-logo.png`
- `brand-mark.png`
- `hero-energy-globe.png`
- `favicon.png`
- `.nojekyll`
