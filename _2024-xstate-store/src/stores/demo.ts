import { createStore } from '@xstate/store'

export const demoStore = createStore(
  // Initial context
  { count: 0 },
  // Transitions
  {
    inc: {
      count: context => context.count + 1,
    },
    add: {
      count: (context, event: { num: number }) => context.count + event.num,
    },
  },
)
