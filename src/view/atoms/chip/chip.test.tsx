/**
 * Chip component test cases
 * 
 * @author - Faizal
 * @date - 15th June, 2023 
 */
// GENERIC IMPORT
import { render, screen } from '@testing-library/react';
import Chip from '.';

test('renders chip component', () => {
  render(<Chip label='Move' size="small" />);
  const element = screen.getByText(/Move/i);
  expect(element).toBeInTheDocument();
});