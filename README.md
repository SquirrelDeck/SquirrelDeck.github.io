# SquirrelDeck Public Site — GitHub-only cloud capture

Public information site for SquirrelDeck (松械平台), including product information, Traditional Chinese and English privacy policies, and support information.

This version reflects SquirrelDeck v1.9.168.0:

- optional Google Drive settings sync;
- optional GitHub-only cloud screenshot/recording through each user's private GitHub repository and GitHub Actions quota;
- no Cloudflare Worker or SquirrelDeck developer media server;
- AES-GCM encrypted GitHub OAuth credential ciphertext stored in the user's Google Drive hidden appDataFolder, with the decryption key kept only on the current Chrome device;
- media files are not stored in Google Drive.

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
