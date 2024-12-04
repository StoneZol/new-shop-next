import GetterStartData from "@/widgets/getter-start-data/ui/getter-start-data";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.indexPage}>
      <GetterStartData/>
    </div>
  );
}