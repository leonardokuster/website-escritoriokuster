import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';
import InputMask from 'react-input-mask';
import styles from '../styles/cadastroFuncionario.module.css';

const MaskedTextField = ({ mask, value, onChange, onBlur, ...props }) => (
    <InputMask mask={mask} value={value} onChange={onChange} onBlur={onBlur}>
        {(inputProps) => <TextField {...inputProps} {...props} />}
    </InputMask>
);

const validationSchema = yup.object({
    dependentes: yup.array().of(
        yup.object().shape({
            nomeDependente: yup
                .string()
                .required('Nome do dependente é obrigatório'),
            dataNascimentoDependente: yup
                .date()
                .typeError('Data inválida')
                .required('Data de nascimento é obrigatória'),
            cpfDependente: yup
                .string()
                .required('CPF do dependente é obrigatório'),
            localNascimentoDependente: yup
                .string()
                .required('Local de nascimento é obrigatório'),
        })
    )
});

export default function CadastroDependente({ cpf }) {
    const [message, setMessage] = useState('');

    const formik = useFormik({
        initialValues: {
            dependentes: [{
                nomeDependente: '',
                dataNascimentoDependente: '',
                cpfDependente: '',
                localNascimentoDependente: ''
            }],
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async (values, { resetForm }) => {
            const token = localStorage.getItem('token');
            const empresa_id = localStorage.getItem('empresa_id');

            if (!empresa_id) {
                setMessage('Empresa ID não encontrado');
                return;
            }

            try {
                const response = await axios.post(`http://localhost:3001/employees/${empresa_id}`, { ...values, empresa_id }, {
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                });
                setMessage(response.data.message);
                resetForm();
            } catch (err) {
                console.error('Erro:', err);
                if (err.response) {
                    setMessage('Erro ao cadastrar funcionário: ' + err.response.data.message);
                } else if (err instanceof yup.ValidationError) {
                    setMessage('Erro de validação: ' + err.errors.join(', '));
                } else {
                    setMessage('Erro desconhecido ao cadastrar funcionário');
                }
            }
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Box className={styles['formulario']}>
                    {formik.values.dependentes.map((_, index) => (
                        <Box key={index}>
                            <TextField
                                id={`nomeDependente${index}`}
                                name={`dependentes[${index}].nomeDependente`}
                                label={`Nome do ${index + 1}º dependente`}
                                variant="standard"
                                value={formik.values.dependentes[index]?.nomeDependente || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.dependentes && formik.touched.dependentes[index]?.nomeDependente && Boolean(formik.errors.dependentes?.[index]?.nomeDependente)}
                                helperText={formik.touched.dependentes && formik.touched.dependentes[index]?.nomeDependente && formik.errors.dependentes?.[index]?.nomeDependente}
                                style={{ marginTop: '10px' }}
                            />
                            <TextField
                                id={`dataNascimentoDependente${index}`}
                                name={`dependentes[${index}].dataNascimentoDependente`}
                                label="Data nascimento*"
                                InputLabelProps={{ shrink: true }}
                                type="date"
                                value={formik.values.dependentes[index]?.dataNascimentoDependente || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.dependentes && formik.touched.dependentes[index]?.dataNascimentoDependente && Boolean(formik.errors.dependentes?.[index]?.dataNascimentoDependente)}
                                helperText={formik.touched.dependentes && formik.touched.dependentes[index]?.dataNascimentoDependente && formik.errors.dependentes?.[index]?.dataNascimentoDependente}
                                style={{ marginTop: '10px' }}
                            />
                            <MaskedTextField
                                mask="999.999.999-99"
                                id={`cpfDependente${index}`}
                                name={`dependentes[${index}].cpfDependente`}
                                label="CPF*"
                                variant="standard"
                                value={formik.values.dependentes[index]?.cpfDependente || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.dependentes && formik.touched.dependentes[index]?.cpfDependente && Boolean(formik.errors.dependentes?.[index]?.cpfDependente)}
                                helperText={formik.touched.dependentes && formik.touched.dependentes[index]?.cpfDependente && formik.errors.dependentes?.[index]?.cpfDependente}
                                style={{ marginTop: '10px' }}
                            />
                            <TextField
                                id={`localNascimentoDependente${index}`}
                                name={`dependentes[${index}].localNascimentoDependente`}
                                label="Local de nascimento*"
                                variant="standard"
                                value={formik.values.dependentes?.[index]?.localNascimentoDependente || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.dependentes && formik.touched.dependentes?.[index]?.localNascimentoDependente && Boolean(formik.errors.dependentes?.[index]?.localNascimentoDependente)}
                                helperText={formik.touched.dependentes && formik.touched.dependentes?.[index]?.localNascimentoDependente && formik.errors.dependentes?.[index]?.localNascimentoDependente}
                                style={{ marginTop: '10px' }}
                            />
                        </Box>
                    ))}
                    <Box className={styles['botoes']}>
                        <Button type="submit">Adicionar</Button>
                    </Box>
                </Box>
                {message && (
                    <h3 style={{ fontSize: '0.84em', color: '#202949', textAlign: 'left' }}>
                        <strong>{message}</strong>
                    </h3>
                )}
            </form>
        </div>
    );
};