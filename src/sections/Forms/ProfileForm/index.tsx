import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { Button, ButtonVariant, Input } from '@/components';
import { updateProfile } from '@/api/profile';
import { UpdateProfileBody } from '@/api/profile/types';
import validationSchema from './schema';

import s from '../index.module.scss';
import { useDispatch } from 'react-redux';
import { profileActions } from '@/store/profile';

interface Props {
  data?: UpdateProfileBody;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<UpdateProfileBody>({
    resolver: yupResolver(validationSchema) as Resolver<UpdateProfileBody>,
    defaultValues: data,
  });

  const onSubmit: SubmitHandler<UpdateProfileBody> = async (profileData) => {
    try {
      const newProfile = await updateProfile(profileData);
      dispatch(profileActions.set(newProfile));
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={s['form_wrapper']}>
      <form className={s['form']} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s['form__title']}>{t('forms.profileForm.title')}</h2>
        <div className={s['form__inputs']}>
          <Input label="Name" name="name" placeholder="Name" error={errors.name?.message} {...register('name')} />
        </div>
        <div className={s['form__buttons']}>
          <Button variant={ButtonVariant.primary}>{t('forms.profileForm.updateButton')}</Button>
        </div>
      </form>
    </div>
  );
};
