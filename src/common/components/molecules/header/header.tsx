import { ReactComponent as LogoHeaderSVG } from '@/assets/images/svg/logo-header.svg';
import { ReactComponent as BugEmptySVG } from '@/assets/images/svg/bug-empty.svg';
import { ReactComponent as BugFilledSVG } from '@/assets/images/svg/bug-filled.svg';
import { useCartContext } from '@/context';
import { IconButton, Typography } from '../../atoms';
import * as styles from './header.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/core';

export const Header = () => {
  const navigate = useNavigate();
  const { totalItems } = useCartContext();
  const hasCartProducts = totalItems > 0;

  const handleGoHome = () => {
    navigate(ROUTES.HOME);
  };

  const handleGoCart = () => {
    navigate(ROUTES.CHECKOUT);
  };

  const bugIcon = hasCartProducts ? <BugFilledSVG /> : <BugEmptySVG />;

  return (
    <nav className={styles.container}>
      <IconButton onClick={handleGoHome}>
        <LogoHeaderSVG />
      </IconButton>
      <IconButton onClick={handleGoCart}>
        {bugIcon}
        <Typography text={`${totalItems}`} />
      </IconButton>
    </nav>
  );
};
