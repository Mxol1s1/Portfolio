import React from "react";

import Work from "../Work";

import { render, within } from "@testing-library/react";

import "@testing-library/jest-dom";

let getByTestId;

beforeEach(() =>{
    const component = render(<Work/>);
    getByTestId =  component.getByTestId;
})

test("Must have 3 projects listed", ()=>{
    const linkElement = getByTestId("projects")
    const { getAllByRole } = within(linkElement)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(4)
    
})


