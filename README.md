# Logos Next.js + TailwindCSS Template

A starter template built with **Next.js** and **TailwindCSS**.

You can use `pnpm`, `yarn`, or `npm` to follow the steps below.

## Getting Started

### Install dependencies and run the development server

```bash
pnpm install
pnpm dev
```

### Production build and start

```bash
pnpm build
pnpm start
```

### Static export

To enable static export, update `next.config.js`:

```javascript
// next.config.js
module.exports = () => {
  const plugins = [withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), {
    // for static builds
    output: 'export',
    ...
```

Then build the project:

```bash
pnpm build
# Run any web server you prefer and host the /out directory.
# Below is an example using http-server (install it globally first):
http-server out
```

## CI/CD

- [CI builds](https://ci.infra.status.im/job/website/job/psf.logos.co/) `master` and pushes to `deploy-master` branch, which is hosted at <https://psf.logos.co/>.
- [CI builds](https://ci.infra.status.im/job/website/job/dev-psf.logos.co/) `develop` and pushes to `deploy-develop` branch, which is hosted at <https://dev-psf.logos.co/>.

The hosting is done using [Caddy server with Git plugin for handling GitHub webhooks](https://github.com/status-im/infra-misc/blob/master/ansible/roles/caddy-git).

Information about deployed build can be also found in `/build.json` available on the website.
