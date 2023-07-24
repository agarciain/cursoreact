import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './pages/Home';
import {Detail} from './pages/Detail';
import {Category} from './pages/Category';
import {NavBar} from './components/NavBar/NavBar';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,useLocation
} from "react-router-dom";

const routes = createBrowserRouter(createRoutesFromElements(
        <Route element = {<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Detail />} />
          <Route path="/category/:id" element={<Category />} />
        </Route>
))
function App() {

   return (
    <>
      <RouterProvider router={routes} />
    </>
   );
   
}
export default App