interface MdxArticle {
  frontmatter: {
    title: string
    date: string
    description: string
    author: string
    thumbnailUrl: string
  }
  fields: {
    slug: string
  }
  body: string
}

interface SiteMetadata {
  siteUrl: string
}

export { MdxArticle, SiteMetadata }
