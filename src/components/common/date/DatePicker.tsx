import React from 'react';
import { DatePicker as MuiDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';

type DatePickerProps = {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
};

export const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={(newValue: Date | null) => {
          if (newValue !== null) {
            onChange(newValue);
          }
        }}
        renderInput={(params: {}) => <TextField {...params} />}
        inputFormat="yyyy-MM-dd"
      />
    </LocalizationProvider>
  );
};