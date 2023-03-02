import React from "react";

import Content from "../Content";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

let getByTestId;

beforeEach(() =>{
    const component = render(<Content />);
    getByTestId =  component.getByTestId;
})




test("Hobbies description text 1 should be correct", () => {
    const descripstionElement =  getByTestId("hobby_desc1")
    expect(descripstionElement.textContent).toBe("I love playing fighting games like Mortal Kombat, Injustice \
Tekken and open world games such Watch dogs, Sleeping dogs, GTA, COD etc.")
})

test("Hobbies description text 2 should be correct", () => {
    const descriptionElement = getByTestId("hobby_desc2")
    expect(descriptionElement.textContent).toBe("I am not sure if I can call it a hobby but I have \
been posting some C# content to an anonymous channel - between me and you \
- it's actually called Fall3nWorldStudios. It not something I took seriously \
till people started to find it useful")
})