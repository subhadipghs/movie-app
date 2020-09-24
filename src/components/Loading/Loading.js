import styled from 'styled-components'

const Loading = styled.div`
  border: 4px solid var(--black);
  border-radius: 50%;
  border-top: 4px solid var(--light-gray);
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

export default Loading
