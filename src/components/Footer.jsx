import React from "react";
import notes from "../notes";

function Footer() {
  return (
    <footer>
    <p>Copyright Sarah Tani, {(new Date().getFullYear())} </p>
    </footer>
  );
}

export default Footer;