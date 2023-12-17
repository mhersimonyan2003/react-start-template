import React from 'react';
import { Operation } from '../../types';
import { OperationView } from '../OperationView';

import s from './index.module.scss';

interface Props {
  data: Array<Operation>;
}

const OperationViewList: React.FC<Props> = ({ data }) => {
  return (
    <div className={s['opeation-view-list']}>
      {data.map((operationViewData, index) => (
        <OperationView key={index} {...operationViewData} />
      ))}
    </div>
  );
};

export default OperationViewList;
