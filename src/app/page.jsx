import Link from "next/link";
import styles from "./homepage.module.css";
import Navbar from "@/componenets/navbar/Navbar";
import Footer from "@/componenets/footer/Footer";
export default function Home() {
  return <div>
    <Navbar/>
    <Footer/>
  </div>;
}
