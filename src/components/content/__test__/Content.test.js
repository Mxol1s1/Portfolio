import React from "react";

import Content from "../Content";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

let getByTestId;

beforeEach(() =>{
    const component = render(<Content />);
    getByTestId =  component.getByTestId;
})


test("About text should be correct", () =>
{
    const nameElement = getByTestId("about");
    expect(nameElement.textContent).toBe("There is not really much to say - I don't really do much.\n\
I was born and raised in Durban, South Africa and have stayed put ever since.\n\
While in high school, I fell in love with the STEMS and discovered that solving math problems\n\
was actually more fun than beating King Of Fighters 2000's Final Boss (Good times though).\n\
Finished high school with my earned distinctions in Maths and Science and went off to varsity to study Pharmacy.\n\
You probably asking why Pharmacy - right? Well, the truth is I have no idea myself.\n\
I did Pharmacy till  my final year but, before I could finish, I got seduced by programming. I then made \n\
the most important and biggest decision of my life, that affected not just me but everyone around me\n\
family, friends, foes - I bet even God farted a bit. Yes, I made  a career pivot and pursued the world of\n\
of programming and, between then and now, I will say I am very happy I made that decision.");
})

test("Hobbies description text 1 should be correct", () => {
    const descripstionElement =  getByTestId("hobby_desc1")
    expect(descripstionElement.textContent).toBe("I love playing fighting games and open world games\n\
particulary fantasy and action genres - NO FIFA! I hate \
soccer/football period.")
})

test("Hobbies description text 2 should be correct", () => {
    const descriptionElement = getByTestId("hobby_desc2")
    expect(descriptionElement.textContent).toBe("I am not sure if I can call it a hobby but I have \
been posting some C# content to an anonymous channel between me and you \
- it's actually called Fall3nWorldStudios.\n\ It not something I took seriously\
 till people started to find it useful")
})