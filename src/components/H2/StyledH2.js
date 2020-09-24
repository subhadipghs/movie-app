import styled from 'styled-components'

const StyledH2 = styled.h2`
  color: ${props => props.color || 'var(--black)'};
  background-color: ${props => props.background || 'var(--white)'};
  font-weight: bold;
`

export default StyledH2
