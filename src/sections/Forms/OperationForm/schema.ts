import * as yup from 'yup';
import { operationFormShape } from '../shapes';

const validationSchema = yup.object().shape(operationFormShape).required();

export default validationSchema;
