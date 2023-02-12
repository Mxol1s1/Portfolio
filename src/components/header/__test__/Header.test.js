import React from "react";

import Header from "../Header";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

let getByTestId;

beforeEach(() =>{
    const component = render(<Header languages={[]}/>);
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



// test("Correct icons link correspond with correct image tag source", () =>{
//   const csharp_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
//   const java_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
//   const python_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
//   const javascript_icon ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
//   const css_icon ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
//   const html_icon ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
//   const react_icon ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"


// })
