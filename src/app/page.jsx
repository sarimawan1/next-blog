import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/componenets/featured/Featured";
import CategoryList from "@/componenets/categoryList/CategoryList";
import CardList from "@/componenets/cardList/CardList";
import Menu from "@/componenets/menu/Menu";
export default function Home() {
  return (
  <div>
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div clasName={styles.content}></div>
        <CardList/>
        <Menu/>
    </div>
  </div>
  );
}

