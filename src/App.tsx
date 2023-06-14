/**
 * Root file
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import { ThemeProvider } from '@mui/material/styles';

// ROUTER IMPORT
import AppRoutes from './view/routes/appRoutes';

// THEME IMPORT
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes/>
    </ThemeProvider>
  );
}

export default App;
