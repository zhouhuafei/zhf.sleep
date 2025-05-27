sleep.timer = null

function sleep (ms: number) {
  return new Promise(resolve => {
    sleep.timer = setTimeout(resolve, ms)
  })
}

console.log('xxx')
export { sleep }
