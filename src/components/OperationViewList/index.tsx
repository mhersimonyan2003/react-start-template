import React from 'react';
import { OperationView, OperationViewProps } from '../OperationView';

import s from './index.module.scss';

interface Props {
  data: Array<OperationViewProps>;
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
