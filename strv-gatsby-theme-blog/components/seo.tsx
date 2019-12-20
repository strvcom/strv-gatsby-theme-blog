import React, { FC } from 'react'
import Helmet from 'react-helmet'

type Props = {
  title: string
}

const SEO: FC<Props> = ({ title, children }) => {
  const structuredData = []

  return (
    <Helmet title={title}>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {children}
    </Helmet>
  )
}

export default SEO
