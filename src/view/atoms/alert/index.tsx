/**
 * Alert component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {AlertProps as MuiAlertProps, Alert as MuiAlert} from '@mui/material';

type AlertProps = {
  content: string;
  isShow: boolean;
} & MuiAlertProps;

const Alert = ({
  content,
  isShow,
  ...rest
}: AlertProps) => (
  <>{isShow && <MuiAlert {...rest} role='alert'>{content}</MuiAlert>}</>
);

export default Alert;
