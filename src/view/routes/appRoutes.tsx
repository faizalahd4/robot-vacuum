/**
 * App routers
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES IMPORT
import HomePage from '../pages/homePage';
import Header from '../pages/common/header';

// ROUTER IMPORT
import * as PATH from './constants';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path={PATH.HOME_PATH} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
