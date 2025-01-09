import Contact from "../Contact"
import { render,screen } from "@testing-library/react";

describe("testing contact page",()=>{
    test("should headings count is correct",()=>{
        render(<Contact/>);
    
        const headings = screen.getAllByRole("heading");
    
        expect(headings.length).toBe(3);
    })
})
