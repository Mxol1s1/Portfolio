import React from "react";

import Header from "../Header";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

let getByTestId;

beforeEach(() =>{
    const component = render(<Header/>);
    getByTestId =  component.getByTestId;
})


test("Name should be correct", () =>
{
    const nameElement = getByTestId("name");
    expect(nameElement.textContent).toBe("Mxolisi Magubane");
})

test("Description should be correct", () =>
{
    const descriptionElement = getByTestId("bio_description");
    expect(descriptionElement.textContent).toBe("Hello, World!");
})
