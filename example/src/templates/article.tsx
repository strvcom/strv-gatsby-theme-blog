import React, { FC } from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import ArticleSEO from 'strv-gatsby-theme-blog/components/article-seo'
import { MdxArticle, SiteMetadata } from 'strv-gatsby-theme-blog/common/types'

type Props = {
  data: {
    mdx: MdxArticle
    site: {
      siteMetadata: SiteMetadata
    }
  }
}

const ArticleTemplate: FC<Props> = ({ data }) => {
  return (
    <>
      <ArticleSEO article={data.mdx} siteMetadata={data.site.siteMetadata} />
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>
        <i>Published on {data.mdx.frontmatter.date}</i>
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
