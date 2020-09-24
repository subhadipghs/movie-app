import styled from 'styled-components'

const Wrapper = styled.div`
  width: 80rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px var(--dark-gray);
  display: flex;
  height: auto;
  background-color: var(--white);
  & > * {
    margin: 0.5rem;
  }
`

export default Wrapper
