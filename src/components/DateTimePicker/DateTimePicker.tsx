import React, { useState } from 'react';
import { styled, useTheme } from '@material-ui/core/styles';
import { DateTimePicker } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';

export interface ANDateTimePickerProps {
  /**
   * Selected dateTime
   */
  value?: string;
  /**
   * Callback to update new value
   */
  onChange: (date: any) => void;
  /**
   * Help text to show on hover
   */
  placeholder?: string;
  /**
   *
   */
  width?: number;
  /**
   *
   */
  height?: number;
}

export const ANDateTimePicker: React.FC<ANDateTimePickerProps> = ({
  value,
  onChange,
  placeholder,
  width,
  height,
}) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const StyleddateTimePicker = styled(DateTimePicker)({
    '& .MuiPickersToolbar-toolbar': {
      backgroundColor: theme.custom.plain.blue,
    },
    '& .MuiPickersDay-daySelected': {
      backgroundColor: theme.custom.plain.blue,
    },
  });
  const TimePickerInput = styled(() => (
    <TextField
      // label={placeholder || 'Select Date'}
      variant="outlined"
      value={value}
      onClick={() => setIsOpen(!isOpen)}
    />
  ))({
    // border: '1px solid #D9E0F5',
    boxSizing: 'border-box',
    borderRadius: 8,
    width: width || 187,
    height: height || 46,
  });

  return (
    <>
      <StyleddateTimePicker
        variant="inline"
        label={placeholder}
        value={value}
        onChange={(value) => {
          onChange(value);
          setIsOpen(false);
        }}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => {
          setIsOpen(false);
        }}
        autoOk
        TextFieldComponent={TimePickerInput}
        allowKeyboardControl={false}
      />
    </>
  );
};
