import React, { useEffect, useRef, useState } from 'react';
import { createRandomOperation } from '../../helpers';
import { operationsData } from './constants';
import OperationViewList from '../../components/OperationViewList';

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
        console.log(`Element ${entry.target.id} is ${entry.isIntersecting ? 'visible' : 'not visible'}`);
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
      <OperationViewList data={data} />
      <div className={s['opeation-view__more-block']} ref={moreBlockRef} />
    </div>
  );
};
