import React from 'react';
import { orange, purple } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const InputField: React.FC<any> = ({ ...props }) => {
  const theme = useTheme();
  const inputLabelStyles = makeStyles({
    root: {
      color: `${theme.custom.greyscale.medium}`,
      //   marginLeft: '0.75rem',
      display: 'none',
    },
    error: {},
    focused: {},
    shrink: {
      transform: 'translate(0, 1.5px) scale(1)',
    },
  });
  const inputLabelClasses = inputLabelStyles();

  const inputBaseStyles = makeStyles({
    root: {
      padding: '0px',
      margin: '0px',
    },
    input: {
      padding: '0px',
      margin: '0px',
      color: `${theme.custom.black}`,
      fontSize: 16,
      fontWeight: 400,
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: `${theme.custom.greyscale.medium}`,
      },
    },
    formControl: {
      'label + &': {
        padding: '13px 16px',
        border: `1px solid ${theme.custom.greyscale.soft}`,
        borderRadius: '8px',
        margin: '0px',
      },
    },
  });
  const inputBaseClasses = inputBaseStyles();

  return (
    <TextField
      label={'Primary field'}
      placeholder={'Placeholder'}
      margin={'none'}
      InputLabelProps={{ shrink: true, classes: inputLabelClasses }}
      InputProps={{ classes: inputBaseClasses, disableUnderline: true }}
    />
  );
};
