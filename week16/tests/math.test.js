import { describe, it } from "node:test";
import { isEven,max, average, toTitleCase,filterEvenNumbers } from "../math.js";
import assert from "node:assert/strict";



describe("isEven",()=>{
  it("returns true if num is even",()=>{
    assert.strictEqual(isEven(4),true);
  })
  it("returns false if num not even",()=>{
    assert.strictEqual(isEven(5),false)
  })
  it("throws if not a number",()=>{
    assert.throws(()=>isEven("a"),{message:"string error"})
  })
})


describe("max",()=>{
  it("returns the max form a and b",()=>{
    assert.strictEqual(max(7,3),7)
  })
  it("if not a number return error",()=>{
    assert.throws(()=>max("a",7),{message:"string Error"})
  })
})



describe("average",()=>{
  it("returns the average of array",()=>{
    assert.strictEqual(average([1,2,3,4]),2.5)
  })
  it("error if array is empty",()=>{
    assert.throws(()=>average([]),{message:"error empty list"})
  })
})


describe("toTitleCase",()=>{
  it("returns the word with firstletter upper",()=>{
    assert.strictEqual(toTitleCase("hello world"),"Hello World ")
  })
  it("error if not word",()=>{
    assert.throws(() => toTitleCase(), { message:"word cannot be empty"})
  })
})


