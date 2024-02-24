// tests/datachannel.test.ts
import { describe, it, expect } from 'vitest'
import { PeerConnection } from 'node-datachannel'

describe('node-datachannel', () => {
  it('should be importable', () => {
    expect(PeerConnection).toBeDefined()
  })
})
