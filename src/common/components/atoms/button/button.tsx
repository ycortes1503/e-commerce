import cx from 'classnames';
import * as styles from './button.module.scss';

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({ className, disabled, label, type = 'button', variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cx(styles.container, styles[variant], { [styles.disabled]: disabled }, className)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
