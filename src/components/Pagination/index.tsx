import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

import s from './index.module.scss';

interface Props {
  pagesTotal: number;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

export const Pagination: React.FC<Props> = ({ pagesTotal, pageNumber, setPageNumber }) => {
  const handlePageClick = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  const pageNumbers = new Array(pagesTotal).fill(null).map((_, index) => index + 1);

  return (
    <div className={s.pagination}>
      <ul className={s.pagination__list}>
        {pageNumbers.map((page) => (
          <li key={page} className={s.pagination__list__item}>
            <button
              className={clsx(s.pagination__list__item__button, { [s.active]: page === pageNumber })}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
