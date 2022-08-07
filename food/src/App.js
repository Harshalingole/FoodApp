import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';
import SubCategory from './Pages/SubCategory/SubCategory';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Category />} />
          <Route path="/category" element={<Category />} />
          <Route path="/subcategory" element={<SubCategory />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
