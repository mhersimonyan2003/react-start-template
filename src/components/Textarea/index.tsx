import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import s from './index.module.scss';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { label, error, ...textareaProps } = props;

  return (
    <label className={s['textarea-wrapper']}>
      {label && <div className={s.textarea__label} />}
      <textarea className={clsx(s.textarea, { [s.error]: error })} ref={ref} {...textareaProps} />
      {error && <p className={s.textarea_error}>{error}</p>}
    </label>
  );
});

Textarea.displayName = 'Textarea';
