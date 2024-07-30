import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';
import styles from '../styles/cadastroEmpresa.module.css';
import { motion } from "framer-motion";

const validationSchema = yup.object({
    cnpj: yup
        .string('CNPJ')
        .required('Campo obrigatório'),
    nome: yup
        .string('Nome')
        .matches(/^[a-zA-Z\s]+$/, 'Nome inválido, por favor tente outro')
        .required('Campo obrigatório'),
    razao_social: yup
        .string('Razão social')
        .required('Campo obrigatório'),
    atividades_exercidas: yup
        .string('Atividades exercidas')
        .required('Campo obrigatório'),
    capital_social: yup
        .string('Capital social')
        .required('Campo obrigatório'),
    endereco: yup
        .string('Endereço')
        .required('Campo obrigatório'),
    email: yup
        .string('E-mail')
        .email('Insira um e-mail válido')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Insira um e-mail válido')
        .required('Campo obrigatório'),
    telefone: yup
        .string('Telefone')
        .required('Campo obrigatório'),
    qntSocios: yup
        .number()
        .min(1, 'Quantidade de sócios deve ser maior ou igual a 1')
        .required('Quantidade de sócios é obrigatória'),
    socios: yup.array().of(
        yup.object().shape({
            nome_socio: yup
                .string()
                .required('Nome do sócio é obrigatório'),
        })
    ),
});

export default function CadastroEmpresa() {
    const [message, setMessage] = useState('');

    const formik = useFormik({
        initialValues: {
            cnpj: '',
            nome_fantasia: '',
            razao_social: '',
            atividades_exercidas: '',
            capital_social: '',
            endereco: '',
            email: '',
            telefone: '',
            qntSocios: 1,
            socios: [],
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async (values, { resetForm }) => {
            const token = localStorage.getItem('token');
            const usuario_id = localStorage.getItem('usuario_id');
        
            try {
                const payload = {
                    ...values,
                    capital_social: parseFloat(values.capital_social.replace('R$', '').replace('.', '').replace(',', '.')),
                    usuario_id
                };
        
                const response = await axios.post(`http://localhost:3001/companies/${usuario_id}`, payload, {
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

    return (
        <motion.div
            className={styles['cadastroform']}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >

            <form onSubmit={formik.handleSubmit}>
                <Box className={styles['formulario']}>
                    <TextField
                        id="cnpj"
                        name="cnpj"
                        label="CNPJ"
                        value={formik.values.cnpj}
                        onChange={formik.handleChange}
                        error={formik.touched.cnpj && Boolean(formik.errors.cnpj)}
                        helperText={formik.touched.cnpj && formik.errors.cnpj}
                    />
                    <TextField
                        id="nome_fantasia"
                        name="nome_fantasia"
                        label="Nome fantasia"
                        variant="standard"
                        value={formik.values.nome_fantasia}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.nome_fantasia && Boolean(formik.errors.nome_fantasia)}
                        helperText={formik.touched.nome_fantasia && formik.errors.nome_fantasia}
                        style={{ marginTop: '10px' }}
                    />
                    <TextField
                        id="razao_social"
                        name="razao_social"
                        label="Razão social"
                        variant="standard"
                        value={formik.values.razao_social}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.razao_social && Boolean(formik.errors.razao_social)}
                        helperText={formik.touched.razao_social && formik.errors.razao_social}
                    />
                    <TextField
                        id="atividades_exercidas"
                        name="atividades_exercidas"
                        label="Atividades exercidas"
                        variant="standard"
                        value={formik.values.atividades_exercidas}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.atividades_exercidas && Boolean(formik.errors.atividades_exercidas)}
                        helperText={formik.touched.atividades_exercidas && formik.errors.atividades_exercidas}
                    />
                    <TextField
                        id="capital_social"
                        name="capital_social"
                        label="Capital social"
                        variant="standard"
                        value={formik.values.capital_social}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.capital_social && Boolean(formik.errors.capital_social)}
                        helperText={formik.touched.capital_social && formik.errors.capital_social}
                    />
                    <TextField
                        id="endereco"
                        name="endereco"
                        label="Endereço"
                        variant="standard"
                        value={formik.values.endereco}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.endereco && Boolean(formik.errors.endereco)}
                        helperText={formik.touched.endereco && formik.errors.endereco}
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
                                    id={`nome_socio${index}`}
                                    name={`socios[${index}].nome_socio`}
                                    label={`Nome do ${index + 1}º sócio`}
                                    variant="standard"
                                    value={formik.values.socios[index]?.nome_socio || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.socios && formik.touched.socios[index]?.nome_socio && Boolean(formik.errors.socios?.[index]?.nome_socio)}
                                    helperText={formik.touched.socios && formik.touched.socios[index]?.nome_socio && formik.errors.socios?.[index]?.nome_socio}
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