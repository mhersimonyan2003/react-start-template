import { Category, Operation } from '../types';

export const formatDate = (date: Date) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const createRandomOperation = (): Operation => ({
  date: new Date(),
  title: 'operation.randomOperationTitle',
  description: 'operation.randomOperationDescription',
  amount: Math.round(Math.random() * 10 ** 3),
  category: Object.values(Category)[Math.floor(Math.random() * Object.keys(Category).length)],
});
