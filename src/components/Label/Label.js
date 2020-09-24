import React from 'react'
import PropTypes from 'prop-types'

function Label({htmlFor, children, id, ...rest}) {
  return (
    <label
      htmlFor={htmlFor}
      id={id}
      style={{
        display: 'inline-block',
      }}
      {...rest}
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export {Label}
