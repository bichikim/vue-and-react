import {setName} from '@/store/state'
import {FC, createElement as h, useEffect} from 'react'
import {EmptyObject} from 'src/types'
import {useSetup, ref, computed, onMounted, onUnmounted} from 'reactivue'
import * as foo from '@/store/state'
import {useRouter} from 'next/router'

const Foo: FC = (props) => {
  return (
    h('div', null, props.children)
  )
}

const Index: FC<EmptyObject> = (props) => {
  const router = useRouter()
  const state = useSetup(() => {
    const name = computed(() => (foo.state.name))
    const deepName = computed(() => (foo.state.deep.name))
    const counter = ref(0)
    const increase = () => counter.value += 1
    const addA = () => setName(name.value + 'A')
    const goFoo = () => router.push('foo')

    onMounted(() => console.log('hello world'))
    onUnmounted(() => console.log('Goodbye World'))

    return {counter, increase, name, deepName, addA, goFoo}
  }, props)

  const {counter, increase, addA, name, goFoo} = state

  useEffect(() => {
    console.log('update go foo?')
  }, [goFoo])

  return (
    h('div', null,
      h('div', {}, counter),
      h('button', {onClick: increase}, 'increase'),
      h('div', {}, 'name'),
      h(Foo, {},
        h(Foo, {}, counter),
        ),
      h('div', {}, name),
      h('button', {onClick: addA}, 'add A'),
      h('button', {onClick: goFoo}, 'go foo'),
    )
  )
}

export default Index
