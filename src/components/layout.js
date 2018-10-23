import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import MyHeader from './header'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h2
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'rebeccapurple',
            }}
            to={'/'}
          >
            Blog by Gandhi
          </Link>
        </h2>
      )
    } else {
      header = (
        <h2
          style={{
           ...scale(1.5),
           marginBottom: rhythm(1.5),
           marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'rebeccapurple',
            }}
            to={'/'}
          >
            Blog by Gandhi
          </Link>
        </h2>
      )
    }
    return (
      <div>
        <MyHeader siteTitle='Blog by Gandhi' />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default Template
