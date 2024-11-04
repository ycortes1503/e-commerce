import * as React from 'react';
import cx from 'classnames';
import * as styles from './storage-box.module.scss';
import { StorageOption } from '@/core';
import { Typography } from '@/common/components';

export interface StorageBoxProps {
  storageOptions: StorageOption[];
  onSelect: (option: StorageOption) => void;
}

export const StorageBox = ({ storageOptions, onSelect }: StorageBoxProps) => {
  const [selected, setSelected] = React.useState<StorageOption>(null);

  const handleSelect = (option: StorageOption) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div className={styles.container}>
      {storageOptions.map((option, index) => {
        const key = `${index}-${option}`;

        return (
          <div
            key={key}
            data-testid={`storage-option-${index}`}
            className={cx(styles.container__item, { [styles['container--selected']]: selected === option })}
            onClick={() => handleSelect(option)}
          >
            <Typography fontSize="14" text={option.capacity} />
          </div>
        );
      })}
    </div>
  );
};
