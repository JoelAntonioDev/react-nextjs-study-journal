
import styles from "./styles.module.css";

type HeadingProps = {
    children: React.ReactNode;
}

export default function Heading({children}: HeadingProps){ 
     
    return (
    <div className={styles.heading}>{children}</div>)
}