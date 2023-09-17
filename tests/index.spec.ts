import { sleep } from '@root/src'

test('sleep 3000ms', async () => {
  const ms = 3000
  const d1 = new Date().getTime()
  await sleep(ms)
  const d2 = new Date().getTime()
  expect(d2 - d1).toBeGreaterThanOrEqual(3000)
})
