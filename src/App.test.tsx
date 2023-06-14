/**
 * App component test cases
 * 
 * @author - Faizal
 * @date - 15th June, 2023 
 */
// GENERIC IMPORT
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders all form fields component', () => {
  render(<App />);
  const xPointFieldElement = screen.queryAllByText('X Point');
  const yPointFieldElement = screen.queryAllByText('Y Point');
  const facingFieldElement = screen.queryAllByText('Facing direction');
  expect(xPointFieldElement.length).toBeGreaterThan(0);
  expect(yPointFieldElement.length).toBeGreaterThan(0);
  expect(facingFieldElement.length).toBeGreaterThan(0);
});

test('check whether all command available', () => {
  render(<App />);
  const moveElement = screen.queryAllByText('Move');
  const leftElement = screen.queryAllByText('Left');
  const rightElement = screen.queryAllByText('Right');
  expect(moveElement.length).toBeGreaterThan(0);
  expect(leftElement.length).toBeGreaterThan(0);
  expect(rightElement.length).toBeGreaterThan(0);
});

test('check all basic form validation', async () => {
  render(<App />);
  const submitButton = screen.getByTestId('submit-form');
  fireEvent.click(submitButton);
  const requiredError = await screen.findAllByText('This field is required');
  const cmdFieldError = await screen.findAllByText('Select atleast one command');

  expect(requiredError.length).toBeGreaterThan(0);
  expect(cmdFieldError.length).toBeGreaterThan(0);
});
