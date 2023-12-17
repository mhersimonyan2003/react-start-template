import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { ProfileFormData } from './types';
import validationSchema from './schema';
import { Button, ButtonVariant, Input } from '../../../components';

import s from '../index.module.scss';

interface Props {
  data?: Partial<ProfileFormData>;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ProfileFormData>({
    resolver: yupResolver(validationSchema) as Resolver<ProfileFormData>,
    defaultValues: data,
  });

  const onSubmit: SubmitHandler<ProfileFormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={s['form_wrapper']}>
      <form className={s['form']} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s['form__title']}>{t('forms.profileForm.title')}</h2>
        <div className={s['form__inputs']}>
          <Input
            label="First Name"
            name="firstname"
            placeholder="First Name"
            error={errors.firstname?.message}
            {...register('firstname')}
          />
          <Input
            label="Last Name"
            name="lastname"
            placeholder="Last Name"
            error={errors.lastname?.message}
            {...register('lastname')}
          />
          <Input
            label="Email"
            name="email"
            placeholder="Email"
            error={errors.email?.message}
            {...register('email')}
            type="email"
          />
          <Input
            label="Phone Number"
            name="tel"
            placeholder="Phone Number"
            error={errors.tel?.message}
            {...register('tel')}
            type="tel"
          />
          <Input
            label="Birthdate"
            name="birthdate"
            placeholder="Birthdate"
            error={errors.birthdate?.message}
            {...register('birthdate')}
            type="date"
          />
        </div>
        <Button variant={ButtonVariant.primary}>{t('forms.profileForm.updateButton')}</Button>
      </form>
    </div>
  );
};
