import { expectTypeOf, test } from 'vitest'

import { useBlockTransactionCount } from './useBlockTransactionCount.js'

test('select data', async () => {
  const result = useBlockTransactionCount({
    query: {
      select(data) {
        return data
      },
    },
  })
  expectTypeOf(result.data).toEqualTypeOf<number | undefined>()
})
