import React from 'react';
import { Operation } from '@/types';

import s from './index.module.scss';

type Props = Omit<Operation, 'date'>;

export const OperationSummary: React.FC<Props> = ({ amount, category, name, desc }) => {
  return (
    <div className={s['operation-summary']}>
      <div className={s['operation-summary__amount']}>Сумма: {amount} руб.</div>
      <div className={s['operation-summary__category']}>Категория: {category.name}</div>
      <div className={s['operation-summary__title']}>Название: {name}</div>
      <div className={s['operation-summary__description']}>Описание: {desc}</div>
    </div>
  );
};
