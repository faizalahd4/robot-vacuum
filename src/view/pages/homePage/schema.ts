/**
 * Validation messager
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 * 
 */
// GENERIC IMPORT
import * as yup from 'yup';

// UTILS IMPORT
import {formValidationMessages} from '../../../utils/validationMessages';
import {DirectionCmd} from '../../../utils/enum';

const schema = 
  yup.object({
    xPoint: yup.string().nullable().required(formValidationMessages.required()),
    yPoint: yup.string().nullable().required(formValidationMessages.required()),
    facingDirection: yup.string().nullable().required(formValidationMessages.required()),
    cmd: yup.array().of(yup.string().required().oneOf(Object.values(DirectionCmd))).defined().min(1, formValidationMessages.required()).max(20, 'Can provide maximum 20 command'),
  });

export default schema;
