import React from 'react'
import StyledH2 from './StyledH2'
import PropTypes from 'prop-types'

function H2({color, background, children}) {
  return <StyledH2>{children}</StyledH2>
}

H2.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
}

H2.defaultProps = {
  color: 'black',
  background: 'white',
  children: '',
}

export {H2}
