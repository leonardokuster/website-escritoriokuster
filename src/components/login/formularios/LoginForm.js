import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import styles from '../formularios/loginform.module.css';
import Link from 'next/link';
import axios from 'axios';
import { motion } from "framer-motion";

const validationSchema = yup.object({
    email: yup
    .string('E-mail')
    .email('Insira um e-mail válido')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Insira um e-mail válido')
    .required('Campo obrigatório'),
    senha: yup
    .string('Senha')
    .required('Campo obrigatório'),
})

export default function LoginForm() {
    const [message, setMessage] = useState('');
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            senha: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('https://api-login-self.vercel.app/usuario/login', values, {
                    headers: { 'Content-Type': 'application/json' },
                });
                resetForm();
                setMessage('');
        
                if (response.status === 200) {
                    router.push(response.data.redirectTo);
                }
            } catch (err) {
                console.log('Erro:', err);
                if (err.response) {
                    if (err.response.status === 401) {
                        setMessage('Credenciais inválidas');
                    } else {
                        setMessage('Erro ao tentar fazer login');
                    }
                } else {
                    setMessage('Erro ao tentar fazer login');
                }
            }
        },        
    });

    const renderErrorMessage = () => {
        return <h3 style={{ fontSize: '0.84em', color: '#202949', textAlign: 'left' }}>{message}</h3>;
    };
    
  
    return(
        <>
            <motion.div
                className={styles['loginform']}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>Seja bem-vindo(a) ao portal do cliente!</h2>
                <form onSubmit={formik.handleSubmit} className={styles['formulario']}>
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
                    {renderErrorMessage()}
                    <h3 style={{textAlign: 'end', textDecoration: 'none', fontSize: '0.8em'}}><Link href="/forgot"><strong>Esqueceu a senha?</strong></Link></h3>
                    <div>
                        <Button className={styles['botao']} type= "submit" variant= "contained">
                            Entrar
                        </Button>
                    </div>
                    <br></br>
                </form>
            </motion.div>
        </>
    );
};