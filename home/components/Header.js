import Image from "next/Image";
import React from "react";
import styles from "../styles/Home.module.css";

const Header = ({ children }) => {
  return (
    <nav className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </nav>
  );
};

export default Header;