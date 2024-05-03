import React, { useState } from 'react';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import styles from '../form/form.module.css';
import Link from 'next/link';
import axios from 'axios';

const validationSchema = yup.object({
    subject: yup
    .string('Selecione um serviço'),
    fullname: yup
    .string('Insira seu nome completo')
    .required('Campo obrigatório'),
    email: yup
    .string('Isira seu e-mail')
    .email('Insira um e-mail válido')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Insira um e-mail válido')
    .required('Campo obrigatório'),
    phone: yup
    .string('Insira seu número de celular')
    .min(11, 'Números a menos, insira um telefone válido com DDD.')
    .max(11, 'Números a mais, insira um telefone válido com DDD.')
    .required('Campo obrigatório'),
    content: yup
    .string('Sua mensagem')
    .required('Insira sua mensagem'),
})

const services = [
    {value: '', label: ''},
    {value: 'Abertura de empresa', label: 'Abertura de empresa'},
    {value: 'Assessoria trabalhista', label: 'Assessoria trabalhista'},
    {value: 'Encerramento de empresa', label: 'Encerramento de empresa'},
    {value: 'Escrituração contábil e tributária', label: 'Escrituração contábil e tributária'},
    {value: 'Obrigações acessórias', label: 'Obrigações acessórias'},
    {value: 'Planejamento estratégico', label: 'Planejamento estratégico'},
    {value: 'Outras opções', label: 'Outras opções'},
];

export default function Form({ showSecondTextField, showSecondButton, secondButtonText, buttonWidth }) {
    const [message, setMessage] = useState('');
    const formik = useFormik({
        initialValues: {
            subject: '',
            fullname: '',
            email: '',
            phone: '',
            content: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
              const response = await axios.post('https://api-formulario.vercel.app/solicitation', values, {
                headers: { 'Content-Type': 'application/json' },
              });
              setMessage(response.data.message);
              resetForm();
            } catch (err) {
              setMessage(err.response.data.message);
            }
        },
    });

    const secondButton = showSecondButton ? (
        <Link href={showSecondButton.link} target={showSecondButton.target}>
            <Button className={styles['segundobotao']} variant= "contained" sx={{ color: 'white', backgroundColor: '#070E26', borderRadius: '30px', height: '50px', marginTop: '20px', padding: '0px 13px' }}>
                {secondButtonText}
            </Button>
        </Link>
    ) : null;

    const secondTextField = showSecondTextField ? (
        <TextField
            id="subject"
            name="subject"
            label="Selecione um serviço"
            select
            variant="standard"
            value= {formik.values.subject}
            onChange= {formik.handleChange}
            SelectProps={{
                native: true,
            }}
        >
            {services.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </TextField>
    ) : null;
    
    return(
        <form onSubmit={formik.handleSubmit} className={styles['formulario']}>
            {secondTextField}
            <TextField
                id="fullname"
                name="fullname"
                label= "Nome completo"
                autoComplete="name"
                variant="standard"
                value= {formik.values.fullname}
                onChange= {formik.handleChange}
                onBlur= {formik.handleBlur}
                error= {formik.touched.fullname && Boolean(formik.errors.fullname)}
                helperText= {formik.touched.fullname && formik.errors.fullname}
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
            />
            <TextField
                id="phone"
                name="phone"
                label= "Telefone: xx xxxxx xxxx"
                variant="standard"
                autoComplete="tel"
                value= {formik.values.phone}
                onChange= {formik.handleChange}
                onBlur= {formik.handleBlur}
                error= {formik.touched.phone && Boolean(formik.errors.phone)}
                helperText= {formik.touched.phone && formik.errors.phone}
            />
            <TextField
                id="content"
                name="content"
                label="Mensagem"
                variant="standard"
                autoComplete="off"
                multiline
                rows={4}
                value={formik.values.content}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.content && Boolean(formik.errors.content)}
                helperText={formik.touched.content && formik.errors.content}
            />
            {message ? <h3 style={{ fontSize: '0.84em', color: '#202949', textAlign: 'left'}}>{message}</h3> : ''}
            <div className={styles['elementos']}>
                {secondButton}
                <Button className={styles['botao']} type= "submit" variant= "contained" sx={{ color: 'white', backgroundColor: '#070E26', borderRadius: '30px', height: '50px', marginTop: '20px', width: buttonWidth }}>
                    Enviar
                </Button>
            </div>
        </form>
    );
};