import cx from 'classnames';
import * as styles from './typography.module.scss';

export interface TypographyProps {
  className?: string;
  fontSize?: string;
  text: string;
}

export const Typography = ({ className, fontSize, text }: TypographyProps) => {
  return (
    <p style={{ fontSize: `${fontSize}px` }} className={cx(styles.text, className)}>
      {text}
    </p>
  );
};
