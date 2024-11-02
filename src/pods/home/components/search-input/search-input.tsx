import * as React from 'react';
import cx from 'classnames';
import * as styles from './search-input.module.scss';
import { ReactComponent as CloseSVG } from '@/assets/images/svg/close.svg';
import { IconButton } from '@/common/components';
import { hasText } from '@/helpers';

export interface SearchInputProps {
  className?: string;
  placeholder: string;
  onSearch: (value: string) => void;
}

export const SearchInput = ({ className, placeholder, onSearch }: SearchInputProps) => {
  const inputRef = React.useRef(null);

  const handleCleanInput = () => {
    inputRef.current.value = '';
    onSearch('');
  };

  const isInputEmpty = !hasText(inputRef.current?.value);

  return (
    <div className={cx(styles.container, className)}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={placeholder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onSearch(event.target.value)}
      />
      {!isInputEmpty && (
        <IconButton onClick={handleCleanInput}>
          <CloseSVG />
        </IconButton>
      )}
    </div>
  );
};
