import React from 'react';
import { formatDate } from '../../helpers';
import { Category } from '../../types';
import { Button, ButtonVariant } from '../Button';

import s from './index.module.scss';
import { useTranslation } from 'react-i18next';

export interface OperationViewProps {
  amount: number;
  category: Category;
  title: string;
  description: string;
  date: Date;
}

export const OperationView: React.FC<OperationViewProps> = ({ amount, category, title, description, date }) => {
  const { t } = useTranslation();

  return (
    <div className={s['opeation-view']}>
      <div className={s['opeation-view__header']}>
        <h2>{t(title)}</h2>
        <Button variant={ButtonVariant.primary}>{t('global.edit')}</Button>
      </div>
      <div className={s['opeation-view__details']}>
        <div className={s['opeation-view__amount']}>
          <b>Сумма:</b> {amount} руб.
        </div>
        <div className={s['opeation-view__category']}>
          <b>Категория:</b> {t(category)}
        </div>
        <div className={s['opeation-view__description']}>
          <b>Описание:</b> {t(description)}
        </div>
        <div className={s['opeation-view__date']}>
          <b>Дата:</b> {formatDate(date)}
        </div>
      </div>
    </div>
  );
};
