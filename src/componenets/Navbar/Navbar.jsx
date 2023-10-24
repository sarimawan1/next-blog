import react from "react";
import styles from "./navbar.module.css"
import image from 'next/image'
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={StyleSheet.social}>
                <image src="/facebook.png" alt="facebook" width={24} height={24}/>
                <image src="/instagram.png" alt="instagram" width={24} height={24}/>
                <image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
                <image src="/youtube.png" alt="youtube" width={24} height={24}/>
            </div>
            <div className={styles.logo}>samblogs</div>
            <div className={styles.links}>
                <link href="/">Homepage</link>
                <link href="/">Contact</link>
                <link href="/">About</link>
                
            </div>

        </div>
    )
}

export default Navbar