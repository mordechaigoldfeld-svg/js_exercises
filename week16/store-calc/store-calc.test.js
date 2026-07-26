import assert from 'node:assert/strict';

import {describe,it} from "node:test"

 
import { calculateDiscount, applyTax, calculateCartTotal, validPrice, formatPrice } from './store-calc.js';


describe("verification calculateDiscount function",()=>{
  it("returns the new price with discount",()=>{
    assert.strictEqual(calculateDiscount(100,20),80)
  })
  it("returns the same price if discount === 0",()=>{
    assert.strictEqual(calculateDiscount(100,0),100)
  })
  it("throw error if discount <0 or >100",()=>{
    assert.throws(()=>calculateDiscount(100,-10),{message:"Invalid discount"})
  })
})



describe("verification applyTax function",()=>{
  it("returns the new price with tax",()=>{
    assert.strictEqual(applyTax(100,0.17),117)
  })
  it("returns the original price if tax === 0",()=>{
    assert.strictEqual(applyTax(100,0),100)
  })
  it("throws error if the price or the tax are negative",()=>{
    assert.throws(() => applyTax(100, -10), { message: "invalid negative numbers" })
  })
  it("throws error if not a number",()=>{
    assert.throws(() => applyTax("a", 3), { message: "price and tax must be a number" })
  })
})



describe("verification calculateCart function",()=>{
  it("throws error if array is empty",()=>{
    assert.throws(() => calculateCartTotal([]), { message: "error array cannot be empty" })
  })
  it("throws error if array is empty", () => {
    assert.throws(() => calculateCartTotal(), { message: "error array cannot be empty" })
  })
  it("returns the total amount of  the cart",()=>{
    assert.strictEqual(calculateCartTotal([{ price: 5, quantity: 2 }, { price: 4, quantity: 2 }]),18)
  })
})



describe("verification validPrice function",()=>{
  it("return true if valid price",()=>{
    assert.strictEqual(validPrice(35),true)
  })
  it("throws error if price not a number",()=>{
    assert.throws(()=>validPrice("a"),{message:"price must be a number"})
  })
  it("throws error if price is negative", () => {
    assert.throws(() => validPrice(-34), { message: "price must be positive" })
  })
  it("returns true if price === 0",()=>{
    assert.strictEqual(validPrice(0),true)
  })
})


describe("verification formatPrice function",()=>{
  it("returns the number whith two two decimal numbers",()=>{
    assert.strictEqual(formatPrice(100),"₪100.00")
  })
  it("returns the number whith two two decimal numbers", () => {
    assert.strictEqual(formatPrice(49.9), "₪49.90")
  })
  it("returns the number whith two two decimal numbers", () => {
    assert.strictEqual(formatPrice(153.996), "₪154.00")
  })
})


