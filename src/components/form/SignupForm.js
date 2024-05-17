import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { TextField, Button, Stepper, Step, StepLabel, Box } from '@mui/material';
import styles from '../../styles/components/signupform.module.css';
import { motion } from "framer-motion";

const validationSchema = yup.object({
    nome: yup
        .string('Nome completo')
        .matches(/^[a-zA-Z\s]+$/, 'Nome inválido, por favor tente outro')
        .required('Campo obrigatório'),
    dataNascimento: yup
        .date()
        .required('Campo obrigatório'),
    cpfCnpj: yup
        .string('CPF/CNPJ')
        .required('Campo obrigatório'),
    endereco: yup
        .string('Endereço')
        .required('Campo obrigatório'),
    cep: yup
        .string('CEP')
        .required('Campo obrigatório'),
    telefone: yup
        .string('Telefone')
        .required('Campo obrigatório'),
    email: yup
        .string('E-mail')
        .email('Insira um e-mail válido')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Insira um e-mail válido')
        .required('Campo obrigatório'),
    numeroCasa: yup
        .string('Número'),
    complementoCasa: yup
        .string('Complemento'),
    senha: yup
        .string('Senha')
        .min(5, 'Senha deve conter pelo menos 5 dígitos')
        .required('Campo obrigatório'),
    confisenha: yup
        .string('Confirmar senha')
        .oneOf([yup.ref('senha'), null], 'Senhas diferentes')
        .required('Campo obrigatório'),
});

export default function SignupForm() {
    const [step, setStep] = useState(0);
    const [endereco, setEndereco] = useState('');
    const [message, setMessage] = useState('');
    const formik = useFormik({
        initialValues: {
            nome: '',
            dataNascimento: '',
            telefone: '',
            email: '',
            cpfCnpj: '',
            cep: '',
            endereco: '',
            numeroCasa: '',
            complementoCasa: '',
            senha: '',
            confisenha: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('https://api-login-self.vercel.app/signup', values, {
                    headers: { 'Content-Type': 'application/json' },
                });
                setMessage(response.data.message);
                resetForm();
            } catch (err) {
                setMessage(err.response.data.message);
            }
        },
    });

    const steps = ['Informações Pessoais', 'Informações Profissionais'];

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const fetchAddress = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setEndereco(response.data.logradouro);
            formik.setFieldValue('endereco', response.data.logradouro);
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
        }
    };

    return (
        <motion.div
            className={styles['signupform']}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 style={{ marginBottom: '20px' }}>Preencha os dados abaixo e cadastre-se agora mesmo!</h2>
            <Stepper activeStep={step}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <form onSubmit={formik.handleSubmit}>
                {step === 0 && (
                    <Box className={styles['formulario']}>
                        <TextField
                            id="nome"
                            name="nome"
                            label="Nome Completo"
                            autoComplete="username"
                            variant="standard"
                            value={formik.values.nome}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nome && Boolean(formik.errors.nome)}
                            helperText={formik.touched.nome && formik.errors.nome}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="telefone"
                            name="telefone"
                            label="Telefone"
                            variant="standard"
                            autoComplete="tel"
                            value={formik.values.telefone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.telefone && Boolean(formik.errors.telefone)}
                            helperText={formik.touched.telefone && formik.errors.telefone}
                        />
                        <TextField
                            id="email"
                            name="email"
                            label="E-mail"
                            autoComplete="email"
                            variant="standard"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            id="dataNascimento"
                            name="dataNascimento"
                            label="Data de Nascimento"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.dataNascimento}
                            onChange={formik.handleChange}
                            error={formik.touched.dataNascimento && Boolean(formik.errors.dataNascimento)}
                            helperText={formik.touched.dataNascimento && formik.errors.dataNascimento}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="cpfCnpj"
                            name="cpfCnpj"
                            label="CPF/CNPJ"
                            value={formik.values.cpfCnpj}
                            onChange={formik.handleChange}
                            error={formik.touched.cpfCnpj && Boolean(formik.errors.cpfCnpj)}
                            helperText={formik.touched.cpfCnpj && formik.errors.cpfCnpj}
                        />
                        <Button onClick={handleNext}style={{alignItems: 'right', marginBottom: '15px'}}>Próximo</Button>
                    </Box>
                )}
                {step === 1 && (
                    <Box className={styles['formulario']}>
                        <TextField
                            id="cep"
                            name="cep"
                            label="CEP"
                            value={formik.values.cep}
                            onChange={(e) => {
                                formik.handleChange(e);
                                fetchAddress(e.target.value);
                            }}
                            onBlur={formik.handleBlur}
                            error={formik.touched.cep && Boolean(formik.errors.cep)}
                            helperText={formik.touched.cep && formik.errors.cep}
                            style={{ marginTop: '10px' }}
                        />
                        <Box className={styles['endereco']}>
                            <TextField
                                id="endereco"
                                name="endereco"
                                label="Endereço"
                                value={endereco}
                                disabled
                                error={formik.touched.endereco && Boolean(formik.errors.endereco)}
                                helperText={formik.touched.endereco && formik.errors.endereco}
                                style={{ width: '80%' }}
                            />
                            <TextField
                                id="numeroCasa"
                                name="numeroCasa"
                                label="Número"
                                variant="standard"
                                value={formik.values.numeroCasa}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.numeroCasa && Boolean(formik.errors.numeroCasa)}
                                helperText={formik.touched.numeroCasa && formik.errors.numeroCasa}
                                style={{ width: '20%' }}
                            />
                        </Box>
                        <TextField
                            id="complementoCasa"
                            name="complementoCasa"
                            label="Complemento"
                            variant="standard"
                            value={formik.values.complementoCasa}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.complementoCasa && Boolean(formik.errors.complementoCasa)}
                            helperText={formik.touched.complementoCasa && formik.errors.complementoCasa}
                        />
                        <TextField
                            id="senha"
                            name="senha"
                            label="Senha"
                            variant="standard"
                            autoComplete="password"
                            type="password"
                            value={formik.values.senha}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.senha && Boolean(formik.errors.senha)}
                            helperText={formik.touched.senha && formik.errors.senha}
                        />
                        <TextField
                            id="confisenha"
                            name="confisenha"
                            label="Confirme sua senha"
                            variant="standard"
                            autoComplete="password"
                            type="password"
                            value={formik.values.confisenha}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.confisenha && Boolean(formik.errors.confisenha)}
                            helperText={formik.touched.confisenha && formik.errors.confisenha}
                        />
                        <Box className={styles['botoes']}>
                            <Button onClick={handleBack}>Voltar</Button>
                            <Button type="submit">Cadastrar</Button>
                        </Box>
                    </Box>
                )}

                {message ? <h3 style={{ fontSize: '0.84em', color: '#202949', textAlign: 'left' }}><strong>{message}</strong></h3> : ''}
            </form>
        </motion.div>
    );
};
