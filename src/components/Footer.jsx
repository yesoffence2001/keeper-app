import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with 🧡 By Lavish Sinhmar {year}</p>
    </footer>
  );
}

export default Footer;
