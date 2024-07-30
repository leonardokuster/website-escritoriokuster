import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { TextField, Button, Stepper, Step, StepLabel, Box, Select, MenuItem, FormControl, FormControlLabel, InputLabel, FormHelperText, Checkbox } from '@mui/material';
import styles from '../styles/cadastroFuncionario.module.css';
import { motion } from "framer-motion";

const formatDate = (date) => {
    if (!date) return null;
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
};

const validationSchemas  = [
    yup.object({
        nome: yup
            .string('Nome completo')
            .matches(/^[a-zA-Z\s]+$/, 'Nome inválido, por favor tente outro')
            .required('Campo obrigatório'),
        email: yup
            .string('E-mail')
            .email('Insira um e-mail válido')
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Insira um e-mail válido')
            .required('Campo obrigatório'),
        telefone: yup
            .string('Telefone')
            .required('Campo obrigatório'),
        sexo: yup
            .string('Sexo')
            .required('Campo obrigatório'),
        cor_etnia: yup
            .string('Cor/Etnia')
            .required('Campo obrigatório'),
        data_nascimento: yup
            .date()
            .nullable()
            .required('Campo obrigatório'),
        local_nascimento: yup
            .string('Local do nascimento')
            .required('Campo obrigatório'),
        nacionalidade: yup
            .string('Nacionalidade')
            .required('Campo obrigatório'),
        cpf: yup
            .string('CPF')
            .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
            .required('Campo obrigatório'),
        rg: yup
            .string('RG')
            .notRequired(),   
        orgao_expedidor: yup
            .string('Órgão expedidor')
            .notRequired(),
        data_rg: yup
            .date()
            .nullable()
            .notRequired(),
    }),
    yup.object({
        cep: yup
            .string('CEP')
            .required('Campo obrigatório'),
        endereco: yup
            .string('Endereço')
            .required('Campo obrigatório'),
        numero_casa: yup
            .string('Número')
            .required('Campo obrigatório'),
        complemento_casa: yup
            .string('Complemento')
            .notRequired(),
        bairro: yup
            .string('Bairro')
            .required('Campo obrigatório'),
        cidade: yup
            .string('Cidade')
            .required('Campo obrigatório'),
        estado: yup
            .string('Estado')
            .required('Campo obrigatório'),
    }),
    yup.object({
        nome_mae: yup
            .string('Nome da mãe')
            .required('Campo obrigatório'),
        nome_pai: yup
            .string('Nome do pai')
            .notRequired(),
        estado_civil: yup
            .string('Estado civil')
            .required('Campo obrigatório'),
        nome_conjuge: yup
            .string('Nome cônjuge')
            .notRequired(),
        qnt_dependente: yup
            .number()
            .min(0, 'Quantidade de dependentes deve ser maior ou igual a 0')
            .required('Quantidade de dependentes é obrigatória'),
        dependentes: yup.array().of(
            yup.object().shape({
                nomeDependente: yup
                    .string()
                    .required('Nome do dependente é obrigatório'),
                dataNascimentoDependente: yup
                    .date()
                    .nullable()
                    .required('Data de nascimento é obrigatória'),
                cpfDependente: yup
                    .string()
                    .required('CPF do dependente é obrigatório'),
                localNascimentoDependente: yup
                    .string()
                    .required('Local de nascimento é obrigatório'),
            })
        ),
    }),
    yup.object({
        escolaridade: yup
            .string('Escolaridade')
            .required('Campo obrigatório'),
        pis: yup
            .string('Número do PIS')
            .required('Campo obrigatório'),
        numero_ct: yup
            .string('Número da carteira de trabalho')
            .required('Campo obrigatório'),
        serie: yup
            .string('Série')
            .required('Campo obrigatório'),
        data_ct: yup
            .date()
            .nullable()
            .required('Campo obrigatório'),
        carteira_digital: yup
            .string('Carteira digital')
            .notRequired(),
        titulo_eleitoral: yup
            .string('Título eleitoral')
            .notRequired(),
        zona: yup
            .string('Zona')
            .notRequired(),
        secao: yup 
            .string('Seção')
            .notRequired(),
    }),
    yup.object({
        funcao: yup
            .string('Função')
            .required('Campo obrigatório'),
        data_admissao: yup
            .date()
            .nullable()
            .required('Campo obrigatório'),
        salario: yup
            .number('Salário')
            .required('Campo obrigatório'),
        contrato_experiencia: yup
            .string('Contrato experiência')
            .notRequired(),
        horarios: yup
            .string('Horário de trabalho')
            .required('Campo obrigatório'),
        insalubridade: yup
            .string('Insalubridade')
            .required('Campo obrigatório'),
        periculosidade: yup
            .string('Periculosidade')
            .required('Campo obrigatório'),
        quebra_de_caixa: yup
            .string('Quebra de caixa')
            .required('Campo obrigatório'),
        vale_transporte: yup
            .string('Vale transporte')
            .required('Campo obrigatório'),
        quantidade_vales: yup
            .number('Quantidade vales')
            .notRequired(),
    })
]

export default function CadastroFuncionario({cnpj}) {
    const [step, setStep] = useState(0);
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [message, setMessage] = useState('');
    
    const formik = useFormik({
        initialValues: {
            nome: '',
            email: '',
            telefone: '',
            sexo: '',
            cor_etnia: '',
            data_nascimento: '',
            local_nascimento: '',
            nacionalidade: 'Brasileiro(a)',
            cpf: '',
            rg: '',
            orgao_expedidor: '',
            data_rg: '',
            cep: '',
            endereco: '',
            numero_casa: '',
            complemento_casa: '',
            bairro: '',
            cidade: '',
            estado: '',
            nome_mae: '',
            nome_pai: '',
            escolaridade: '',
            estado_civil: '',
            nome_conjuge: '',
            pis: '',
            numero_ct: '',
            serie: '',
            data_ct: '',
            carteira_digital: false,
            titulo_eleitoral: '',
            zona: '',
            secao: '',
            qnt_dependente: 0,
            dependentes: [],
            funcao: '',
            data_admissao: '',
            salario: '',
            contrato_experiencia: '',
            horarios: '',
            insalubridade: false,
            periculosidade: false,
            quebra_de_caixa: false,
            vale_transporte: false,
            quantidade_vales: '',
        },
        validationSchema: validationSchemas[step],
        validateOnChange: false,  
        validateOnBlur: false,   
        onSubmit: async (values, { resetForm }) => {
            const token = localStorage.getItem('token');
            const empresaId = localStorage.getItem('empresa_id');

            console.log('Empresa ID:', empresaId);

            if (!empresaId) {
                setMessage('Empresa ID não encontrado');
                return;
            }

            const formattedValues = {
                ...values,
                data_nascimento: formatDate(values.data_nascimento),
                data_rg: formatDate(values.data_rg),
                data_ct: formatDate(values.data_ct),
                data_admissao: formatDate(values.data_admissao),
            };

            try {
                const response = await axios.post(`http://localhost:3001/employees/${empresaId}`, formattedValues, {
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                });
                setMessage(response.data.message);
                resetForm();
            } catch (err) {
                setMessage(err.response?.data?.message || 'Erro desconhecido');
            }
        },
    });

    const steps = ['Informações Pessoais', 'Endereço', 'Informações Familiares', 'Escolaridade e Documentos', 'Informações Profissionais'];

    const handleNext = () => {
        formik.validateForm().then((errors) => {
            if (Object.keys(errors).length === 0) {
                setStep((prevStep) => prevStep + 1);
            } else {
                console.error("Erros de validação:", errors);
            }
        });
    };
    
    const handleBack = () => {
        formik.setErrors({});
        setStep((prevStep) => prevStep - 1);
    };
    

    const fetchAddress = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.data.erro) {
                setEndereco(response.data.logradouro);
                setBairro(response.data.bairro);
                setCidade(response.data.localidade);
                setEstado(response.data.uf);
                formik.setFieldValue('endereco', response.data.logradouro);
                formik.setFieldValue('bairro', response.data.bairro);
                formik.setFieldValue('cidade', response.data.localidade);
                formik.setFieldValue('estado', response.data.uf);
            } else {
                console.error('CEP não encontrado');
            }
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
            <h2 style={{ marginBottom: '20px' }}>Preencha os dados abaixo para cadastrar um novo funcionário</h2>
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
                            label="Nome Completo*"
                            autoComplete="fullname"
                            variant="standard"
                            value={formik.values.nome}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nome && Boolean(formik.errors.nome)}
                            helperText={formik.touched.nome && formik.errors.nome}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="email"
                            name="email"
                            label="E-mail*"
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
                            label="Telefone*"
                            variant="standard"
                            autoComplete="tel"
                            value={formik.values.telefone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.telefone && Boolean(formik.errors.telefone)}
                            helperText={formik.touched.telefone && formik.errors.telefone}
                        />
                        <FormControl
                            variant="standard"
                            error={formik.touched.sexo && Boolean(formik.errors.sexo)}
                            fullWidth
                            style={{textAlign: 'left'}}
                        >
                            <InputLabel id="sexo-label">Sexo*</InputLabel>
                            <Select
                                labelId="sexo-label"
                                id="sexo"
                                name="sexo"
                                value={formik.values.sexo}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <MenuItem value="">
                                    <em>Selecione</em>
                                </MenuItem>
                                <MenuItem value="masculino">Masculino</MenuItem>
                                <MenuItem value="feminino">Feminino</MenuItem>
                                <MenuItem value="prefiroNaoInformar">Prefiro não informar</MenuItem>
                            </Select>
                            {formik.touched.sexo && formik.errors.sexo && (
                                <FormHelperText>{formik.errors.sexo}</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl
                            variant="standard"
                            error={formik.touched.cor_etnia && Boolean(formik.errors.cor_etnia)}
                            fullWidth
                            style={{textAlign: 'left'}}
                        >
                            <InputLabel id="cor_etnia-label">Cor/Etnia*</InputLabel>
                            <Select
                                labelId="cor_etnia-label"
                                id="cor_etnia"
                                name="cor_etnia"
                                value={formik.values.cor_etnia}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <MenuItem value="">
                                    <em>Selecione</em>
                                </MenuItem>
                                <MenuItem value="branco">Branco</MenuItem>
                                <MenuItem value="pardo">Pardo</MenuItem>
                                <MenuItem value="negro">Negro</MenuItem>
                                <MenuItem value="amarelo">Amarelo</MenuItem>
                                <MenuItem value="indigena">Indígena</MenuItem>
                            </Select>
                            {formik.touched.cor_etnia && formik.errors.cor_etnia && (
                                <FormHelperText>{formik.errors.cor_etnia}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="data_nascimento"
                            name="data_nascimento"
                            label="Data de Nascimento*"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.data_nascimento}
                            onChange={formik.handleChange}
                            error={formik.touched.data_nascimento && Boolean(formik.errors.data_nascimento)}
                            helperText={formik.touched.data_nascimento && formik.errors.data_nascimento}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="local_nascimento"
                            name="local_nascimento"
                            label="Local nascimento*"
                            variant="standard"
                            value={formik.values.local_nascimento}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.local_nascimento && Boolean(formik.errors.local_nascimento)}
                            helperText={formik.touched.local_nascimento && formik.errors.local_nascimento}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="nacionalidade"
                            name="nacionalidade"
                            label="Nacionalidade*"
                            variant="standard"
                            value={formik.values.nacionalidade}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nacionalidade && Boolean(formik.errors.nacionalidade)}
                            helperText={formik.touched.nacionalidade && formik.errors.nacionalidade}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="cpf"
                            name="cpf"
                            label="CPF*"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                            error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                            helperText={formik.touched.cpf && formik.errors.cpf}
                        />
                        <TextField
                            id="rg"
                            name="rg"
                            label="RG"
                            value={formik.values.rg}
                            onChange={formik.handleChange}
                            error={formik.touched.rg && Boolean(formik.errors.rg)}
                            helperText={formik.touched.rg && formik.errors.rg}
                        />
                        <FormControl
                            variant="standard"
                            error={formik.touched.orgao_expedidor && Boolean(formik.errors.orgao_expedidor)}
                            fullWidth
                            style={{textAlign: 'left'}}
                        >
                            <InputLabel id="orgao_expedidor-label">Órgão expedidor</InputLabel>
                            <Select
                                labelId="orgao_expedidor-label"
                                id="orgao_expedidor"
                                name="orgao_expedidor"
                                value={formik.values.orgao_expedidor}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <MenuItem value="">
                                    <em>Selecione</em>
                                </MenuItem>
                                <MenuItem value="SSP">Secretaria de Segurança Pública (SSP)</MenuItem>
                                <MenuItem value="DETRAN">Departamento Estadual de Trânsito (DETRAN)</MenuItem>
                                <MenuItem value="IFP">Instituto de Identificação Félix Pacheco (IFP)</MenuItem>
                                <MenuItem value="IGP">Instituto Geral de Perícias (IGP)</MenuItem>
                                <MenuItem value="PC">Polícia Civil (PC)</MenuItem>
                                <MenuItem value="PM">Polícia Militar (PM)</MenuItem>
                                <MenuItem value="MTE">Ministério do Trabalho e Emprego (MTE)</MenuItem>
                                <MenuItem value="DIC">Diretoria de Identificação Civil (DIC)</MenuItem>
                                <MenuItem value="MAE">Ministério da Aeronáutica (MAE)</MenuItem>
                                <MenuItem value="MEX">Ministério do Exército (MEX)</MenuItem>
                                <MenuItem value="MMA">Ministério da Marinha (MMA)</MenuItem>
                            </Select>
                            {formik.touched.orgao_expedidor && formik.errors.orgao_expedidor && (
                                <FormHelperText>{formik.errors.orgao_expedidor}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="data_rg"
                            name="data_rg"
                            label="Data de expedição"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.data_rg}
                            onChange={formik.handleChange}
                            error={formik.touched.data_rg && Boolean(formik.errors.data_rg)}
                            helperText={formik.touched.data_rg && formik.errors.data_rg}
                            style={{ marginTop: '10px' }}
                        />
                        <Button onClick={handleNext}style={{alignItems: 'right', marginBottom: '15px'}}>Próximo</Button>
                    </Box>
                )}
                {step === 1 && (
                    <Box className={styles['formulario']}>
                        <TextField
                            id="cep"
                            name="cep"
                            label="CEP*"
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
                                id="numero_casa"
                                name="numero_casa"
                                label="Número*"
                                variant="standard"
                                value={formik.values.numero_casa}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.numero_casa && Boolean(formik.errors.numero_casa)}
                                helperText={formik.touched.numero_casa && formik.errors.numero_casa}
                                style={{ width: '20%' }}
                            />
                        </Box>
                        <TextField
                            id="complemento_casa"
                            name="complemento_casa"
                            label="Complemento"
                            variant="standard"
                            value={formik.values.complemento_casa}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.complemento_casa && Boolean(formik.errors.complemento_casa)}
                            helperText={formik.touched.complemento_casa && formik.errors.complemento_casa}
                        />
                        <TextField
                            id="bairro"
                            name="bairro"
                            label="Bairro"
                            value={bairro}
                            disabled
                            error={formik.touched.bairro && Boolean(formik.errors.bairro)}
                            helperText={formik.touched.bairro && formik.errors.bairro}
                            style={{ width: '80%' }}
                        />
                        <TextField
                            id="cidade"
                            name="cidade"
                            label="Cidade"
                            value={cidade}
                            disabled
                            error={formik.touched.cidade && Boolean(formik.errors.cidade)}
                            helperText={formik.touched.cidade && formik.errors.cidade}
                            style={{ width: '80%' }}
                        />
                        <TextField
                            id="estado"
                            name="estado"
                            label="Estado"
                            value={estado}
                            disabled
                            error={formik.touched.estado && Boolean(formik.errors.estado)}
                            helperText={formik.touched.estado && formik.errors.estado}
                            style={{ width: '80%' }}
                        />
                        <Box className={styles['botoes']}>
                            <Button onClick={handleBack}>Voltar</Button>
                            <Button onClick={handleNext}style={{alignItems: 'right', marginBottom: '15px'}}>Próximo</Button>
                        </Box>
                    </Box>
                )}
                {step === 2 && (
                    <Box className={styles['formulario']}>
                        <TextField
                            id="nome_mae"
                            name="nome_mae"
                            label="Nome da mãe*"
                            variant="standard"
                            value={formik.values.nome_mae}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nome_mae && Boolean(formik.errors.nome_mae)}
                            helperText={formik.touched.nome_mae && formik.errors.nome_mae}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="nome_pai"
                            name="nome_pai"
                            label="Nome do pai"
                            variant="standard"
                            value={formik.values.nome_pai}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nome_pai && Boolean(formik.errors.nome_pai)}
                            helperText={formik.touched.nome_pai && formik.errors.nome_pai}
                            style={{ marginTop: '10px' }}
                        />
                        <FormControl
                            variant="standard"
                            error={formik.touched.estado_civil && Boolean(formik.errors.estado_civil)}
                            fullWidth
                            style={{textAlign: 'left'}}
                        >
                            <InputLabel id="estado_civil-label">Estado civil*</InputLabel>
                            <Select
                                labelId="estado_civil-label"
                                id="estado_civil"
                                name="estado_civil"
                                value={formik.values.estado_civil}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <MenuItem value="">
                                    <em>Selecione</em>
                                </MenuItem>
                                <MenuItem value="solteiro">Solteiro(a)</MenuItem>
                                <MenuItem value="casado">Casado(a)</MenuItem>
                                <MenuItem value="separado">Separado(a) judicialmente</MenuItem>
                                <MenuItem value="divorciado">Divorciado(a)</MenuItem>
                                <MenuItem value="viuvo">Viúvo(a)</MenuItem>
                                <MenuItem value="uniaoEstavel">União estável</MenuItem>
                            </Select>
                            {formik.touched.estado_civil && formik.errors.estado_civil && (
                                <FormHelperText>{formik.errors.estado_civil}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="nome_conjuge"
                            name="nome_conjuge"
                            label="Nome do cônjuge"
                            variant="standard"
                            value={formik.values.nome_conjuge}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nome_conjuge && Boolean(formik.errors.nome_conjuge)}
                            helperText={formik.touched.nome_conjuge && formik.errors.nome_conjuge}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="qnt_dependente"
                            name="qnt_dependente"
                            label="Quantidade dependentes*"
                            variant="standard"
                            value={formik.values.qnt_dependente}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.qnt_dependente && Boolean(formik.errors.qnt_dependente)}
                            helperText={formik.touched.qnt_dependente && formik.errors.qnt_dependente}
                            style={{ width: '20%' }}
                        />
                        {formik.values.qnt_dependente > 0 && (
                            [...Array(Number(formik.values.qnt_dependente)).keys()].map((index) => (
                                <Box key={index}>
                                    <TextField
                                        id={`nomeDependente_${index}`}
                                        name={`dependentes[${index}].nomeDependente`}
                                        label={`Nome do dependente ${index + 1}*`}
                                        variant="standard"
                                        value={formik.values.dependentes[index]?.nomeDependente || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.dependentes && formik.touched.dependentes[index]?.nomeDependente && Boolean(formik.errors.dependentes?.[index]?.nomeDependente)}
                                        helperText={formik.touched.dependentes && formik.touched.dependentes[index]?.nomeDependente && formik.errors.dependentes?.[index]?.nomeDependente}
                                        style={{ marginTop: '10px' }}
                                    />
                                    <TextField
                                        id={`dataNascimentoDependente_${index}`}
                                        name={`dependentes[${index}].dataNascimentoDependente`}
                                        label="Data de Nascimento*"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={formik.values.dependentes[index]?.dataNascimentoDependente || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.dependentes && formik.touched.dependentes[index]?.dataNascimentoDependente && Boolean(formik.errors.dependentes?.[index]?.dataNascimentoDependente)}
                                        helperText={formik.touched.dependentes && formik.touched.dependentes[index]?.dataNascimentoDependente && formik.errors.dependentes?.[index]?.dataNascimentoDependente}
                                        style={{ marginTop: '10px' }}
                                    />
                                    <TextField
                                        id={`cpfDependente_${index}`}
                                        name={`dependentes[${index}].cpfDependente`}
                                        label="CPF*"
                                        value={formik.values.dependentes[index]?.cpfDependente || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.dependentes && formik.touched.dependentes[index]?.cpfDependente && Boolean(formik.errors.dependentes?.[index]?.cpfDependente)}
                                        helperText={formik.touched.dependentes && formik.touched.dependentes[index]?.cpfDependente && formik.errors.dependentes?.[index]?.cpfDependente}
                                    />
                                    <TextField
                                        id={`localNascimentoDependente_${index}`}
                                        name={`dependentes[${index}].localNascimentoDependente`}
                                        label="Local de nascimento*"
                                        variant="standard"
                                        value={formik.values.dependentes[index]?.localNascimentoDependente || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.dependentes && formik.touched.dependentes[index]?.localNascimentoDependente && Boolean(formik.errors.dependentes?.[index]?.localNascimentoDependente)}
                                        helperText={formik.touched.dependentes && formik.touched.dependentes[index]?.localNascimentoDependente && formik.errors.dependentes?.[index]?.localNascimentoDependente}
                                        style={{ marginTop: '10px' }}
                                    />
                                </Box>
                            ))
                        )}
                        <Box className={styles['botoes']}>
                            <Button onClick={handleBack}>Voltar</Button>
                            <Button onClick={handleNext}style={{alignItems: 'right', marginBottom: '15px'}}>Próximo</Button>
                        </Box>
                    </Box>
                )}
                {step === 3 && (
                    <Box className={styles['formulario']}>
                        <FormControl
                            variant="standard"
                            error={formik.touched.escolaridade && Boolean(formik.errors.escolaridade)}
                            fullWidth
                            style={{textAlign: 'left'}}
                        >
                            <InputLabel id="escolaridade-label">Escolaridade*</InputLabel>
                            <Select
                                labelId="escolaridade-label"
                                id="escolaridade"
                                name="escolaridade"
                                value={formik.values.escolaridade}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <MenuItem value="">
                                    <em>Selecione</em>
                                </MenuItem>
                                <MenuItem value="ensinoFundamentalIncompleto">Ensino Fundamental Incompleto</MenuItem>
                                <MenuItem value="ensinoFundamentalCompleto">Ensino Fundamental Completo</MenuItem>
                                <MenuItem value="ensinoMedioIncompleto">Ensino Médio Incompleto</MenuItem>
                                <MenuItem value="ensinoMedioCompleto">Ensino Médio Completo</MenuItem>
                                <MenuItem value="ensinoTecnico">Ensino Técnico</MenuItem>
                                <MenuItem value="superiorIncompleto">Superior Incompleto</MenuItem>
                                <MenuItem value="superiorCompleto">Superior Completo</MenuItem>
                                <MenuItem value="posGraduacao">Pós-Graduação</MenuItem>
                                <MenuItem value="mestrado">Mestrado</MenuItem>
                                <MenuItem value="doutorado">Doutorado</MenuItem>
                                <MenuItem value="posDoutorado">Pós-Doutorado</MenuItem>
                                <MenuItem value="nenhumaEscolaridade">Nenhuma Escolaridade</MenuItem>
                            </Select>
                            {formik.touched.escolaridade && formik.errors.escolaridade && (
                                <FormHelperText>{formik.errors.escolaridade}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="pis"
                            name="pis"
                            label="PIS*"
                            value={formik.values.pis}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.pis && Boolean(formik.errors.pis)}
                            helperText={formik.touched.pis && formik.errors.pis}
                        />
                        <TextField
                            id="numero_ct"
                            name="numero_ct"
                            label="Carteira de trabalho*"
                            value={formik.values.numero_ct}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.numero_ct && Boolean(formik.errors.numero_ct)}
                            helperText={formik.touched.numero_ct && formik.errors.numero_ct}
                        />
                        <TextField
                            id="serie"
                            name="serie"
                            label="Série*"
                            value={formik.values.serie}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.serie && Boolean(formik.errors.serie)}
                            helperText={formik.touched.serie && formik.errors.serie}
                        />
                        <TextField
                            id="data_ct"
                            name="data_ct"
                            label="Data carteira de trabalho*"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.data_ct}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.data_ct && Boolean(formik.errors.data_ct)}
                            helperText={formik.touched.data_ct && formik.errors.data_ct}
                            style={{ marginTop: '10px' }}
                        />
                        <FormControl
                            component="fieldset"
                            error={formik.touched.carteira_digital && Boolean(formik.errors.carteira_digital)}
                            style={{textAlign: 'left'}}
                        >
                        <FormControlLabel
                            control={
                                <Checkbox
                                id="carteira_digital"
                                name="carteira_digital"
                                checked={formik.values.carteira_digital}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                color="primary"
                                />
                            }
                            label="Carteira digital"
                            />
                            {formik.touched.carteira_digital && formik.errors.carteira_digital && (
                            <FormHelperText>{formik.errors.carteira_digital}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="titulo_eleitoral"
                            name="titulo_eleitoral"
                            label="Título eleitoral"
                            value={formik.values.titulo_eleitoral}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.titulo_eleitoral && Boolean(formik.errors.titulo_eleitoral)}
                            helperText={formik.touched.titulo_eleitoral && formik.errors.titulo_eleitoral}
                        />
                        <TextField
                            id="zona"
                            name="zona"
                            label="Zona"
                            value={formik.values.zona}
                            onChange={formik.handleChange}
                            error={formik.touched.zona && Boolean(formik.errors.zona)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.zona && formik.errors.zona}
                        />
                        <TextField
                            id="secao"
                            name="secao"
                            label="Seção"
                            value={formik.values.secao}
                            onChange={formik.handleChange}
                            error={formik.touched.secao && Boolean(formik.errors.secao)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.secao && formik.errors.secao}
                        />
                        <Box className={styles['botoes']}>
                            <Button onClick={handleBack}>Voltar</Button>
                            <Button onClick={handleNext}style={{alignItems: 'right', marginBottom: '15px'}}>Próximo</Button>
                        </Box>
                    </Box>
                )}
                {step === 4 && (
                    <Box className={styles['formulario']}>
                        <TextField
                            id="funcao"
                            name="funcao"
                            label="Função*"
                            variant="standard"
                            value={formik.values.funcao}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.funcao && Boolean(formik.errors.funcao)}
                            helperText={formik.touched.funcao && formik.errors.funcao}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="data_admissao"
                            name="data_admissao"
                            label="Data de admissão*"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.data_admissao}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.data_admissao && Boolean(formik.errors.data_admissao)}
                            helperText={formik.touched.data_admissao && formik.errors.data_admissao}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="salario"
                            name="salario"
                            label="Salário*"
                            variant="standard"
                            value={formik.values.salario}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salario && Boolean(formik.errors.salario)}
                            helperText={formik.touched.salario && formik.errors.salario}
                            style={{ marginTop: '10px' }}
                        />
                        <FormControl
                            variant="standard"
                            error={formik.touched.contrato_experiencia && Boolean(formik.errors.contrato_experiencia)}
                            fullWidth
                            style={{textAlign: 'left'}}
                        >
                            <InputLabel id="contrato_experiencia-label">Contrato de experiência</InputLabel>
                            <Select
                                labelId="contrato_experiencia-label"
                                id="contrato_experiencia"
                                name="contrato_experiencia"
                                value={formik.values.contrato_experiencia}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <MenuItem value="">
                                    <em>Selecione</em>
                                </MenuItem>
                                <MenuItem value="30+30dias">30 + 30 dias</MenuItem>
                                <MenuItem value="45+45dias">45 + 45 dias</MenuItem>
                            </Select>
                            {formik.touched.contrato_experiencia && formik.errors.contrato_experiencia && (
                                <FormHelperText>{formik.errors.contrato_experiencia}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="horarios"
                            name="horarios"
                            label="Horários de trabalho*"
                            variant="standard"
                            value={formik.values.horarios}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.horarios && Boolean(formik.errors.horarios)}
                            helperText={formik.touched.horarios && formik.errors.horarios}
                            style={{ marginTop: '10px' }}
                        />
                        <FormControl
                            component="fieldset"
                            error={formik.touched.insalubridade && Boolean(formik.errors.insalubridade)}
                        >
                        <FormControlLabel
                            control={
                                <Checkbox
                                id="insalubridade"
                                name="insalubridade"
                                checked={formik.values.insalubridade}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                color="primary"
                                />
                            }
                            label="Insalubridade"
                            />
                            {formik.touched.insalubridade && formik.errors.insalubridade && (
                            <FormHelperText>{formik.errors.insalubridade}</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl
                            component="fieldset"
                            error={formik.touched.periculosidade && Boolean(formik.errors.periculosidade)}
                        >
                        <FormControlLabel
                            control={
                                <Checkbox
                                id="periculosidade"
                                name="periculosidade"
                                checked={formik.values.periculosidade}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                color="primary"
                                />
                            }
                            label="Periculosidade"
                            />
                            {formik.touched.periculosidade && formik.errors.periculosidade && (
                            <FormHelperText>{formik.errors.periculosidade}</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl
                            component="fieldset"
                            error={formik.touched.quebra_de_caixa && Boolean(formik.errors.quebra_de_caixa)}
                        >
                        <FormControlLabel
                            control={
                                <Checkbox
                                id="quebra_de_caixa"
                                name="quebra_de_caixa"
                                checked={formik.values.quebra_de_caixa}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                color="primary"
                                />
                            }
                            label="Quebra de caixa"
                            />
                            {formik.touched.quebra_de_caixa && formik.errors.quebra_de_caixa && (
                            <FormHelperText>{formik.errors.quebra_de_caixa}</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl
                            component="fieldset"
                            error={formik.touched.vale_transporte && Boolean(formik.errors.vale_transporte)}
                        >
                        <FormControlLabel
                            control={
                                <Checkbox
                                id="vale_transporte"
                                name="vale_transporte"
                                checked={formik.values.vale_transporte}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                color="primary"
                                />
                            }
                            label="Vale transporte"
                            />
                            {formik.touched.vale_transporte && formik.errors.vale_transporte && (
                            <FormHelperText>{formik.errors.vale_transporte}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="quantidade_vales"
                            name="quantidade_vales"
                            label="Quantidade vales"
                            variant="standard"
                            value={formik.values.quantidade_vales}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.quantidade_vales && Boolean(formik.errors.quantidade_vales)}
                            helperText={formik.touched.quantidade_vales && formik.errors.quantidade_vales}
                            style={{ marginTop: '10px' }}
                        />
                        <Box className={styles['botoes']}>
                            <Button onClick={handleBack}>Voltar</Button>
                            <Button type="submit">Cadastrar</Button>
                        </Box>
                    </Box>
                )}

                {message && (
                    <h3 style={{ fontSize: '0.84em', color: '#202949', textAlign: 'left' }}>
                        <strong>{message}</strong>
                    </h3>
                )}
            </form>

            <h5 style={{ textAlign: 'left', fontWeight: 'normal' }}>* Campos obrigatórios</h5>
        </motion.div>
    );
};