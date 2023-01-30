import React from "react";

import Header from "../Header";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() =>{
    const component = render(<Header/>);
    getByTestId =  component.getByTestId;
})


test("name should be correct", () =>
{
    const nameElement = getByTestId("name");
    expect(nameElement.textContent).toBe("Mxolisi Magubane");
})

test("description should be correct", () =>
{
    const descriptionElement = getByTestId("bio_description");
    expect(descriptionElement.textContent).toBe("Hello, World!");
})
