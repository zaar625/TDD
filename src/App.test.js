import { render, screen, fireEvent } from '@testing-library/react';
import { replaceCamelWithSpaces } from './App';
import App from './App';

test('button has correct initail color, and updates when clicked', () => {
  render(<App/>);
  
  // find an element with a role of butto and text of 'Change to blue'
  const colorButton = screen.getByRole('button',{name:'Change to blue'});

  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor:'red'})
});

test('button turns blue when clicked', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button',{name:'Change to blue'});

  expect(colorButton).toHaveStyle({backgroundColor:'red'});

  //click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});

  //expect the button text to be 'Change to red'

  expect(colorButton).toHaveTextContent('Change to red')

})

test('initial conditions', () => {
  render(<App/>)
  //check that the button starts out enabled.
  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox  = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('CheckBox disables button on first click and enables on second click', () => {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox',{name: 'Disable button'});
  const colorButton = screen.getByRole('button',{name:'Change to blue'});

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

describe('space before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces("Red")).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces("MidiumVioletRed")).toBe('Midium Violet Red');
  });
})