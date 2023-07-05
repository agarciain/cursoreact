import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar, Item } from "./components";

const Card = ({ titulo, precio }) => {
  return (
    <div>
      <h3>{titulo}</h3>
      <img src="" alt="Libro" />
      <p>Gs.{precio}</p>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const numero = 5;
  const styleButton = {
    marginTop: "25px",
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <Item />
        <Card titulo="Mujercitas" precio={(20000)} />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <span
          style={{
            marginTop: "25px",
            display: "block",
            fontSize: "10rem",
          }}
        >
          {numero}
        </span>
        <h1>Tienda de Libros STARBOOK</h1>
        <div className="card">
          <button
            style={styleButton}
            onClick={
              () => console.log("holi") /*setCount((count) => count + 1)*/
            }
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more more more
        </p>
      </div>
    </div>
  );
}

export default App;
