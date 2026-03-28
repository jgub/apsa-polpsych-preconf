# 2026 APSA Political Psychology Pre-Conference

Conference website for the 2026 APSA Political Psychology Pre-Conference. Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

---

## Setting Up on a New Computer

### 1. Install prerequisites

You need two things installed: **Node.js** (runs the site) and the **GitHub CLI** (manages code).

**On macOS:**

```bash
# Install Homebrew (a package manager) if you don't have it:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Node.js and GitHub CLI:
brew install node gh
```

**On Windows:**

Download and install these two programs:
- Node.js: https://nodejs.org/ (pick the LTS version)
- GitHub CLI: https://cli.github.com/

**On Linux (Ubuntu/Debian):**

```bash
sudo apt update && sudo apt install -y nodejs npm
# GitHub CLI: see https://github.com/cli/cli/blob/trunk/docs/install_linux.md
```

### 2. Log in to GitHub

```bash
gh auth login
```

Follow the prompts — choose GitHub.com, HTTPS, and authenticate via browser.

### 3. Clone the repository

```bash
gh repo clone <your-repo-name>
cd apsa-polpsych-preconf.com
```

### 4. Install dependencies

```bash
npm install
```

### 5. Start the development server

```bash
npm run dev
```

Open http://localhost:4321 in your browser. Any changes you save will appear immediately.

---

## Making Changes

Most site content is in `src/data/conference.ts`, with layout and section structure in `src/pages/index.astro`. See [CLAUDE.md](./CLAUDE.md) for project-specific guidance.

After making changes, you can preview the production build:

```bash
npm run build    # Build the site
npm run preview  # Preview at localhost:4321
```

---

## Deploying to Vercel

The site is hosted on [Vercel](https://vercel.com/). If the repository is connected to Vercel, changes pushed to the `main` branch are deployed automatically.

### First-time Vercel setup

1. Go to https://vercel.com/ and sign in with your GitHub account.
2. Click "Add New Project" and import this repository.
3. Vercel will auto-detect Astro — just click "Deploy". No settings to change.
4. After the first deploy, Vercel gives you a URL for the site.

### Custom domain (optional)

In the Vercel dashboard, go to your project → Settings → Domains and add your preferred domain. Vercel will give you the DNS records to add at your domain registrar.

### Manual deploy from the command line

If you prefer not to connect GitHub, you can deploy manually:

```bash
npm run build
npx vercel deploy --prebuilt
```
