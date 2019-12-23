# strv-gatsby-theme-blog

## Quick Start

Install the theme and its dependencies:

```shell
mkdir my-site
cd my-site
yarn init
# install strv-gatsby-theme-blog and it's dependencies
yarn add gatsby react react-dom strv-gatsby-theme-blog
```

Create directories for blog markdown files and assets, for example:

```shell
mkdir -p content/{blog,assets}
```

Add the theme to your `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'strv-gatsby-theme-blog',
      options: {
        contentPath: 'content/blog',
        assetPath: 'content/assets',
        siteUrl: 'http://example.com', // required
      },
    },
  ],
}
```

Run your gatsby site:

```shell
yarn gatsby develop
```

## What's included

- `gatsby-plugin-typescript`
- `gatsby-plugin-react-helmet` for working with <head> elements
- `gatsby-remark-images` & `gatsby-plugin-sharp` for image processing
- `gatsby-source-filesystem` for sourcing data from file system
- `gatsby-transformer-remark` for Markdown processing
- `gatsby-plugin-sitemap` for sitemap generation
