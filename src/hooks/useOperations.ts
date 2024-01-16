import { useCallback, useEffect, useState } from 'react';
import { getOperations } from '@/api/operations';

const REFETCH_OPERATIONS_EVENT_KEY = 'REFETCH_OPERATIONS_EVENT';
const REFETCH_OPERATIONS_EVENT = new CustomEvent('REFETCH_OPERATIONS_EVENT');

export const refetchOperations = () => {
  document.dispatchEvent(REFETCH_OPERATIONS_EVENT);
};

interface Props {
  pageNumber: number;
}

export const useOperations = ({ pageNumber }: Props) => {
  const [pagesTotal, setPagesTotal] = useState(0);
  const [operations, setOperations] = useState([]);

  const fetchOperations = useCallback(
    async (_event: Event, page = pageNumber) => {
      try {
        const {
          data,
          pagination: { total, pageSize },
        } = await getOperations(page);

        setPagesTotal(Math.ceil(total / pageSize));
        setOperations(data);
      } catch (err) {
        console.log(err);
      }
    },
    [pageNumber]
  );

  useEffect(() => {
    fetchOperations(null);

    document.addEventListener(REFETCH_OPERATIONS_EVENT_KEY, fetchOperations);

    return () => {
      document.removeEventListener(REFETCH_OPERATIONS_EVENT_KEY, fetchOperations);
    };
  }, [fetchOperations]);

  return { operations, setOperations, pagesTotal };
};
