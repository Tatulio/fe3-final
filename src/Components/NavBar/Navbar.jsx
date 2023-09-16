import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context";
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.links}>
          <Link className={styles.link} to="/home">
            Home
          </Link>
          <Link className={styles.link} to="/contacto">
            Contacto
          </Link>
          <Link className={styles.link} to="/favs">
            Favoritos
          </Link>
        </div>
        <div className={styles.themeButton}>
          <button
            onClick={handleChangeTheme}
            className={styles.boton}
          >
            Cambiar Tema
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
