import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './Header'
import './layout.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Issue tracker"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    >
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
      <script
        src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
        id="snipcart"
        data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0"
      />
      <link
        href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
        type="text/css"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1200,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
