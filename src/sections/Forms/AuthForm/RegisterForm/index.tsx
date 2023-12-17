import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import validationSchema from '../schema';
import { AuthFormData } from '../types';
import { Input, Button, ButtonVariant } from '../../../../components';

import s from '../../index.module.scss';

export const RegisterForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<AuthFormData>({
    resolver: yupResolver(validationSchema) as Resolver<AuthFormData>,
  });

  const onSubmit: SubmitHandler<AuthFormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={s['form']} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={s['form__title']}>{t('forms.authForm.register')}</h2>
      <div className={s['form__inputs']}>
        <Input
          label="Email"
          name="email"
          placeholder="Email"
          error={errors.email?.message}
          {...register('email')}
          type="email"
        />
        <Input
          label="Password"
          name="password"
          placeholder="Password"
          error={errors.password?.message}
          {...register('password')}
          type="password"
        />
      </div>
      <Button variant={ButtonVariant.primary}>{t('forms.authForm.signUpButton')}</Button>
    </form>
  );
};
