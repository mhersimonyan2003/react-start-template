import React from 'react';
import { useLocalizationContext } from '../../../../localization';
import { Button, ButtonVariant } from '../../../Button';

import s from './index.module.scss';

export const LocalizationToggle: React.FC = () => {
  const { language, toggleLanguage } = useLocalizationContext();

  return (
    <Button variant={ButtonVariant.primary} onClick={toggleLanguage} className={s['localization-toggle']}>
      {language}
    </Button>
  );
};
