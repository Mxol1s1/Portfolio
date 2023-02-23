import React from "react";

import Contact from "../Contact";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

let getByTestId;

beforeEach(() =>{
    const component = render(<Contact socials={[]} />);
    getByTestId =  component.getByTestId;
})

test("email should be correct" ,() => {
    const linkElement = getByTestId("email")
    expect(linkElement.textContent).toBe("mxomag074@gmail.com")
   
})

test("number should be correct" ,() => {
    const linkElement = getByTestId("number")
    expect(linkElement.textContent).toBe("0604377595")
   
})