/**
 * Button component test cases
 * 
 * @author - Faizal
 * @date - 15th June, 2023 
 */
// GENERIC IMPORT
import { render, screen } from '@testing-library/react';
import { ThemeProvider }  from '@mui/material/styles';
import Theme from "../../../theme"; 
import Button from '.';

test('renders button component', () => {
  render(<ThemeProvider theme={Theme}><Button variant="contained" type="submit" label='Report'/></ThemeProvider>);
  const element = screen.getByText(/Report/i);
  expect(element).toBeInTheDocument();
});