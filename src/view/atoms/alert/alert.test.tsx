/**
 * Alert component test cases
 * 
 * @author - Faizal
 * @date - 15th June, 2023 
 */
// GENERIC IMPORT
import { render, screen } from '@testing-library/react';
import Alert from './';

test('renders alert component', () => {
  render(<Alert severity="success" isShow content='Report'/>);
  const element = screen.getByText(/Report/i);
  expect(element).toBeInTheDocument();
});

test('check whether alert component hidden', () => {
  render(<Alert severity="success" isShow={false} content='Report'/>);
  const element = screen.queryByRole('alert');
  expect(element).not.toBeInTheDocument();
});

test('check whether alert component visible', () => {
  render(<Alert severity="success" isShow content='Report'/>);
  const element = screen.queryByRole('alert');
  expect(element).toBeInTheDocument();
});