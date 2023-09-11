import { cleanup } from '@testing-library/vue'
// import { matchers } from '@testing-library/jest-dom/matchers' //The teacher sad to do like this but comes out a error msg. So i found onn the Q&A this solution below witch works
import * as matchers from '@testing-library/jest-dom/matchers'
import { expect, afterEach } from 'vitest'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})
