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

export default function CurrencyInput(props) {
    const { id, name, label, value, onChange, onBlur = () => {}, onFocus = () => {}, error, helperText } = props;
    const [mask, setMask] = useState('R$ 9.999.999.999.999.999,99');

    const handleBlur = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length === 3) {
            setMask('R$ 9,99');
        } else if (value.length === 4) {
            setMask('R$ 99,99');
        } else if (value.length === 5) {
            setMask('R$ 999,99');
        } else if (value.length === 6) {
            setMask('R$ 9.999,99');
        } else if (value.length === 7) {
            setMask('R$ 99.999,99');
        } else if (value.length === 8) {
            setMask('R$ 999.999,99');
        } else if (value.length === 9) {
            setMask('R$ 9.999.999,99');
        } else if (value.length === 10) {
            setMask('R$ 99.999.999,99');
        } else if (value.length === 11) {
            setMask('R$ 999.999.999,99');
        } else if (value.length === 12) {
            setMask('R$ 9.999.999.999,99');
        } else if (value.length === 13) {
            setMask('R$ 99.999.999.999,99');
        } else if (value.length === 14) {
            setMask('R$ 999.999.999.999,99');
        } else if (value.length === 15) {
            setMask('R$ 9.999.999.999.999,99');
        } else if (value.length === 16) {
            setMask('R$ 99.999.999.999.999,99');
        } else if (value.length == 17) {
            setMask('R$ 999.999.999.999.999,99');
        } else {
            setMask('R$ 9.999.999.999.999.999,99');
        }
        onBlur(e); 
    };

    const handleFocus = (e) => {
        setMask('R$ 9.999.999.999.999.999,99');
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
                        sx ={{ width: { mobile: '100%', tablet: '50%' } }}
                    />
                )}
            </InputMask>
        </ThemeProvider>
    );
}