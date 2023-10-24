import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/componenets/featured/Featured";
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

