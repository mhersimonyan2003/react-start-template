import React, { useState } from 'react';
import { useAppSelector } from '@/store';
import { tokenSelectors } from '@/store/token';
import { OperationViewList } from './OperationViewList';
import { OperationCreate } from './OperationCreate';
import { useOperations } from '../../hooks/useOperations';

import s from './index.module.scss';
import { Pagination } from '@/components/Pagination';

// const MORE_OPERATIONS_COUNT = 10;

export const OperationViewSection = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { operations, pagesTotal } = useOperations({ pageNumber });

  const token = useAppSelector(tokenSelectors.get);

  return (
    <div className={s['opeation-view-section']}>
      {Boolean(token) && <OperationCreate />}
      <OperationViewList data={operations} />
      <Pagination pagesTotal={pagesTotal} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};
