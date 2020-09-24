import styled from 'styled-components'

const StyledInput = styled.input`
  border-radius: ${props => (props.variant === 'pill' ? '1.5rem' : '0')};
  border: ${props => (props.noBorder ? 'none' : '1px solid var(--primary)')};
  padding: ${props => props.padding || '0.5rem'};
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || '50%'};
  cursor: ${props => (props.type === 'sunmit' ? 'pointer' : 'auto')};
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`

export {StyledInput}
