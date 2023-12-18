import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { Category, Operation } from '../../../types';
import { OperationFormData, OperationFormType } from './types';
import validationSchema from './schema';
import { Button, ButtonVariant, Input, Select, Textarea } from '../../../components';

import s from '../index.module.scss';

interface Props {
  data?: Partial<Operation>;
}

export const OperationForm: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();
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

  const onSubmit: SubmitHandler<OperationFormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={s['form']} onSubmit={handleSubmit(onSubmit)}>
      <div className={s['form__inputs']}>
        <Input label="Title" name="title" placeholder="Title" error={errors.title?.message} {...register('title')} />
        <Input
          label="Amount"
          name="amount"
          placeholder="Amount"
          error={errors.amount?.message}
          {...register('amount')}
          type="number"
        />
        <Textarea
          label="Description"
          name="description"
          placeholder="Description"
          error={errors.description?.message}
          {...register('description')}
        />
        <Select
          label="Category"
          name="category"
          placeholder="Category"
          options={Object.values(Category)}
          error={errors.category?.message}
          {...register('category')}
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
