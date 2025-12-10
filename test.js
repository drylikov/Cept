
import assert from 'node:assert/strict'
import process from 'node:process'
import test from 'node:test'
import {cept} from './index.js'

test('cept(context, key, callback)', function () {
  const original = process.cwd()
  const stop = cept(process, 'cwd', fake)

  assert.equal(process.cwd(), fake())

  stop()

  assert.equal(process.cwd(), original)
})

function fake() {
  return '~'
}
