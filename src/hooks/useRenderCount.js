import React from 'react'
/**
 * Count the number of times component render
 * @param  {string} component : Component Name
 * @return void
 */
function useRenderCount(component = 'Component') {
  const ref = React.useRef(0)
  React.useEffect(() => {
    console.log(`${component} rendered ${ref.current++} times`)
  }, [])
}

export default useRenderCount
