import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import s from './index.module.scss';

export enum ButtonVariant {
  'primary' = 'primary',
}

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant.primary;
  children: ReactNode;
}

export const Button: React.FC<Props> = ({ variant, children, className, ...props }) => {
  return (
    <button className={clsx(className, s.button, s[`button-${variant}`])} {...props}>
      {children}
    </button>
  );
};
