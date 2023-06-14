/**
 * Cube component test cases
 * 
 * @author - Faizal
 * @date - 15th June, 2023 
 */
// GENERIC IMPORT
import { render, screen } from '@testing-library/react';
import { ThemeProvider }  from '@mui/material/styles';
import Cube from '.';
import Theme from "../../../theme"; 

test('renders cube component', () => {
  render(<ThemeProvider theme={Theme}><Cube cubeId='0-0'/></ThemeProvider>);
  const element = screen.queryByText(/0, 0/i);
  expect(element).toBeInTheDocument();
});

test('renders cube component not visible', () => {
  render(<ThemeProvider theme={Theme}><Cube cubeId='0-1'/></ThemeProvider>);
  const element = screen.queryByText(/2-2/i);
  expect(element).not.toBeInTheDocument();
});