# Pegasus Shared UI

| Repo                        | Purpose                        | Uses Shared UI? | Docs Link |
|-----------------------------|--------------------------------|-----------------|-----------|
| pegasus-imperfect-prints-site | Marketing, customer site       | Yes             | [README](../pegasus-imperfect-prints-site/README.md) |
| pegasus-3d-library            | Inventory/DB app               | Yes             | [README](../pegasus-3d-library/README.md) |
| pegasus_shared_ui             | Shared UI/components/assets    | N/A             | This file |

This package contains shared UI components, branding assets, and utility functions for the Pegasus family of apps (`pegasus-imperfect-prints-site` and `pegasus-3d-library`).

## Purpose
- Centralize reusable UI primitives (Button, Card, Input, etc.)
- Share branding assets (logos, placeholders)
- Provide utility functions (e.g., `cn` for classnames)

## Usage

### 1. Install (as a local package or via NPM/workspace)

#### Local development (npm link):
```sh
cd pegasus_shared_ui && npm run build && npm link
cd ../pegasus-imperfect-prints-site && npm link pegasus_shared_ui
cd ../pegasus-3d-library && npm link pegasus_shared_ui
```

#### Or, install from GitHub (recommended for production):
```sh
npm install "git+https://github.com/your-org/pegasus_shared_ui.git#v0.1.0"
```

### 2. Import Components/Assets

```tsx
import { Button, Card, Input } from 'pegasus_shared_ui';
import Logo from 'pegasus_shared_ui/assets/PegasusImperfectPrintsLogo1.png';
```

### 3. Add to Your Next.js App
- Ensure your app supports importing from local packages or GitHub.
- Use the shared components and assets as you would any other React component or image.

## Versioning & Updates
- Bump the version in `package.json` and tag releases for each update.
- Use [Conventional Commits](https://www.conventionalcommits.org/) for changelog automation.
- Update dependent apps by running `npm update pegasus_shared_ui` or re-linking.

## Contributing
- PRs and issues welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) (to be created).
- All changes should be reflected in the changelog and docs.

## Automation & Raven Readiness
- Future: Add bots/Ravens to check for outdated dependencies and automate updates.
- Document all automation scripts in `/scripts` (to be created).

## Components
- Button, Card, Input, Select, DropdownMenu, Textarea, Separator, etc.
- Navbar and Footer (customizable via props)

## Assets
- Logos, placeholder images, and other branding assets

## Utilities
- `cn` (class name merge utility)

## License
MIT

## Changelog
See [CHANGELOG.md](CHANGELOG.md) for release notes and version history. All major changes should be reflected here.

## Automation Scripts
Future automation (Ravens/bots) and scripts for dependency checks, publishing, and updates will live in `/scripts`. 