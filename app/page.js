import GetterStartData from "@/widgets/getter-start-data/ui/getter-start-data";
import styles from "./page.module.scss";
import PromoBanners from "@/widgets/promo-banners/ui/promo-banners";
import PromoActions from "@/entities/promo-actions/ui/promo-actions";
import VariableGroupsGoods from "@/widgets/variable-groups-goods/ui/variable-groups-goods";
import { shopSpecForYou, shopTopRatedGoods } from "@/shared/shop.config";
import { getProductUrlApi } from "@/shared/api-endpoint/api-endpoint";

export const dynamic = "force-dynamic";

const mockPromo = [
  {
      promoUrl: '#',
      imageUrl: 'https://bogatyr.club/uploads/posts/2024-05/79576/1715179436_bogatyr-club-e96l-p-zvezdnoe-ditya-oboi-143.jpg',
      ad: {
          legalPerson: 'OOO Cigane',
          inn: '8800553535',
          erid: 'fkj4kjw5hryhe6yu5'
      }
  },
  {
      promoUrl: '#',
      imageUrl: 'https://bogatyr.club/uploads/posts/2024-05/79576/1715179387_bogatyr-club-5jad-p-zvezdnoe-ditya-oboi-10.jpg',
      ad: {
          legalPerson: 'OOO koni',
          inn: 'who are you',
          erid: 'hjjgfj65757'
      }
  },
  {
      promoUrl: '#',
      imageUrl: 'https://bogatyr.club/uploads/posts/2024-05/79576/1715179435_bogatyr-club-f38r-p-zvezdnoe-ditya-oboi-149.jpg',
      ad: null,
  }
]

export default async function Home() {

  const mostPopularResult = await fetch(`${getProductUrlApi}?Sort=0&Page=1&PageLimit=12`)
  const specialForYouResult = await fetch(`${getProductUrlApi}?Sort=0&Page=2&PageLimit=8`)

  if (!mostPopularResult.ok || !specialForYouResult.ok){
    throw new Error('Ошибка загрузки данных');
  }
  const mostPopular = await mostPopularResult.json();
  const specialForYou = await specialForYouResult.json();

  return (
    <div className={styles.index_page}>
      <PromoActions dataPromo={mockPromo}/>
      <VariableGroupsGoods text={shopTopRatedGoods} data={mostPopular.items}/>
      <VariableGroupsGoods text={shopSpecForYou} data={specialForYou.items} lenght={8}/>
    </div>
  );
}
