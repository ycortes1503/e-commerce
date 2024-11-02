import cx from 'classnames';
import * as styles from './search-input.module.scss';

export interface SearchInputProps {
  className?: string;
  placeholder: string;
  onSearch: (value: string) => void;
}

export const SearchInput = ({ className, placeholder, onSearch }: SearchInputProps) => {
  return (
    <input
      className={cx(styles.container, className)}
      placeholder={placeholder}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onSearch(event.target.value)}
    />
  );
};
