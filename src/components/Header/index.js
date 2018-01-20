import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      // background: 'rebeccapurple',
      marginBottom: '1.45rem',
      borderBottom: '.02rem solid'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          tophsCelestial
        </Link>
      </p>
    </div>
  </div>
)

export default Header
