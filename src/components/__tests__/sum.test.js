import { sum } from "../sum"

test("test the sum", ()=>{
    const result = sum(3,2);
    expect(result).toBe(5)
})