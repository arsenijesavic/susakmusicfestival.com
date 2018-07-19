import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'
import { Header } from '../components'

const Layout = ({ children }) => (
  <Fragment>
    <Head />
    <Body children={children} />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout

const Head = () => (
  <Helmet>
    <link
      href="https://fonts.googleapis.com/css?family=Playfair+Display:700"
      rel="stylesheet"
    />
    {/* <title>{title}</title>

    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    <meta property="og:url" content={homepage} />
    <meta property="og:image" content={image} />
    <meta property="og:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={title} />
    <meta property="og:see_also" content={homepage} />

    <meta name="twitter:card" content={description} />
    <meta name="twitter:url" content={homepage} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="static/images/muzikon-logo-icon.jpg"
    /> */}
  </Helmet>
)

const Body = ({ children }) => (
  <StickyContainer>
    <Sticky>
      {({ style, distanceFromTop }) => (
        <Header style={style} isVisible={Math.abs(distanceFromTop) > 600} />
      )}
    </Sticky>
    {children}
  </StickyContainer>
)
