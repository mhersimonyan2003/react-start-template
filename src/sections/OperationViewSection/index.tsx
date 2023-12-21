import React, { useEffect, useRef, useState } from 'react';
import { createRandomOperation } from '../../helpers';
import { operationsData } from './constants';
import { OperationViewList } from './OperationViewList';
import { OperationCreate } from './OperationCreate';

import s from './index.module.scss';

const MORE_OPERATIONS_COUNT = 10;

export const OperationViewSection = () => {
  const [data, setData] = useState(operationsData);

  const moreBlockRef = useRef<HTMLDivElement>(null);

  const addOperations = () => {
    const newOperations = new Array(MORE_OPERATIONS_COUNT).fill(createRandomOperation());
    setData(data.concat(newOperations));
  };

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addOperations();
        }
      });
    };

    const observer = new IntersectionObserver(callback);

    if (moreBlockRef.current) {
      observer.observe(moreBlockRef.current);
    }

    return () => {
      // Cleanup: Stop observing when the component unmounts
      observer.disconnect();
    };
  });

  return (
    <div className={s['opeation-view-section']}>
      <OperationCreate />
      <OperationViewList data={data} />
      <div className={s['opeation-view__more-block']} ref={moreBlockRef} />
    </div>
  );
};
