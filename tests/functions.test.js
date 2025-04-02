import { vitest } from "vitest";
import {describe, test, it, expect} from "vitest"
import { add, subtract, multiply, divide } from "../src/functions";

describe('add', ()=>{
    it('should return the addition of 2 numbers', ()=>{
        expect(add(2,2)).toBe(4);
        expect(add(44,56)).toBe(100);
        expect(add(-4,11)).toBe(7);
        expect(add(0,0)).toBe(0);
        expect(add(-8,-22)).toBe(-30);
    })
})

describe('subtract', ()=>{
    it('should return the subtraction of 2 numbers', ()=>{
        expect(subtract(2,2)).toBe(0);
        expect(subtract(87,99)).toBe(-12);
        expect(subtract(-4,11)).toBe(-15);
        expect(subtract(0,0)).toBe(0);
        expect(subtract(-14,-24)).toBe(10);
    })
})

describe('multiply', ()=>{
    it('should return the multiplication of 2 numbers', ()=>{
        expect(multiply(2,2)).toBe(4);
        expect(multiply(17,-3)).toBe(-51);
        expect(multiply(0,7)).toBe(0);
        expect(multiply(10,100)).toBe(1000);
        expect(multiply(32,-22)).toBe(-704);
    })
})


describe('divide', ()=>{
    it('should return the division of 2 numbers', ()=>{
        expect(divide(2,2)).toBe(1);
        expect(divide(50,-5)).toBe(-10);
        expect(divide(0,7)).toBe(0);
        expect(divide(32,0)).toBe("Cannot divide by zero");
        expect(divide(-18,-18)).toBe(1);
    })
})


