import { Header } from '@/common/components';
import { CartProvider } from './context';
import { Router } from './core/Router';
import * as styles from './App.module.scss';

export const App = () => {
  return (
    <CartProvider>
      <div className={styles.container}>
        <Header />
        <Router />
      </div>
    </CartProvider>
  );
};
