import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { createOperation, updateOperation } from '@/api/operations';
import { refetchOperations } from '@/hooks/useOperations';
import { Button, ButtonVariant, Input, Select, Textarea } from '@/components';
import { useCategories } from './useCategories';
import { OperationFormData, OperationFormType } from './types';
import { OPERATION_FORM_TYPES } from './constants';
import validationSchema from './schema';

import s from '../index.module.scss';

interface Props {
  data?: OperationFormData;
  id?: string;
  onSubmitHandler: () => void;
}

export const OperationForm: React.FC<Props> = ({ data, id, onSubmitHandler }) => {
  const { t } = useTranslation();
  const { categories } = useCategories();
  const formType = data ? OperationFormType.update : OperationFormType.add;

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<OperationFormData>({
    resolver: yupResolver(validationSchema) as Resolver<OperationFormData>,
    defaultValues: data,
  });

  const onSubmit: SubmitHandler<OperationFormData> = async (operationData) => {
    try {
      if (formType === OperationFormType.add) {
        await createOperation({ ...operationData, date: new Date().toISOString() });
      } else {
        await updateOperation(id, { ...operationData, date: new Date().toISOString() });
      }
      refetchOperations();
      onSubmitHandler();
    } catch (err) {
      console.log(err);
    }

    reset();
  };

  return (
    <form className={s['form']} onSubmit={handleSubmit(onSubmit)}>
      <div className={s['form__inputs']}>
        <Input label="Name" name="name" placeholder="Name" error={errors.name?.message} {...register('name')} />
        <Textarea
          label="Description"
          name="desc"
          placeholder="Description"
          error={errors.desc?.message}
          {...register('desc')}
        />
        <Input
          label="Amount"
          name="amount"
          placeholder="Amount"
          error={errors.amount?.message}
          {...register('amount')}
          type="number"
        />
        <Select
          label="Category"
          name="category"
          placeholder="Category"
          options={categories}
          error={errors.categoryId?.message}
          key={categories.length}
          {...register('categoryId')}
        />
        <Select
          label="Type"
          name="type"
          placeholder="Type"
          options={OPERATION_FORM_TYPES}
          error={errors.type?.message}
          {...register('type')}
        />
      </div>
      <div className={s['form__buttons']}>
        <Button variant={ButtonVariant.primary}>
          {formType === OperationFormType.update
            ? t('forms.operationForm.updateButton')
            : t('forms.operationForm.createButton')}
        </Button>
      </div>
    </form>
  );
};
