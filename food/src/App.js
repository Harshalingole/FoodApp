import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import './App.css';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';

// import Cart from './Pages/Cart/Cart';
// import SubCategory from './Pages/SubCategory/SubCategory';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectData,setResData } from './Redux/CartCount';
const Cart = lazy(() => import('./Pages/Cart/Cart'));
const SubCategory = lazy(() => import('./Pages/SubCategory/SubCategory'));

const baseUrl = "http://localhost:4000"


function App() {
  const resData = useSelector(selectData)
  const dispatch = useDispatch()

  useEffect(() =>{
    const fetchpost = async () => {
      try {
        await axios.get(baseUrl).then((res) => {
          dispatch(setResData(JSON.parse(JSON.stringify(res.data.results)) ))
        })
      } catch (error) {
        console.log('Error Msg:',error);
      }
    }
    fetchpost()
  },[])

  console.log(resData);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Category />} />
          {/* Lazy Loadinng SubCategory */}

          <Route
            path="/subcategory"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SubCategory />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cart />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
