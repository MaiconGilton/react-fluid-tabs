# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]


## [0.0.8] - 2025-12-19

### Added
- Initial changelog to track project changes

### Changed
- Package now published as `react-fluid-tabs`

### Fixed
- URL-driven tabs feature now fully supports browser history navigation
- Browser back button correctly navigates to previous tabs
- Prevented animation transition on initial page load when tab is specified in URL

## [0.0.7] - 2025-12-16

### Fixed
- Improved swipe gesture detection to prevent vertical scrolling during horizontal swipes
- Enhanced touch handling for smoother user experience across all tabs

## [0.0.6] - 2025-12-15

### Added
- TypeScript type declarations
- Bundle size optimizations

## [0.0.5] - 2025-12-14

### Added
- `Tabs.Buttons` component with `showIndicator` and `indicatorClassName` props
- Lazy loading support for tab content
- Tab persistence (tabs don't unmount when switching)
- Event triggers: `onFocus` and `onActive` callbacks
- Smooth animation transitions between tabs

### Changed
- Improved accessibility features
- Enhanced mobile gesture support

## [0.0.1] - 2025-12-14

### Added
- Initial release of react-fluid-tabs
- Swipeable tab component for React
- Mobile-app-like tab behavior
- Accessible tab navigation
- TypeScript support
