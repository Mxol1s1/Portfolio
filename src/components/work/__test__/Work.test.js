import React from "react";

import Work from "../Work";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

let getByTestId;

beforeEach(() =>{
    const component = render(<Work/>);
    getByTestId =  component.getByTestId;
})

test("test component render" ,() => {
    const linkElement = getByTestId("work")
    expect(linkElement.textContent).toBe("Work")
})