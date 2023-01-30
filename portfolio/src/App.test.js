import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


test("On page started, text diplay say 'I am here'" , () => 
{
    render(<App/>);

  const linkElement =  screen.getByText(/I am here/i);
  expect(linkElement).toBeInTheDocument();
});