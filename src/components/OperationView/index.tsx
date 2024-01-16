import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatDate } from '@/helpers';
import { Operation } from '@/types';
import { useAppSelector } from '@/store';
import { tokenSelectors } from '@/store/token';
import { OperationForm } from '@/sections';
import { OperationFormData } from '@/sections/Forms/OperationForm/types';
import { Button, ButtonVariant, Modal } from '@/components';

import s from './index.module.scss';

export const OperationView: React.FC<Operation> = (props) => {
  const { amount, category, name, desc, type, date } = props;
  const { t } = useTranslation();
  const token = useAppSelector(tokenSelectors.get);

  const [editModalVisible, setEditModalVisible] = useState(false);

  const openEditModal = () => {
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const operationFormData: OperationFormData = {
    name,
    desc,
    amount,
    type,
    categoryId: category.id,
  };

  return (
    <div className={s['opeation-view']}>
      <div className={s['opeation-view__header']}>
        <h2>{t(name)}</h2>
        {Boolean(token) && (
          <Button variant={ButtonVariant.primary} onClick={openEditModal}>
            {t('global.edit')}
          </Button>
        )}
      </div>
      <div className={s['opeation-view__details']}>
        <div className={s['opeation-view__amount']}>
          <b>Тип:</b> {type}
        </div>
        <div className={s['opeation-view__amount']}>
          <b>Сумма:</b> {amount} руб.
        </div>
        <div className={s['opeation-view__category']}>
          <b>Категория:</b> {category.name}
        </div>
        <div className={s['opeation-view__description']}>
          <b>Описание:</b> {desc}
        </div>
        <div className={s['opeation-view__date']}>
          <b>Дата:</b> {formatDate(new Date(date))}
        </div>
      </div>
      <Modal title={t('forms.operationForm.updateTitle')} visible={editModalVisible} setVisible={setEditModalVisible}>
        <OperationForm data={operationFormData} id={props.id} onSubmitHandler={closeEditModal} />
      </Modal>
    </div>
  );
};
