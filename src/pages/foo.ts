import {createElement as h, useCallback, useContext} from 'react'
import {useRouter} from 'next/router'

const Foo = () => {
  const router = useRouter()

  const handleGoHome = useCallback(() => {
    router.push('/')
  }, [router])

  return h('button', {onClick: handleGoHome}, 'home')
}

export default Foo
