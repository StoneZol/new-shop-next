import GetterStartData from "@/widgets/getter-start-data/ui/getter-start-data";
import styles from "./page.module.scss";
import PromoBanners from "@/widgets/promo-banners/ui/promo-banners";

export default function Home() {
  return (
    <div className={styles.indexPage}>
      <PromoBanners/>
      <GetterStartData/>
    </div>
  );
}