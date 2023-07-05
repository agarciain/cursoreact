import { BsCartFill } from "react-icons/bs";

export const NavBar = () => {
  return (
    <header>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <img src="https://www.gandhi.com.mx/media/logo/stores/1/logo-gandhi-52-aniv.png" className="logo" alt="Vite logo" /> */}
          <span style={{ fontSize: 18, fontWeight: "bolder" }}>STARBOOK</span>
          <nav>
            <a>Terror </a>
            <a>Misterio </a>
            <a>Romance </a>
          </nav>
          <BsCartFill style={{ fontSize: 18, color: "blue" }} />
        </div>
      </div>
    </header>
  );
};
