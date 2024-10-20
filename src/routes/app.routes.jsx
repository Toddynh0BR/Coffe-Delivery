import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { Checkout } from '../pages/checkout';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/check" element={<Checkout />}/>
    </Routes>
  )
}