import React from 'react';
import styles from './Nav.module.css';

const Header: React.FC = () => {
  return (

    <div className={styles.header}>
      <nav className={styles.nav}> 

        <h2 className={styles.title}> 
        B E T M A R T 
        </h2>

        <ul className={styles['navbar-links']}>
          
          <li><a href="#" className={styles.link}>Catálogo</a></li>
          <li><a href="#" className={styles.link}>Foro</a></li>
          <li><a href="#" className={styles.link}>Soporte</a></li>
          <li><a href="#" className={styles.link}>Nosotros</a></li>
          <li><a href="#" className={styles.link}>Registro</a></li>

        </ul>

      </nav>
    </div>
  );
}

export default Header;
