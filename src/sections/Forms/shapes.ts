import * as yup from 'yup';
import { Category } from '../../types';

export const authFormShape = {
  email: yup.string().required('Email is required').email('Invalid email address'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
};

export const operationFormShape = {
  title: yup.string().required('Title is required'),
  amount: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .required('Amount is required')
    .min(0, 'Amount must be greater than or equal to 0'),
  description: yup.string().required('Description is required'),
  category: yup.string().required('Category is required').oneOf(Object.values(Category), 'Invalid category'),
};

export const profileFormShape = {
  firstname: yup.string().required('First Name is required'),
  lastname: yup.string().required('Last Name is required'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  tel: yup.string().required('Phone Number is required'),
  birthdate: yup.string().required('Birthdate is required'),
};
