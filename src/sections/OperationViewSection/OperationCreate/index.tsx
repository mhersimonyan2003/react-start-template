import React, { useState } from 'react';
import { Button, ButtonVariant, Modal } from '../../../components';
import { useTranslation } from 'react-i18next';
import { OperationForm } from '../../../sections';

export const OperationCreate: React.FC = () => {
  const { t } = useTranslation();

  const [addModalVisible, setAddModalVisible] = useState(false);

  const openAddModal = () => {
    setAddModalVisible(true);
  };

  return (
    <React.Fragment>
      <Button variant={ButtonVariant.primary} onClick={openAddModal}>
        {t('operations.add')}
      </Button>
      <Modal title={t('forms.operationForm.createTitle')} visible={addModalVisible} setVisible={setAddModalVisible}>
        <OperationForm />
      </Modal>
    </React.Fragment>
  );
};
