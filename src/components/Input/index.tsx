import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import s from './index.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, error, ...inputProps } = props;

  return (
    <label className={s['input-wrapper']}>
      {label && <div className={s.input__label} />}
      <input className={clsx(s.input, { [s.error]: error })} ref={ref} {...inputProps} />
      {error && <p className={s.input_error}>{error}</p>}
    </label>
  );
});

Input.displayName = 'Input';
