import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("home/header"));
const Footer = dynamic(() => import("home/footer"));

function Catalog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>Header from shop</Header>
      <main className={styles.main}>
        <h1 className={styles.title}>This is a catalog page from shop</h1>
      </main>
      <Footer>Footer in shop</Footer>
    </div>
  );
}

export default Catalog;
