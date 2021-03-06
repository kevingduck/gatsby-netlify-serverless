import React from 'react'
import { Link } from 'gatsby'
const netlifyIdentity = require('netlify-identity-widget')

export default class Header extends React.Component {
  componentDidMount() {
    netlifyIdentity.init()
  }

  render() {
    return (
      <div
        style={{
          background: 'lightblue',
          marginBottom: '1rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            maxWidth: '1200px',
            padding: '1rem 1.0875rem',
            justifyContent: 'space-between'
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Issue Tracker
            </Link>
          </h1>
          <div data-netlify-identity-menu />
        </div>
      </div>
    )
  }
}
