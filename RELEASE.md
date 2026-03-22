# Release Process

This project uses [standard-version](https://github.com/conventional-changelog/standard-version) to automate versioning and CHANGELOG generation.

## Prerequisites

- Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages
- Commit message format: `<type>(<scope>): <subject>`
  - **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
  - **Example**: `feat(tabs): add URL-driven navigation support`

## Release Workflow

The release process is now manual to ensure quality control before publishing, while documentation deployment remains automated via GitHub Actions.

### 1. Perform a Release (Local)

When you're ready to create a new version of the package:

```bash
# 1. Ensure you're on the latest main branch
git checkout main
git pull origin main

# 2. Run the release script from the monorepo root
pnpm release:package
```

**What this does automatically:**
1. Runs `pnpm build` across the entire workspace.
2. Analyzes your commit messages since the last release.
3. Bumps the version in `react-fluid-tabs/package.json`.
4. Generates changelog entries in `react-fluid-tabs/CHANGELOG.md`.
5. Creates a git commit and a version tag (e.g., `v0.0.11`).
6. Pushes the commit and tags to the repository.

### 2. Publish to npm (Local)

Once the release is tagged and pushed:

```bash
pnpm publish:package
```

This builds the package and publishes it to the npm registry.

### 3. Documentation Deployment (Automated)

**Trigger:** Any push to the `main` branch that modifies `docs/` or `react-fluid-tabs/`.

**What happens automatically:**
- GitHub Actions detects the change.
- It installs dependencies using `pnpm`.
- It builds both the package and the documentation site.
- It deploys the `docs/dist` folder to GitHub Pages.

> [!TIP]
> You can also manually trigger a documentation deployment from the **Actions** tab on GitHub using the **"Run workflow"** button.

## Commit Message Examples

```bash
# Features (minor version bump)
git commit -m "feat(tabs): add swipe gesture support"

# Bug fixes (patch version bump)
git commit -m "fix(navigation): resolve browser back button issue"

# Breaking changes (major version bump)
git commit -m "feat(tabs)!: redesign API for better flexibility"

# Other commits (no version bump)
git commit -m "docs: update README with new examples"
git commit -m "chore: update dependencies"
```

## Configuration

The release process is primarily configured in:
- `pnpm-workspace.yaml`: Manages the monorepo structure.
- `.versionrc.json` (root): Defines paths for versioning and changelog generation.
- `.github/workflows/deploy-docs.yml`: Handles the continuous deployment of the documentation site.
