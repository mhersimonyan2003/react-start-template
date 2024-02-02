import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { Input, Button, ButtonVariant } from '@/components';
import { tokenActions } from '@/store/token';
import { register as registerApi } from '@/api/auth';
import validationSchema from '../schema';
import { AuthFormData } from '../types';

import s from '../../index.module.scss';

export const RegisterForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<AuthFormData>({
    resolver: yupResolver(validationSchema) as Resolver<AuthFormData>,
  });

  const onSubmit: SubmitHandler<AuthFormData> = async (data) => {
    try {
      const { token } = await registerApi(data);
      dispatch(tokenActions.set(token));
      reset();
    } catch (err) {
      console.log(err);
    }
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
      <div className={s['form__buttons']}>
        <Button variant={ButtonVariant.primary}>{t('forms.authForm.signUpButton')}</Button>
      </div>
    </form>
  );
};
