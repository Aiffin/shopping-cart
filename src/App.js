import Products from "./components/Products";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from "./components/Nav";
import Cart from "./Pages/Cart";


function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path={`/`} exact element={<Products/>} />
        <Route path={`/cart`} element={<Cart/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
