import React from "react";

import NavBar from "../NavBar";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

let getByTestId;

const baseUrl = "http://localhost/";

beforeEach(() => 
{
    const component =  render(<NavBar/>);
    getByTestId = component.getByTestId;
})



test("should have a correct home link", ()=>{
    const linkElement = getByTestId("home");
    expect(linkElement.href).toBe(baseUrl)
})

test("should have correct about link ", () =>{
    const linkElement = getByTestId("about");
    expect(linkElement.href).toBe(baseUrl+"about");
})

test("should have correct projects link", () =>{
    const linkElement = getByTestId("projects");
    expect(linkElement.href).toBe(baseUrl+"projects");
})

test("should have the correct contact link", () =>{
    const linkElement = getByTestId("contact");
    expect(linkElement.href).toBe(baseUrl+"contact");
})

