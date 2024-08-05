import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';
import styles from '../styles/cadastroEmpresa.module.css';
import { motion } from "framer-motion";
import InputMask from 'react-input-mask';
import PhoneInput from '../../components/form/PhoneInput';
import CurrencyInput from '../../components/form/CurrencyInput';

const validationSchema = yup.object({
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
        .required('Campo obrigatório'),
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

export default function CadastroEmpresa() {
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');
    const [message, setMessage] = useState('');

    const formik = useFormik({
        initialValues: {
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
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async (values, { resetForm }) => {
            const token = localStorage.getItem('token');
            const usuario_id = localStorage.getItem('usuario_id');
        
            if (!usuario_id) {
                setMessage('ID do usuário não encontrado');
                return;
            }
        
            try {
                const response = await axios.post(`http://localhost:3001/companies/${usuario_id}`, { ...values, usuario_id }, {
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                });
        
                setMessage(response.data.message);
                resetForm();
            } catch (err) {
                console.error('Erro ao enviar a requisição:', err.response);
                setMessage(err.response.data.message);
            }
        },
    });

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
            className={styles['cadastroform']}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >

            <form onSubmit={formik.handleSubmit}>
                <Box className={styles['formulario']}>
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
                        variant="standard"
                        value={formik.values.nomeFantasia}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.nomeFantasia && Boolean(formik.errors.nomeFantasia)}
                        helperText={formik.touched.nomeFantasia && formik.errors.nomeFantasia}
                        style={{ marginTop: '10px' }}
                    />
                    <TextField
                        id="razaoSocial"
                        name="razaoSocial"
                        label="Razão social"
                        variant="standard"
                        value={formik.values.razaoSocial}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.razaoSocial && Boolean(formik.errors.razaoSocial)}
                        helperText={formik.touched.razaoSocial && formik.errors.razaoSocial}
                    />
                    <TextField
                        id="atividadesExercidas"
                        name="atividadesExercidas"
                        label="Atividades exercidas"
                        variant="standard"
                        value={formik.values.atividadesExercidas}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                </Box>
                
                <Box className={styles['botoes']}>
                    <Button type="submit">Cadastrar</Button>
                </Box>

                {message && (
                    <h3 style={{ fontSize: '0.84em', color: '#202949', textAlign: 'left' }}>
                        <strong>{message}</strong>
                    </h3>
                )}
            </form>
        </motion.div>
    );
}