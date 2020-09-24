import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  place-items: center;
  margin: ${props => `${props.margin}rem` || '0'};
`

export default Grid
