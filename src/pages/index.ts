import {setName} from '@/store/state'
import {FC, createElement as h} from 'react'
import {EmptyObject} from 'src/types'
import {useSetup, ref, computed, onMounted, onUnmounted} from 'reactivue'
import * as foo from '@/store/state'

const Index: FC<EmptyObject> = (props) => {
  const state = useSetup((props) => {
    const name = computed(() => (foo.state.name))
    const deepName = computed(() => (foo.state.deep.name))
    const counter = ref(0)
    const increase = () => counter.value += 1
    const addA = () => setName(name.value + 'A')

    onMounted(() => console.log('hello world'))
    onUnmounted(() => console.log('Goodbye World'))

    return {counter, increase, name, deepName, addA}
  }, props)

  const {counter, increase, addA, name} = state

  return (
    h('div', null,
      h('div', {}, counter),
      h('button', {onClick: increase}, 'increase'),
      h('div', {}, 'name'),
      h('div', {}, name),
      h('button', {onClick: addA}, 'add A'),
    )
  )
}

export default Index
