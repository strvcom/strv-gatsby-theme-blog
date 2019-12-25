import React, { SFC } from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

type MarkdownRemark = {
  frontmatter: {
    title: string
    date: string
  }
  body: string
}

type Props = {
  data: {
    mdx: MarkdownRemark
  }
}

const ArticleTemplate: SFC<Props> = ({ data }) => {
  return (
    <>
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
    }
  }
`
