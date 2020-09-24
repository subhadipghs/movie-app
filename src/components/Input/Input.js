import React from 'react'
import PropTypes from 'prop-types'
import {StyledInput} from './StyledInput'
/**
 * Input Component
 *
 * #Example Usage:
 *      <Input
 *        type="text"
 *        name="email"
 *        value={email}
 *        changed={(e) => setEmail(e.target.value)}
 *        variant="pill"
 *      />
 *      P.S: variant="pill" for pill type input box
 */
const Input = ({
  type,
  name,
  id,
  placeholder,
  value,
  changed,
  blurred,
  mouseHovered,
  ...rest
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={changed}
      onBlur={blurred}
      onMouseOver={mouseHovered}
      {...rest}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  changed: PropTypes.func,
  blurred: PropTypes.func,
  mouseHovered: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  name: 'default',
  value: '',
  placeholder: 'Enter a placeholder',
  changed: () => {},
}

export {Input}
