import { useState } from "react";
import styles from "./Header.module.scss";

import { useAppContext } from "@/context/AppContext";
import FONTS from "@/styles/fonts";

const Header = ({ isScrolled }) => {
  const NAVIGATION_ITEMS = [];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { PREVIEW_DATA } = useAppContext();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo */}
          <div className={styles.logo}>
            <span className={`${styles.coupleInitials} ${FONTS.font3}`}>
              {PREVIEW_DATA?.brideName?.[0]} & {PREVIEW_DATA?.groomName?.[0]}
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className={styles.navList}>
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.name} className={styles.navItem}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`${styles.navLink} ${secondaryFont}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuBtn} ${
              isMobileMenuOpen ? styles.open : ""
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileNav} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <ul className={styles.mobileNavList}>
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.name} className={styles.mobileNavItem}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`${styles.mobileNavLink} ${secondaryFont}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
