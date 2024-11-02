import cx from 'classnames';
import * as React from 'react';
import * as styles from './app.module.scss';

export interface AppLayoutProps {
  className?: string;
  children: React.ReactNode;
}

export const AppLayout = ({ children, className }: AppLayoutProps) => {
  return <div className={cx(styles.container, className)}>{children}</div>;
};
