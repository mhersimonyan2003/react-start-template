import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthFormType } from './types';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

import s from '../index.module.scss';

export const AuthForm: React.FC = () => {
  const { t } = useTranslation();
  const [formType, setFormType] = useState<AuthFormType>(AuthFormType.login);

  const switchForm = () => {
    setFormType((formType) => (formType === AuthFormType.login ? AuthFormType.register : AuthFormType.login));
  };

  return (
    <div className={s['form_wrapper']}>
      {formType === AuthFormType.login ? <LoginForm /> : formType === AuthFormType.register ? <RegisterForm /> : null}
      <p onClick={switchForm} className={s['form_switch']}>
        {formType === AuthFormType.login
          ? t('forms.authForm.createAnAccount')
          : t('forms.authForm.alreadyHaveAnAccount')}
      </p>
    </div>
  );
};
