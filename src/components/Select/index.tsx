import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import s from './index.module.scss';

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<string>;
}

export const Select: React.FC<Props> = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { label, error, options, ...selectProps } = props;
  return (
    <label className={s['select-wrapper']}>
      {label && <div className={s.select__label} />}
      <select className={clsx(s.select, { [s.error]: error })} ref={ref} {...selectProps}>
        {options.map((optionValue) => (
          <option value={optionValue} className={s.select__option} key={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
      {error && <p className={s.select_error}>{error}</p>}
    </label>
  );
});

Select.displayName = 'Select';
