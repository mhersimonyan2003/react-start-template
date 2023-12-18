import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../../helpers';
import { Operation } from '../../types';
import { OperationForm } from '../../sections';
import { Button, ButtonVariant } from '../Button';
import { Modal } from '../Modal';

import s from './index.module.scss';

export const OperationView: React.FC<Operation> = (props) => {
  const { amount, category, title, description, date } = props;
  const { t } = useTranslation();

  const [editModalVisible, setEditModalVisible] = useState(false);

  const openEditModal = () => {
    setEditModalVisible(true);
  };

  return (
    <div className={s['opeation-view']}>
      <div className={s['opeation-view__header']}>
        <h2>{t(title)}</h2>
        <Button variant={ButtonVariant.primary} onClick={openEditModal}>
          {t('global.edit')}
        </Button>
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
      <Modal title={t('forms.operationForm.updateTitle')} visible={editModalVisible} setVisible={setEditModalVisible}>
        <OperationForm data={props} />
      </Modal>
    </div>
  );
};
