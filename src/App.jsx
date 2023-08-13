import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './pages/Home';
import {Detail} from './pages/Detail';
import {Category} from './pages/Category';
import {CartPage} from './pages/CartPage';
import {Checkout} from './pages/Checkout';
import {EndPurchase} from './pages/EndPurchase';
import {NavBar} from './components/NavBar/NavBar';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,useLocation
} from "react-router-dom";

import {CartProvider} from "./state/Cart.context"

const routes = createBrowserRouter(createRoutesFromElements(
        <Route element = {<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Detail />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/cart/" element={<CartPage />} />
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/endpurchase/" element={<EndPurchase />} />
        </Route>
))
function App() {

   return (
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
   );
   
}
export default App