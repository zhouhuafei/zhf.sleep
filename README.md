> 本项目是基于 https://github.com/zhouhuafei/npm-publish-ts/tree/build-ts-use-gulp-babel 项目改造

## 使用案例
```typescript
import { sleep } from 'zhf.sleep'

async function fn () {
  await sleep(3000)
  console.log('3秒后会打印这条日志')
}

fn()

// 清理定时器，如此，3秒后则不会打印上述日志。
// clearTimeout(sleep.timer)
```
```typescript
import { sleep } from 'zhf.sleep'

let timer = null
async function fn () {
  const promise = sleep(3000)
  timer = sleep.timer
  await promise
  console.log('3秒后会打印这条日志')
}

fn()

// 清理定时器，如此，3秒后则不会打印上述日志。
// clearTimeout(timer)
```
