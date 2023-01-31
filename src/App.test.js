import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


test("Should contain the correct text on page" , () => 
{
    render(<App/>);
  const linkElement =  screen.getByText(/Mxolisi Magubane/i);
  expect(linkElement).toBeInTheDocument();
});