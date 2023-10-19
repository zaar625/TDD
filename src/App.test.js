import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
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