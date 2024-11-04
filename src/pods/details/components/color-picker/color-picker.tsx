import * as React from 'react';
import cx from 'classnames';
import * as styles from './color-picker.module.scss';
import { ColorOption } from '@/core';
import { isNullOrUndefined } from '@/helpers';
import { Typography } from '@/common/components';

export interface ColorPickerProps {
  colorOptions: ColorOption[];
  onSelect: (option: ColorOption) => void;
}

export const ColorPicker = ({ colorOptions, onSelect }: ColorPickerProps) => {
  const defaultColor = colorOptions[0];
  const [selectedColor, setSelectedColor] = React.useState<ColorOption>(defaultColor);
  const [colorHovering, setColorHovering] = React.useState<ColorOption>(null);

  const handleSelect = (option: ColorOption) => {
    setSelectedColor(option);
    onSelect(option);
  };

  const colorLabel = !isNullOrUndefined(colorHovering) ? colorHovering.name : selectedColor.name;

  return (
    <div className={styles.container}>
      <div className={styles['container__items-container']}>
        {colorOptions.map((option, index) => {
          const key = `${index}-${option.name}`;

          return (
            <div
              key={key}
              data-testid={`color-option-${index}`}
              className={cx(styles['item'], {
                [styles['item--selected']]: selectedColor.name === option.name && isNullOrUndefined(colorHovering),
              })}
              onClick={() => handleSelect(option)}
              onMouseOver={() => setColorHovering(option)}
              onMouseOut={() => setColorHovering(null)}
            >
              <div className={styles['item-color']} style={{ backgroundColor: option.hexCode }} />
            </div>
          );
        })}
      </div>
      <Typography fontSize="12" text={colorLabel} />
    </div>
  );
};
