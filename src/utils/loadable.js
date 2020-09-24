import React, {lazy, Suspense} from 'react'
/**
 * loadable is used for lazy laoding of components
 * #ExampleUsage:
 *       loadable(
 *         import('components/App'),
 *         {
 *           fallback = <LoadingComponent />
 *          }
 *       )
 */

const loadable = (importFn, {fallback = null} = {fallback: null}) => {
  const LazyComponent = lazy(importFn)
  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export {loadable}
