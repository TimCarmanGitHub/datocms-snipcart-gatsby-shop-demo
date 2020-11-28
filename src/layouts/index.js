import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { StaticQuery } from 'gatsby'
import {Button} from 'antd'
import 'antd/dist/antd.css'

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
            <div className="Header__Links">
    <Link menuLinks={site.siteMetadata.menuLinks} />
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
          <Button type="primary">Primary</Button>
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

