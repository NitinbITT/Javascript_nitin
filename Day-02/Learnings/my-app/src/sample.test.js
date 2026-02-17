const sum=require("./sample.js")
test("sum of 1 and 2",()=>{
    expect(sum(1,2)).toBe(3)
})