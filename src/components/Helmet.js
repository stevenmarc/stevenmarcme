import React from 'react'
import ReactHelmet from 'react-helmet'

const title = 'StevenMarc'
const description = 'My portfolio website'
const theme = ''

const Helmet = () => (
  <ReactHelmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content={theme.background} />

    <meta itemProp="name" content={title} />
    <meta itemProp="description" content={description} />

    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:site_name" content={title} />
    <meta name="og:locale" content="en_US" />
    <meta name="og:type" content="website" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    <link rel="apple-touch-icon" sizes="180x180" />
    <link rel="icon" type="image/png" sizes="32x32" />
    <link rel="icon" type="image/png" sizes="16x16" />

    <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossOrigin="anonymous"
    />
  </ReactHelmet>
)

export default Helmet
