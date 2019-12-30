import React, { FC } from 'react'
import Helmet from 'react-helmet'

type Props = {
  article: MdxArticle
  siteMetadata: SiteMetadata
}

const ArticleSEO: FC<Props> = ({ article, children, siteMetadata }) => {
  const title = article.frontmatter.title
  const description = article.frontmatter.description
  const articleUrl = siteMetadata.siteUrl + article.fields.slug

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    url: articleUrl,
    name: title,
    alternateName: title,
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: article.frontmatter.thumbnailUrl,
    },
    description: description,
    author: {
      '@type': 'Person',
      name: article.frontmatter.author,
    },
    datePublished: article.frontmatter.date,
    dateModified: article.frontmatter.date,
    mainEntityOfPage: {
      '@type': 'WebSite',
      '@id': siteMetadata.siteUrl,
    },
  }

  return (
    <Helmet title={title}>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <meta name="description" content={description} />
      {children}
    </Helmet>
  )
}

export default ArticleSEO
