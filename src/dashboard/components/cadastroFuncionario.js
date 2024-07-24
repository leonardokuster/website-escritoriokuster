import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { TextField, Button, Stepper, Step, StepLabel, Box, Select, MenuItem, FormControl, FormControlLabel, InputLabel, FormHelperText, Checkbox } from '@mui/material';
import styles from '../styles/cadastroFormulario.module.css';
import { motion } from "framer-motion";

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
        corEtnia: yup
            .string('Cor/Etnia')
            .required('Campo obrigatório'),
        dataNascimento: yup
            .date()
            .required('Campo obrigatório'),
        localNascimento: yup
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
        orgaoExpedidor: yup
            .string('Órgão expedidor')
            .notRequired(),
        dataRG: yup
            .date()
            .notRequired(),
    }),
    yup.object({
        cep: yup
            .string('CEP')
            .required('Campo obrigatório'),
        endereco: yup
            .string('Endereço')
            .required('Campo obrigatório'),
        numeroCasa: yup
            .string('Número')
            .required('Campo obrigatório'),
        complementoCasa: yup
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
        nomeMae: yup
            .string('Nome da mãe')
            .required('Campo obrigatório'),
        nomePai: yup
            .string('Nome do pai')
            .notRequired(),
        estadoCivil: yup
            .string('Estado civil')
            .required('Campo obrigatório'),
        nomeConjuge: yup
            .string('Nome cônjuge')
            .notRequired(),
        qntDependente: yup
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
        dataPIS: yup
            .date()
            .required('Campo obrigatório'),
        numeroCT: yup
            .string('Número da carteira de trabalho')
            .required('Campo obrigatório'),
        serie: yup
            .string('Série')
            .required('Campo obrigatório'),
        dataCT: yup
            .date()
            .required('Campo obrigatório'),
        carteiraDigital: yup
            .string('Carteira digital')
            .notRequired(),
        tituloEleitoral: yup
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
        dataAdmissao: yup
            .date()
            .required('Campo obrigatório'),
        salario: yup
            .number('Salário')
            .required('Campo obrigatório'),
        contratoExperiencia: yup
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
        quebraDeCaixa: yup
            .string('Quebra de caixa')
            .required('Campo obrigatório'),
        valeTransporte: yup
            .string('Vale transporte')
            .required('Campo obrigatório'),
        quantidadeVales: yup
            .number('Quantidade vales')
            .notRequired(),
    })
]

export default function CadastroFuncionario() {
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
            corEtnia: '',
            dataNascimento: '',
            localNascimento: '',
            nacionalidade: 'Brasileiro(a)',
            cpf: '',
            rg: '',
            orgaoExpedidor: '',
            dataRG: '',
            cep: '',
            endereco: '',
            numeroCasa: '',
            complementoCasa: '',
            bairro: '',
            cidade: '',
            estado: '',
            nomeMae: '',
            nomePai: '',
            escolaridade: '',
            estadoCivil: '',
            nomeConjuge: '',
            pis: '',
            dataPIS: '',
            numeroCT: '',
            serie: '',
            dataCT: '',
            carteiraDigital: false,
            tituloEleitoral: '',
            zona: '',
            secao: '',
            qntDependente: 0,
            dependentes: [],
            funcao: '',
            dataAdmissao: '',
            salario: '',
            contratoExperiencia: '',
            horarios: '',
            insalubridade: false,
            periculosidade: false,
            quebraDeCaixa: false,
            valeTransporte: false,
            quantidadeVales: '',
        },
        validationSchema: validationSchemas[step],
        validateOnChange: false,  
        validateOnBlur: false,   
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('http://localhost:3001/employees', values, {
                    headers: { 'Content-Type': 'application/json' },
                });
                setMessage(response.data.message);
                resetForm();
            } catch (err) {
                setMessage(err.response.data.message);
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
                        <FormControl
                            variant="standard"
                            error={formik.touched.sexo && Boolean(formik.errors.sexo)}
                            fullWidth
                        >
                            <InputLabel id="sexo-label">Sexo</InputLabel>
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
                            error={formik.touched.corEtnia && Boolean(formik.errors.corEtnia)}
                            fullWidth
                        >
                            <InputLabel id="corEtnia-label">Cor/Etnia</InputLabel>
                            <Select
                                labelId="corEtnia-label"
                                id="corEtnia"
                                name="corEtnia"
                                value={formik.values.corEtnia}
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
                            {formik.touched.corEtnia && formik.errors.corEtnia && (
                                <FormHelperText>{formik.errors.corEtnia}</FormHelperText>
                            )}
                        </FormControl>
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
                            id="localNascimento"
                            name="localNascimento"
                            label="Local nascimento"
                            variant="standard"
                            value={formik.values.localNascimento}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.localNascimento && Boolean(formik.errors.localNascimento)}
                            helperText={formik.touched.localNascimento && formik.errors.localNascimento}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="nacionalidade"
                            name="nacionalidade"
                            label="Nacionalidade"
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
                            label="CPF"
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
                            error={formik.touched.orgaoExpedidor && Boolean(formik.errors.orgaoExpedidor)}
                            fullWidth
                        >
                            <InputLabel id="orgaoExpedidor-label">Órgão expedidor</InputLabel>
                            <Select
                                labelId="orgaoExpedidor-label"
                                id="orgaoExpedidor"
                                name="orgaoExpedidor"
                                value={formik.values.orgaoExpedidor}
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
                            {formik.touched.orgaoExpedidor && formik.errors.orgaoExpedidor && (
                                <FormHelperText>{formik.errors.orgaoExpedidor}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="dataRG"
                            name="dataRG"
                            label="Data de expedição"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.dataRG}
                            onChange={formik.handleChange}
                            error={formik.touched.dataRG && Boolean(formik.errors.dataRG)}
                            helperText={formik.touched.dataRG && formik.errors.dataRG}
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
                            id="nomeMae"
                            name="nomeMae"
                            label="Nome da mãe"
                            variant="standard"
                            value={formik.values.nomeMae}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nomeMae && Boolean(formik.errors.nomeMae)}
                            helperText={formik.touched.nomeMae && formik.errors.nomeMae}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="nomePai"
                            name="nomePai"
                            label="Nome do pai"
                            variant="standard"
                            value={formik.values.nomePai}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nomePai && Boolean(formik.errors.nomePai)}
                            helperText={formik.touched.nomePai && formik.errors.nomePai}
                            style={{ marginTop: '10px' }}
                        />
                        <FormControl
                            variant="standard"
                            error={formik.touched.estadoCivil && Boolean(formik.errors.estadoCivil)}
                            fullWidth
                        >
                            <InputLabel id="estadoCivil-label">Estado civil</InputLabel>
                            <Select
                                labelId="estadoCivil-label"
                                id="estadoCivil"
                                name="estadoCivil"
                                value={formik.values.estadoCivil}
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
                            {formik.touched.estadoCivil && formik.errors.estadoCivil && (
                                <FormHelperText>{formik.errors.estadoCivil}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="nomeConjuge"
                            name="nomeConjuge"
                            label="Nome do cônjuge"
                            variant="standard"
                            value={formik.values.nomeConjuge}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nomeConjuge && Boolean(formik.errors.nomeConjuge)}
                            helperText={formik.touched.nomeConjuge && formik.errors.nomeConjuge}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="qntDependente"
                            name="qntDependente"
                            label="Quantidade dependentes"
                            variant="standard"
                            value={formik.values.qntDependente}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.qntDependente && Boolean(formik.errors.qntDependente)}
                            helperText={formik.touched.qntDependente && formik.errors.qntDependente}
                            style={{ width: '20%' }}
                        />
                        {formik.values.qntDependente > 0 && (
                            [...Array(Number(formik.values.qntDependente)).keys()].map((index) => (
                                <Box key={index}>
                                    <TextField
                                        id={`nomeDependente_${index}`}
                                        name={`dependentes[${index}].nomeDependente`}
                                        label={`Nome do dependente ${index + 1}`}
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
                                        label="Data de Nascimento"
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
                                        label="CPF do dependente"
                                        value={formik.values.dependentes[index]?.cpfDependente || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.dependentes && formik.touched.dependentes[index]?.cpfDependente && Boolean(formik.errors.dependentes?.[index]?.cpfDependente)}
                                        helperText={formik.touched.dependentes && formik.touched.dependentes[index]?.cpfDependente && formik.errors.dependentes?.[index]?.cpfDependente}
                                    />
                                    <TextField
                                        id={`localNascimentoDependente_${index}`}
                                        name={`dependentes[${index}].localNascimentoDependente`}
                                        label="Local de nascimento do dependente"
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
                        >
                            <InputLabel id="escolaridade-label">Escolaridade</InputLabel>
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
                            label="PIS"
                            value={formik.values.pis}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.pis && Boolean(formik.errors.pis)}
                            helperText={formik.touched.pis && formik.errors.pis}
                        />
                        <TextField
                            id="dataPIS"
                            name="dataPIS"
                            label="Data PIS"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.dataPIS}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.dataPIS && Boolean(formik.errors.dataPIS)}
                            helperText={formik.touched.dataPIS && formik.errors.dataPIS}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="numeroCT"
                            name="numeroCT"
                            label="Carteira de trabalho"
                            value={formik.values.numeroCT}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.numeroCT && Boolean(formik.errors.numeroCT)}
                            helperText={formik.touched.numeroCT && formik.errors.numeroCT}
                        />
                        <TextField
                            id="serie"
                            name="serie"
                            label="Série"
                            value={formik.values.serie}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.serie && Boolean(formik.errors.serie)}
                            helperText={formik.touched.serie && formik.errors.serie}
                        />
                        <TextField
                            id="dataCT"
                            name="dataCT"
                            label="Data carteira de trabalho"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.dataCT}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.dataCT && Boolean(formik.errors.dataCT)}
                            helperText={formik.touched.dataCT && formik.errors.dataCT}
                            style={{ marginTop: '10px' }}
                        />
                        <FormControl
                            component="fieldset"
                            error={formik.touched.carteiraDigital && Boolean(formik.errors.carteiraDigital)}
                        >
                        <FormControlLabel
                            control={
                                <Checkbox
                                id="carteiraDigital"
                                name="carteiraDigital"
                                checked={formik.values.carteiraDigital}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                color="primary"
                                />
                            }
                            label="Carteira digital"
                            />
                            {formik.touched.carteiraDigital && formik.errors.carteiraDigital && (
                            <FormHelperText>{formik.errors.carteiraDigital}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="tituloEleitoral"
                            name="tituloEleitoral"
                            label="Título eleitoral"
                            value={formik.values.tituloEleitoral}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.tituloEleitoral && Boolean(formik.errors.tituloEleitoral)}
                            helperText={formik.touched.tituloEleitoral && formik.errors.tituloEleitoral}
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
                            label="Função"
                            variant="standard"
                            value={formik.values.funcao}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.funcao && Boolean(formik.errors.funcao)}
                            helperText={formik.touched.funcao && formik.errors.funcao}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="dataAdmissao"
                            name="dataAdmissao"
                            label="Data de admissão"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.dataAdmissao}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.dataAdmissao && Boolean(formik.errors.dataAdmissao)}
                            helperText={formik.touched.dataAdmissao && formik.errors.dataAdmissao}
                            style={{ marginTop: '10px' }}
                        />
                        <TextField
                            id="salario"
                            name="salario"
                            label="Salário"
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
                            error={formik.touched.contratoExperiencia && Boolean(formik.errors.contratoExperiencia)}
                            fullWidth
                        >
                            <InputLabel id="contratoExperiencia-label">Contrato de experiência</InputLabel>
                            <Select
                                labelId="contratoExperiencia-label"
                                id="contratoExperiencia"
                                name="contratoExperiencia"
                                value={formik.values.contratoExperiencia}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <MenuItem value="">
                                    <em>Selecione</em>
                                </MenuItem>
                                <MenuItem value="30+30dias">30 + 30 dias</MenuItem>
                                <MenuItem value="45+45dias">45 + 45 dias</MenuItem>
                            </Select>
                            {formik.touched.contratoExperiencia && formik.errors.contratoExperiencia && (
                                <FormHelperText>{formik.errors.contratoExperiencia}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="horarios"
                            name="horarios"
                            label="Horários de trabalho"
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
                            error={formik.touched.quebraDeCaixa && Boolean(formik.errors.quebraDeCaixa)}
                        >
                        <FormControlLabel
                            control={
                                <Checkbox
                                id="quebraDeCaixa"
                                name="quebraDeCaixa"
                                checked={formik.values.quebraDeCaixa}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                color="primary"
                                />
                            }
                            label="Quebra de caixa"
                            />
                            {formik.touched.quebraDeCaixa && formik.errors.quebraDeCaixa && (
                            <FormHelperText>{formik.errors.quebraDeCaixa}</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl
                            component="fieldset"
                            error={formik.touched.valeTransporte && Boolean(formik.errors.valeTransporte)}
                        >
                        <FormControlLabel
                            control={
                                <Checkbox
                                id="valeTransporte"
                                name="valeTransporte"
                                checked={formik.values.valeTransporte}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                color="primary"
                                />
                            }
                            label="Vale transporte"
                            />
                            {formik.touched.valeTransporte && formik.errors.valeTransporte && (
                            <FormHelperText>{formik.errors.valeTransporte}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            id="quantidadeVales"
                            name="quantidadeVales"
                            label="Quantidade vales"
                            variant="standard"
                            value={formik.values.quantidadeVales}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.quantidadeVales && Boolean(formik.errors.quantidadeVales)}
                            helperText={formik.touched.quantidadeVales && formik.errors.quantidadeVales}
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
        </motion.div>
    );
};