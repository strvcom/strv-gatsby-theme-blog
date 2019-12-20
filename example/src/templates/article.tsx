import React, { SFC } from 'react'
import { graphql } from 'gatsby'

type MarkdownRemark = {
  frontmatter: {
    title: string
    date: string
  }
  fields: {
    slug: string
  }
  excerpt: string
  html: string
}

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
}

const ArticleTemplate: SFC<Props> = ({ data }) => {
  return (
    <>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>
        <i>Published on {data.markdownRemark.frontmatter.date}</i>
      </p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
  }
`
