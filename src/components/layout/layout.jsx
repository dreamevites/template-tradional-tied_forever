import React, { useEffect, useState } from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header isScrolled={isScrolled} />
      {children}
      <p>foot</p>
    </div>
  );
};

export default Layout;
