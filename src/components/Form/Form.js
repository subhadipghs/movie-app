import React from 'react'
import PropTypes from 'prop-types'
import StyledForm from './StyledForm'

const Form = ({
  formName,
  formId,
  submitted,
  action,
  method,
  children,
  ...rest
}) => {
  return (
    <StyledForm
      name={formName}
      id={formId}
      action={action}
      method={method}
      onSubmit={submitted}
      {...rest}
    >
      {React.Children.map(children, childElement => {
        return React.cloneElement(childElement)
      })}
    </StyledForm>
  )
}

Form.propTypes = {
  formName: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  submitted: PropTypes.func.isRequired,
  action: PropTypes.string,
  method: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Form.defaultProps = {
  formName: '',
  formId: '',
  submitted: () => {},
}

export {Form}
