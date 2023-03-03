import Products from "./components/Products";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import Nav from "./components/Nav";
import Cart from "./Pages/Cart";
import SingleProduct from "./components/SingleProduct";


function App() {
  return (
    <>
    <Router>
      <ToastContainer/>
      <Nav/>
      <Routes>
        <Route path={`/`} exact element={<Products/>} />
        <Route path={`/singleProduct/:id`} element={<SingleProduct/>}/>
        <Route path={`/cart`} element={<Cart/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
