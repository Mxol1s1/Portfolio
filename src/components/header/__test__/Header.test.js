import React from "react";

import Header from "../Header";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

let getByTestId;

beforeEach(() =>{
    const component = render(<Header languages={[]}/>);
    getByTestId =  component.getByTestId;
})




test("Name text should be correct", () =>
{
    const nameElement = getByTestId("name");
    expect(nameElement.textContent).toBe("Mxolisi Magubane");
})

test("greeting text should be correct", () =>
{
    const descriptionElement = getByTestId("bio_description");
    expect(descriptionElement.textContent).toBe("Hello, World!");
})

test("summary description text should be correct", () =>
{
    const descriptionElement = getByTestId("summary_description");
    expect(descriptionElement.textContent).toBe("I am a Graduate Software Engineer \
skilled in C#, Java, Python, and web development with a keen eye for detail \
and a love for creating clean and efficient code. \nI am always eager to expand my \
knowledge in the field of software engineering.  \nI do not mind digging into \
boring work, as more often than not, it is where the details that matter are found.");
})




