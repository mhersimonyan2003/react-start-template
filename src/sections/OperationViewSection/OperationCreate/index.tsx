import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OperationForm } from '@/sections';
import { Button, ButtonVariant, Modal } from '@/components';

export const OperationCreate: React.FC = () => {
  const { t } = useTranslation();

  const [addModalVisible, setAddModalVisible] = useState(false);

  const openAddModal = () => {
    setAddModalVisible(true);
  };

  const closeAddModal = () => {
    setAddModalVisible(false);
  };

  return (
    <React.Fragment>
      <Button variant={ButtonVariant.primary} onClick={openAddModal}>
        {t('operations.add')}
      </Button>
      <Modal title={t('forms.operationForm.createTitle')} visible={addModalVisible} setVisible={setAddModalVisible}>
        <OperationForm onSubmitHandler={closeAddModal} />
      </Modal>
    </React.Fragment>
  );
};
