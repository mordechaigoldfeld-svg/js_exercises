import assert from 'node:assert/strict';

import {describe,it} from "node:test"

import { calculateDiscount } from './store-calc.js';


describe("calculateDiscount",()=>{
  it("returns the new price with discount",()=>{
    assert.strictEqual(calculateDiscount(100,20),80)
  })
  it("returns the same price if discount === 0",()=>{
    assert.strictEqual(calculateDiscount(100,0),0)
  })
  it("throw error if discount <0 or >100",()=>{
    assert.throws(calculateDiscount(100, -10), { message:"Invalid discount"})
  })
})