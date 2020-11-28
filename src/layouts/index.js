import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { StaticQuery } from 'gatsby'


import '../style/index.scss'
import ShoppingCart from "../assets/images/add_shopping_cart-black-18dp.svg"

const Layout = ({ children, site }) => (
  <StaticQuery
  query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `}
  render={data => (
  <div>
    <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
    <div className="Container">
      <div className="Header">
        <div className="Wrap" >
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}
              </Link>
            </h1>
            <div className="Header_Links">
    <Link menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
            <div className="Header__summary snipcart-summary snipcart-checkout">
              <div className="Header__summary__title">
                <img src={ShoppingCart} alt="Add To Shopping Cart" />
              </div>
              <div className="Header__summary__line">
                <span className="snipcart-total-items"></span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Wrap" >
        {children}
      </div>
      <div className="Wrap" >
        <div className="Footer">
          Footer Love 
        </div>
      </div>
    </div>
  </div>  
  )}


  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

