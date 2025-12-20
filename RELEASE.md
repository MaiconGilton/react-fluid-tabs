# Release Process

This project uses [standard-version](https://github.com/conventional-changelog/standard-version) to automate versioning and CHANGELOG generation.

## Prerequisites

- Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages
- Commit message format: `<type>(<scope>): <subject>`
  - **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
  - **Example**: `feat(tabs): add URL-driven navigation support`

## Release Commands

### React-Fluid-Tabs Package

```bash
# Automatic version bump based on commits
npm run release

# Specific version bumps
npm run release:patch  # 0.0.8 → 0.0.9
npm run release:minor  # 0.0.8 → 0.1.0
npm run release:major  # 0.0.8 → 1.0.0

# First release (doesn't bump version)
npm run release:first
```

### Documentation Site

```bash
# Auto-detect version bump based on commits
npm run release:docs
```

> **Note**: The docs release command only updates the version and changelog locally. It doesn't push to git since docs versions are typically released alongside package versions.

## What Happens During Release

1. Bumps version in `react-fluid-tabs/package.json`
2. Updates `react-fluid-tabs/CHANGELOG.md` with commits since last release
3. Creates a git commit with the changes
4. Creates a git tag (e.g., `v0.0.9`)
5. Pushes commits and tags to `origin main`

## Commit Message Examples

```bash
# Features (minor version bump)
git commit -m "feat(tabs): add swipe gesture support"
git commit -m "feat(buttons): add indicator customization"

# Bug fixes (patch version bump)
git commit -m "fix(navigation): resolve browser back button issue"
git commit -m "fix(animation): prevent transition on initial load"

# Breaking changes (major version bump)
git commit -m "feat(tabs)!: redesign API for better flexibility

BREAKING CHANGE: The tabs prop structure has changed"

# Other commits (no version bump)
git commit -m "docs: update README with new examples"
git commit -m "chore: update dependencies"
```

## Configuration

The release process is configured in `.versionrc.json`:
- Only bumps version in `react-fluid-tabs/package.json`
- Updates `react-fluid-tabs/CHANGELOG.md`
- Skips automatic commit/tag (handled by npm scripts)
