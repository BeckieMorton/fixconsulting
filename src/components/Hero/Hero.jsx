import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <h3>Welcome to FIX Consulting</h3>
      <h2>Consulting for every business</h2>

      <Link to="/Services" state={{ from: "Cfo" }}>
        <p className={styles.links}>
          <span>CFO as a service</span>
        </p>
      </Link>
      <p>.</p>
      <Link to="/Services" state={{ from: "Projectandchange" }}>
        <p className={styles.links}>
          <span>Project and Change Services</span>
        </p>
      </Link>
    </div>
  );
};
