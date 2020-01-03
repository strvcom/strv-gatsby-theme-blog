export interface MdxArticle {
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

export interface SiteMetadata {
  siteUrl: string
}
