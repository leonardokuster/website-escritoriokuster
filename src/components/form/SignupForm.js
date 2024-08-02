import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { TextField, Button, Stepper, Step, StepLabel, Box, FormControl, FormControlLabel, FormHelperText, Checkbox } from '@mui/material';
import styles from '../../styles/components/signupform.module.css';
import { motion } from "framer-motion";
import InputMask from 'react-input-mask';
import PhoneInput from './PhoneInput';
import CurrencyInput from './CurrencyInput';

const validationSchema = yup.object({
    nome: yup
        .string('Nome completo')
        .required('Campo obrigatório'),
    telefonePessoal: yup
        .string('Telefone')
        .required('Campo obrigatório'),
    emailPessoal: yup
        .string('E-mail')
        .email('Insira um e-mail válido')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Insira um e-mail válido')
        .required('Campo obrigatório'),
    dataNascimento: yup
        .date()
        .required('Campo obrigatório'),
    cpf: yup
        .string('CPF')
        .required('Campo obrigatório'),
    senha: yup
        .string('Senha')
        .min(5, 'Senha deve conter pelo menos 5 dígitos')
        .required('Campo obrigatório'),
    confisenha: yup
        .string('Confirmar senha')
        .oneOf([yup.ref('senha'), null], 'Senhas diferentes')
        .required('Campo obrigatório'),
    possuiEmpresa: yup
        .boolean('Possui empresa?')
        .required('Campo obrigatório'),
    cnpj: yup
        .string('CNPJ')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Campo obrigatório'),
            otherwise: () => yup.string().notRequired(),
        }),
    nomeFantasia: yup
        .string('Nome fantasia')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Campo obrigatório'),
            otherwise: () => yup.string().notRequired(),
        }),
    razaoSocial: yup
        .string('Razão social')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Campo obrigatório'),
            otherwise: () => yup.string().notRequired(),
        }),
    atividadesExercidas: yup
        .string('Atividades exercidas')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Campo obrigatório'),
            otherwise: () => yup.string().notRequired(),
        }),
    capitalSocial: yup
        .string('Capital social')    
        .required('Campo obrigatório')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Campo obrigatório'),
            otherwise: () => yup.string().notRequired(),
        }),
    cep: yup
        .string('CEP')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Campo obrigatório'),
            otherwise: () => yup.string().notRequired(),
        }),
    endereco: yup
        .string('Endereço')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Campo obrigatório'),
            otherwise: () => yup.string().notRequired(),
        }),
    numeroEmpresa: yup
        .string('Número')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Campo obrigatório'),
            otherwise: () => yup.string().notRequired(),
        }),
    complementoEmpresa: yup
        .string('Complemento'),
    emailEmpresa: yup
        .string('E-mail')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Campo obrigatório'),
            otherwise: () => yup.string().notRequired(),
        }),
    telefoneEmpresa: yup
        .string('Telefone')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Campo obrigatório'),
            otherwise: () => yup.string().notRequired(),
        }),
    qntSocios: yup
        .number()
        .min(1, 'Quantidade de sócios deve ser maior ou igual a 1')
        .when('possuiEmpresa', {
            is: true,
            then: () => yup.string().required('Quantidade de sócios é obrigatória'),
            otherwise: () => yup.string().notRequired(),
        }),
    socios: yup.array().of(
        yup.object().shape({
            nomeSocio: yup
                .string()
                .when('possuiEmpresa', {
                    is: true,
                    then: () => yup.string().required('Nome do sócio é obrigatório'),
                    otherwise: () => yup.string().notRequired(),
                }),
        })
    ),
});

export default function SignupForm() {
    const [step, setStep] = useState(0);
    const [endereco, setEndereco] = useState('');
    const [message, setMessage] = useState('');
    const [mask, setMask] = useState("(99) 99999-9999")

    const formik = useFormik({
        initialValues: {
            nome: '',
            telefonePessoal: '',
            emailPessoal: '',
            dataNascimento: '',
            cpf: '',
            senha: '',
            confisenha: '',
            possuiEmpresa: false,
            cnpj: '',
            nomeFantasia: '',
            razaoSocial: '',
            atividadesExercidas: '',
            capitalSocial: '',
            cep: '',
            endereco: '',
            numeroEmpresa: '',
            complementoEmpresa: '',
            emailEmpresa: '',
            telefoneEmpresa: '',
            qntSocios: 1,
            socios: [{ nomeSocio: '' }],
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('http://localhost:3001/signup', values, {
                    headers: { 'Content-Type': 'application/json' },
                });
                console.log('Response from server', response);
                console.log('Valores para cadastro', values);
                setMessage(response.data.message);
                resetForm();
            } catch (err) {
                setMessage(err.response.data.message);
            }
        },
    });

    const steps = ['Informações Pessoais', 'Informações Profissionais'];

    const handleNext = async () => {
        const currentStepErrors = await formik.validateForm();

        console.log('Erros de validação:', currentStepErrors);

        if (Object.keys(currentStepErrors).length === 0) {
            setStep((prevStep) => prevStep + 1);
        } else {
            formik.setTouched(currentStepErrors);
        }
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

    console.log(formik.values.possuiEmpresa);


    return (
        <motion.div
            className={styles['signupform']}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 style={{ marginBottom: '20px' }}>Preencha os dados abaixo e cadastre-se agora mesmo!</h2>
            <Stepper activeStep={step} className={styles['steps']}>
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
                        <PhoneInput
                            id="telefonePessoal"
                            name="telefonePessoal"
                            label="Telefone"
                            value={formik.values.telefonePessoal}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            onFocus={formik.handleFocus}
                            error={formik.touched.telefonePessoal && Boolean(formik.errors.telefonePessoal)}
                            helperText={formik.touched.telefonePessoal && formik.errors.telefonePessoal}
                        />
                        <TextField
                            id="emailPessoal"
                            name="emailPessoal"
                            label="E-mail"
                            autoComplete="email"
                            variant="standard"
                            value={formik.values.emailPessoal}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.emailPessoal && Boolean(formik.errors.emailPessoal)}
                            helperText={formik.touched.emailPessoal && formik.errors.emailPessoal}
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
                        <InputMask
                        mask="999.999.999-99"
                        value={formik.values.cpf}
                        onChange={formik.handleChange}
                        >
                            {() => (
                                <TextField
                                    id="cpf"
                                    name="cpf"
                                    label="CPF*"
                                    value={formik.values.cpf}
                                    onChange={formik.handleChange}
                                    error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                                    helperText={formik.touched.cpf && formik.errors.cpf}
                                />
                            )}
                        </InputMask>
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
                        <Button onClick={handleNext} style={{alignItems: 'right', marginBottom: '15px'}}>Próximo</Button>
                    </Box>
                )}
                {step === 1 && (
                    <Box className={styles['formulario']}>
                        <FormControl
                            component="fieldset"
                            error={formik.touched.possuiEmpresa && Boolean(formik.errors.possuiEmpresa)}
                        >
                        <FormControlLabel
                            control={
                                <Checkbox
                                id="possuiEmpresa"
                                name="possuiEmpresa"
                                checked={formik.values.possuiEmpresa}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                color="primary"
                                />
                            }
                            label="Já possuo empresa"
                            />
                            {formik.touched.possuiEmpresa && formik.errors.possuiEmpresa && (
                            <FormHelperText>{formik.errors.possuiEmpresa}</FormHelperText>
                            )}
                        </FormControl>
                        {formik.values.possuiEmpresa && (
                            <>
                                <InputMask
                                    mask="99.999.999/9999-99"
                                    value={formik.values.cnpj}
                                    onChange={formik.handleChange}
                                >
                                    {() => (
                                        <TextField
                                            id="cnpj"
                                            name="cnpj"
                                            label="CNPJ"
                                            error={formik.touched.cnpj && Boolean(formik.errors.cnpj)}
                                            helperText={formik.touched.cnpj && formik.errors.cnpj}
                                        />
                                    )}
                                </InputMask>
                                <TextField
                                    id="nomeFantasia"
                                    name="nomeFantasia"
                                    label="Nome fantasia"
                                    value={formik.values.nomeFantasia}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nomeFantasia && Boolean(formik.errors.nomeFantasia)}
                                    helperText={formik.touched.nomeFantasia && formik.errors.nomeFantasia}
                                />
                                <TextField
                                    id="razaoSocial"
                                    name="razaoSocial"
                                    label="Razão social"
                                    value={formik.values.razaoSocial}
                                    onChange={formik.handleChange}
                                    error={formik.touched.razaoSocial && Boolean(formik.errors.razaoSocial)}
                                    helperText={formik.touched.razaoSocial && formik.errors.razaoSocial}
                                />
                                <TextField
                                    id="atividadesExercidas"
                                    name="atividadesExercidas"
                                    label="Atividades exercidas"
                                    value={formik.values.atividadesExercidas}
                                    onChange={formik.handleChange}
                                    error={formik.touched.atividadesExercidas && Boolean(formik.errors.atividadesExercidas)}
                                    helperText={formik.touched.atividadesExercidas && formik.errors.atividadesExercidas}
                                />
                                <CurrencyInput
                                    id="capitalSocial"
                                    name="capitalSocial"
                                    label="Capital social"
                                    value={formik.values.capitalSocial}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    onFocus={formik.handleFocus}
                                    error={formik.touched.capitalSocial && Boolean(formik.errors.capitalSocial)}
                                    helperText={formik.touched.capitalSocial && formik.errors.capitalSocial}
                                />
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
                                        id="numeroEmpresa"
                                        name="numeroEmpresa"
                                        label="Número"
                                        variant="standard"
                                        value={formik.values.numeroEmpresa}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.numeroEmpresa && Boolean(formik.errors.numeroEmpresa)}
                                        helperText={formik.touched.numeroEmpresa && formik.errors.numeroEmpresa}
                                        style={{ width: '20%' }}
                                    />
                                </Box>
                                <TextField
                                    id="complementoEmpresa"
                                    name="complementoEmpresa"
                                    label="Complemento"
                                    variant="standard"
                                    value={formik.values.complementoEmpresa}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.complementoEmpresa && Boolean(formik.errors.complementoEmpresa)}
                                    helperText={formik.touched.complementoEmpresa && formik.errors.complementoEmpresa}
                                />
                                <TextField
                                    id="emailEmpresa"
                                    name="emailEmpresa"
                                    label="E-mail"
                                    variant="standard"
                                    value={formik.values.emailEmpresa}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.emailEmpresa && Boolean(formik.errors.emailEmpresa)}
                                    helperText={formik.touched.emailEmpresa && formik.errors.emailEmpresa}
                                />
                                <PhoneInput
                                    id="telefoneEmpresa"
                                    name="telefoneEmpresa"
                                    label="Telefone da empresa"
                                    value={formik.values.telefoneEmpresa}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    onFocus={formik.handleFocus}
                                    error={formik.touched.telefoneEmpresa && Boolean(formik.errors.telefoneEmpresa)}
                                    helperText={formik.touched.telefoneEmpresa && formik.errors.telefoneEmpresa}
                                />
                                <TextField
                                    id="qntSocios"
                                    name="qntSocios"
                                    label="Quantidade sócios"
                                    variant="standard"
                                    value={formik.values.qntSocios}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.qntSocios && Boolean(formik.errors.qntSocios)}
                                    helperText={formik.touched.qntSocios && formik.errors.qntSocios}
                                    style={{ width: '20%' }}
                                />
                                {formik.values.qntSocios > 0 && (
                                    [...Array(Number(formik.values.qntSocios)).keys()].map((index) => (
                                        <Box key={index}>
                                            <TextField
                                                id={`nomeSocio${index}`}
                                                name={`socios[${index}].nomeSocio`}
                                                label={`Nome do ${index + 1}º sócio`}
                                                variant="standard"
                                                value={formik.values.socios[index]?.nomeSocio || ''}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.socios && formik.touched.socios[index]?.nomeSocio && Boolean(formik.errors.socios?.[index]?.nomeSocio)}
                                                helperText={formik.touched.socios && formik.touched.socios[index]?.nomeSocio && formik.errors.socios?.[index]?.nomeSocio}
                                                style={{ marginTop: '10px' }}
                                            />
                                        </Box>
                                    ))
                                )}
                            </>
                        )}
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
