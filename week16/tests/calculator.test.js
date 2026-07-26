import  assert  from "node:assert/strict";
import { add } from "../calculator.js";
import { describe, it, test } from "node:test";


describe("calculator unit test",()=>{
    test("add function returns sum of a and b", ()=>{
        const  result = add(3,5);
        assert.equal(result,8)
    })
    test("add throws error if args are not number",()=>{
      assert.throws(()=> add("a",3),{message:"string error"})
    })
})