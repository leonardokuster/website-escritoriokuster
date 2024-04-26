import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import styles from '../loginForm/loginform.module.css';
import Link from 'next/link';
import axios from 'axios';
import { motion } from "framer-motion";

const validationSchema = yup.object({
    username: yup
    .string('Nome de usuário')
    .min(5, 'Insira um nome de usuário maior')
    .required('Campo obrigatório'),
    email: yup
    .string('E-mail')
    .email('Insira um e-mail válido')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Insira um e-mail válido')
    .required('Campo obrigatório'),
    password: yup
    .string('Senha')
    .max(24, 'Senha inválida')
    .required('Campo obrigatório'),
})

export default function Form() {
    const [message, setMessage] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(true);

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
              const response = await axios.post('http://localhost:8080/api/users/signup', values, {
                headers: { 'Content-Type': 'application/json' },
              });
              setMessage(response.data.message);
              resetForm();
            } catch (err) {
              setMessage(err.response.data.message);
            }
        },
    });

    useEffect(() => {
        const signupButton = document.getElementById("signupButton");

        if (signupButton) {
            signupButton.addEventListener("click", () => {
                setShowLoginForm(false);
            });
        }
    }, []);


    
    return(
        <>
        <motion.div
            id='loginForm'
            className={showLoginForm ? styles['formulario'] : styles['formulario-hidden']}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{width: '25vw'}}
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
                    id="password"
                    name="password"
                    label= "Senha"
                    variant="standard"
                    autoComplete="password"
                    value= {formik.values.password}
                    onChange= {formik.handleChange}
                    onBlur= {formik.handleBlur}
                    error= {formik.touched.password && Boolean(formik.errors.password)}
                    helperText= {formik.touched.password && formik.errors.password}
                />
                {message ? <h3 style={{ fontSize: '0.84em', color: '#202949', textAlign: 'left'}}>{message}</h3> : ''}
                <h3 style={{textAlign: 'end', textDecoration: 'none', fontSize: '0.8em'}}><a href="/forgot"><strong>Esqueceu a senha?</strong></a></h3>
                <div>
                    <Button className={styles['botao']} type= "submit" variant= "contained">
                        Entrar
                    </Button>
                </div>
                <br></br>
                <h3 style={{ alignSelf: 'center', fontWeight: 'normal', fontSize: '0.9em' }}>Ainda não tem uma conta?<Link id="signupButton" href="#"> <strong>Cadastre-se</strong></Link></h3>
            </form>
        </motion.div>

        <motion.div
            id='signupForm'
            className={!showLoginForm ? styles['formulario'] : styles['formulario-hidden']}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{width: '25vw'}}
        >
            <h2>Preencha os dados abaixo e cadastre-se agora mesmo!</h2>
            <form onSubmit={formik.handleSubmit} className={styles['formulario']}>
                <TextField
                    id="signupUsername"
                    name="username"
                    label= "Nome de usuário"
                    autoComplete="username"
                    variant="standard"
                    value= {formik.values.username}
                    onChange= {formik.handleChange}
                    onBlur= {formik.handleBlur}
                    error= {formik.touched.username && Boolean(formik.errors.username)}
                    helperText= {formik.touched.username && formik.errors.username}
                />
                <TextField
                    id="signupEmail"
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
                    id="signupPassword"
                    name="password"
                    label= "Senha"
                    variant="standard"
                    autoComplete="password"
                    value= {formik.values.password}
                    onChange= {formik.handleChange}
                    onBlur= {formik.handleBlur}
                    error= {formik.touched.password && Boolean(formik.errors.password)}
                    helperText= {formik.touched.password && formik.errors.password}
                />
                <div>
                    <Button className={styles['botao']} type= "submit" variant= "contained">
                        Cadastrar
                    </Button>
                </div>
                <br></br>
                <h3 style={{ alignSelf: 'center', fontWeight: 'normal', fontSize: '0.9em' }}>Já possui conta?<Link href="#" onClick={() => setShowLoginForm(true)}> <strong>Faça o login aqui</strong></Link></h3>
            </form>
        </motion.div>
        </>
    );
};