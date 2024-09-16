import React, { useState } from 'react';
import { TextField } from '@mui/material';
import InputMask from 'react-input-mask';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
      },
    },
});

export default function PhoneInput(props) {
    const { id, name, label, value, onChange, onBlur = () => {}, onFocus = () => {}, error, helperText } = props;
    const [mask, setMask] = useState('(99) 99999-9999');

    const handleBlur = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 10) {
            setMask('(99) 9999-9999');
        }
        onBlur(e); 
    };

    const handleFocus = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length === 10) {
            setMask('(99) 99999-9999');
        }
        onFocus(e); 
    };

    return (
        <ThemeProvider theme={theme}>
            <InputMask
            mask={mask}
            value={value}
            onChange={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            >
                {(inputProps) => (
                    <TextField
                        {...inputProps}
                        id={id}
                        name={name}
                        label={label}
                        variant="standard"
                        error={error}
                        helperText={helperText}
                        sx ={{ width: { mobile: '100%', tablet: '30%' } }}
                    />
                )}
            </InputMask>
        </ThemeProvider>
    );
}