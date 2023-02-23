import React from "react";

import Work from "../Work";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

let getByTestId;

beforeEach(() =>{
    const component = render(<Work/>);
    getByTestId =  component.getByTestId;
})

test("portfolio description should be correct" ,() => {
    const linkElement = getByTestId("portfolio")
    expect(linkElement.textContent).toBe("This is a React portfolio website, \
showcasing projects, skills and personal information. The site is responsive and easy to navigate, \
with a contact form for easy communication. The goal is to share my work and connect \
with potential employers or collaborators.")
})

test("game description should be correct" ,() => {
    const linkElement = getByTestId("game")
    expect(linkElement.textContent).toBe("Fast- paced online game where you play as a square jelly \
avoiding obstacles while collecting points, to dominate the leader board against other players globally.")
})

test("channel description should be correct" ,() => {
    const linkElement = getByTestId("channel")
    expect(linkElement.textContent).toBe("I am responsible for curating and presenting useful, code-related, content in \
a variety of programming languages including C#, Java, Python, Javascript etc.")
})

