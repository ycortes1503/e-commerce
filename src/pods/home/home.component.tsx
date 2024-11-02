import { Product } from '@/core';
import { Card, Typography } from '@/common/components';
import * as styles from './home.module.scss';
import { SearchInput } from './components';

const LITERALS = {
  placeholder: 'Search for a smartphone...',
  results: 'RESULTS',
};

export interface HomeComponentProps {
  products: Product[];
  onSearch: (value: string) => void;
  onSeeDetails: (productId: string) => void;
}

export const HomeComponent = ({ products, onSearch, onSeeDetails }: HomeComponentProps) => {
  const totalItems = products.length;

  return (
    <section className={styles.container}>
      <div className={styles.container__search}>
        <SearchInput placeholder={LITERALS.placeholder} onSearch={onSearch} />
        <Typography text={`${totalItems} ${LITERALS.results}`} />
      </div>
      <div className={styles.container__cards}>
        {products.map((product, index) => (
          <Card key={`${index}-${product.id}`} product={product} onClick={onSeeDetails} />
        ))}
      </div>
    </section>
  );
};
