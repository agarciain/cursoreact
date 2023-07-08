import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css';
import {NavBar, ItemListContainer} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting ="La tienda de GABRIELLE" />
    </div>
    
  )
}

export default App