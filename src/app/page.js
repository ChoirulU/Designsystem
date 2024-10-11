"use client"; // Tambahkan ini di bagian paling atas

import { useState } from 'react';
import "./styles/global.css";
import styles from "./styles/global.module.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <span className={styles.brand}>Mandala Budaya</span>
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776; {/* Ikon garis 3 (Hamburger) */}
        </div>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li className={styles.closeButton} onClick={closeMenu}>&times;</li> {/* Tombol close */}
        </ul>
      </div>

      <div className={styles.sidebar}>
        Sidebar
        <ul>
          <li><a href="/homepage">Kesenian Banyuwangi</a></li>
          <li>Budaya Banyuwangi</li>
          <li>Makanan Banyuwangi</li>
          <li>Wisata Banyuwangi</li>
        </ul>
      </div>

      <div className={styles.konten}>Konten</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}
