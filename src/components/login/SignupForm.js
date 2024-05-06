import React, { useState } from 'react';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import styles from '../login/signupform.module.css';
import axios from 'axios';
import { motion } from "framer-motion";

const validationSchema = yup.object({
    nome: yup
    .string('Nome de usuário')
    .matches(/^[a-zA-Z0-9]+$/, 'Nome de usuário inválido, por favor tente outro')
    .required('Campo obrigatório'),
    email: yup
    .string('E-mail')
    .email('Insira um e-mail válido')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Insira um e-mail válido')
    .required('Campo obrigatório'),
    senha: yup
    .string('Senha')
    .min(5, 'Senha deve conter pelo menos 5 dígitos')
    .required('Campo obrigatório'),
    confisenha: yup
    .string('Confirmar senha')
    .oneOf([yup.ref('senha'), null], 'Senhas diferentes')
    .required('Campo obrigatório'),
})

export default function Form() {
    const [message, setMessage] = useState('');
    const formik = useFormik({
        initialValues: {
            nome: '',
            email: '',
            senha: '',
            confisenha: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('https://api-login-self.vercel.app/escritoriokuster/salvarcadastro', values, {
                    headers: { 'Content-Type': 'application/json' },
                });
                setMessage(response.data.message);
                resetForm();
                } catch (err) {
                setMessage(err.response.data.message);
                }
        },
    });
   
    return(
        <motion.div
            className={styles['signupform']}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Preencha os dados abaixo e cadastre-se agora mesmo!</h2>
            <form onSubmit={formik.handleSubmit} className={styles['formulario']}>
                <TextField
                    id="nome"
                    name="nome"
                    label= "Nome de usuário"
                    autoComplete="username"
                    variant="standard"
                    value= {formik.values.nome}
                    onChange= {formik.handleChange}
                    onBlur= {formik.handleBlur}
                    error= {formik.touched.nome && Boolean(formik.errors.nome)}
                    helperText= {formik.touched.nome && formik.errors.nome}
                    onBlur={() => {
                        formik.handleBlur('nome');
                        if (formik.values.nome) {
                            axios.post('https://api-login-self.vercel.app/escritoriokuster/salvarcadastro', 
                            { nome: formik.values.nome },
                            { headers: { 'Content-Type': 'application/json' } })
                                .then(response => {
                                    if (response.data.error) {
                                        setMessage('Nome de usuário já existe');
                                    } else {
                                        setMessage('');
                                    }
                                })
                                .catch(error => {
                                    console.error('Erro ao verificar nome de usuário:', error);
                                    setMessage('Erro ao verificar nome de usuário');
                                });
                        }
                    }}                            
                />
                <TextField
                    id="email"
                    name="email"
                    label= "E-mail"
                    autoComplete="email"
                    variant="standard"
                    value= {formik.values.email}
                    onChange= {formik.handleChange}
                    onBlur= {formik.handleBlur}
                    error= {formik.touched.email && Boolean(formik.errors.email)}
                    helperText= {formik.touched.email && formik.errors.email}
                    onBlur={() => {
                        formik.handleBlur('email');
                        if (formik.values.email) {
                            axios.post('https://api-login-self.vercel.app/escritoriokuster/salvarcadastro', 
                            { nome: formik.values.email },
                            { headers: { 'Content-Type': 'application/json' } })
                                .then(response => {
                                    if (response.data.error) {
                                        setMessage('E-mail já cadastrado, faça o login');
                                    } else {
                                        setMessage('');
                                    }
                                })
                                .catch(error => {
                                    console.error('Erro ao verificar e-mail:', error);
                                    setMessage('Erro ao verificar e-mail');
                                });
                        }
                    }}
                />
                <TextField
                    id="senha"
                    name="senha"
                    label= "Senha"
                    variant="standard"
                    autoComplete="password"
                    value= {formik.values.senha}
                    onChange= {formik.handleChange}
                    onBlur= {formik.handleBlur}
                    error= {formik.touched.senha && Boolean(formik.errors.senha)}
                    helperText= {formik.touched.senha && formik.errors.senha}
                />
                <TextField
                    id="confisenha"
                    name="confisenha"
                    label= "Confirme sua senha"
                    variant="standard"
                    autoComplete="password"
                    value= {formik.values.confisenha}
                    onChange= {formik.handleChange}
                    onBlur= {formik.handleBlur}
                    error= {formik.touched.confisenha && Boolean(formik.errors.confisenha)}
                    helperText= {formik.touched.confisenha && formik.errors.confisenha}
                />
                {message ? <h3 style={{ fontSize: '0.84em', color: '#202949', textAlign: 'left'}}>{message}</h3> : ''}
                
                <div>
                    <Button className={styles['botao']} type= "submit" variant= "contained">
                        Cadastre-se
                    </Button>
                </div>
                <br></br>
            </form>
        </motion.div>
    );
};