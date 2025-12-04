import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Pricing from './Pricing';
import Product from './Product';
import PageNotFound from './PageNotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />{' '}
        <Route path="/product" element={<Product />} />{' '}
        <Route path="/pricing" element={<Pricing />} />{' '}
        <Route path="*" element={<PageNotFound />} />{' '}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
