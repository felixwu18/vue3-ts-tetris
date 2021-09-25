
import { foo } from '../src/index'

test('init jest', () => {
    foo()
    expect(true).toBe(true)
})