import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { TextField, Button, Stepper, Step, StepLabel, Box, Select, MenuItem, FormControl, FormControlLabel, InputLabel, FormHelperText, Checkbox } from '@mui/material';
import styles from '../styles/cadastroFuncionario.module.css';
import { motion } from "framer-motion";
import InputMask from 'react-input-mask';
import PhoneInput from '../../components/form/PhoneInput';
import CurrencyInput from '../../components/form/CurrencyInput';
import TabelaDependentes from './tabelaDependentes';
import { Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const MaskedTextField = ({ mask, value, onChange, onBlur, ...props }) => (
    <InputMask mask={mask} value={value} onChange={onChange} onBlur={onBlur}>
        {(inputProps) => <TextField {...inputProps} {...props} />}
    </InputMask>
);

const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
      },
    },
});
  
const validationSchema = [
    yup.object({
        nome: yup
            .string('Nome completo')
            .matches(/^[a-zA-Zà-úÀ-Ú\s]+$/, 'Nome inválido, por favor tente outro')
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
            .typeError('Data inválida')
            .required('Campo obrigatório'),
        localNascimento: yup
            .string('Local do nascimento')
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
        dataRg: yup
            .date()
            .typeError('Data inválida')
            .notRequired(),
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
    }),
    yup.object({
        escolaridade: yup
            .string('Escolaridade')
            .required('Campo obrigatório'),
        pis: yup
            .string('Número do PIS')
            .required('Campo obrigatório'),
        numeroCt: yup
            .string('Número da carteira de trabalho')
            .required('Campo obrigatório'),
        serie: yup
            .string('Série')
            .required('Campo obrigatório'),
        dataCt: yup
            .date()
            .typeError('Data inválida')
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
            .string('Função*')
            .required('Campo obrigatório'),
        dataAdmissao: yup
            .date()
            .typeError('Data inválida')
            .required('Campo obrigatório'),
        salario: yup
            .string('Salário*')
            .required('Campo obrigatório'),
        contratoExperiencia: yup
            .string('Contrato experiência')
            .required('Campo obrigatório'),
        horarios: yup
            .string('Horário de trabalho')
            .required('Campo obrigatório'),
        insalubridade: yup
            .boolean('Insalubridade')
            .notRequired(),
        periculosidade: yup
            .boolean('Periculosidade')
            .notRequired(),
        quebraDeCaixa: yup
            .boolean('Quebra de caixa')
            .notRequired(),
        valeTransporte: yup
            .boolean('Vale transporte')
            .notRequired(),
        quantidadeVales: yup
            .number('Quantidade vales')
            .notRequired(),
    }),
    yup.object({ 
        possuiDependente: yup
            .boolean('Possui dependente?')
            .notRequired(),
    })
];

export default function CadastroFuncionario({cnpj}) {
    const [step, setStep] = useState(0);
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [message, setMessage] = useState('');
    const [funcionarioId, setFuncionarioId] = useState(null);
    const [cadastroConcluido, setCadastroConcluido] = useState(false);
       
    const formik = useFormik({
        initialValues: {
            nome: '',
            email: '',
            telefone: '',
            sexo: '',
            corEtnia: '',
            dataNascimento: '',
            localNascimento: '',
            cpf: '',
            rg: '',
            orgaoExpedidor: '',
            dataRg: '',
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
            numeroCt: '',
            serie: '',
            dataCt: '',
            carteiraDigital: false,
            tituloEleitoral: '',
            zona: '',
            secao: '',
            dependentes: [{ 
                nomeDependente: '', 
                dataNascimentoDependente: '', 
                cpfDependente: '', 
                localNascimentoDependente: '' 
            }],
            funcao: '',
            dataAdmissao: '',
            salario: '',
            contratoExperiencia: '',
            horarios: '',
            insalubridade: false,
            periculosidade: false,
            quebraDeCaixa: false,
            valeTransporte: false,
            quantidadeVales: 0,
        },
        validationSchema: validationSchema[step],
        validateOnChange: false,  
        validateOnBlur: false,   
        onSubmit: async (values, { resetForm }) => {
            const token = localStorage.getItem('token');
            const empresa_id = localStorage.getItem('empresa_id');

            if (!empresa_id) {
                setMessage('Empresa ID não encontrado');
                return;
            }

            try {
                console.log('Valores enviados:', values);

                const response = await axios.post(`http://localhost:3001/employees/${empresa_id}`, { ...values, empresa_id }, {
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                });

                console.log('Resposta da API:', response.data);

                if (response.data.success) {
                    setFuncionarioId(response.data.newEmployee.id);

                    setStep(4);

                    resetForm();
                }
            } catch (err) {
                console.error('Erro:', err);
                if (err.response) {
                    setMessage('Funcionário já cadastrado');
                    setErrorDetails(JSON.stringify(err.response.data));
                } else if (err instanceof yup.ValidationError) {
                    setMessage('Erro de validação: ' + err.errors.join(', '));
                    setErrorDetails(err.errors.join(', '));
                } else {
                    setMessage('Erro desconhecido ao cadastrar funcionário');
                    setErrorDetails(err.message);
                }
            }
        },
    });

    const botaoFinalizarFuncionario = () => {
        formik.handleSubmit(); 
        setCadastroConcluido(false); 
    };

    const botaoFinalizarCadastro = () => {
        setStep(0);  
        formik.resetForm(); 
        setFuncionarioId(null);  
        setCadastroConcluido(true); 
    };   

    const steps = ['Informações Pessoais', 'Informações Familiares', 'Escolaridade e Documentos', 'Informações Profissionais', 'Dependentes'];

    const handleNext = () => {
        formik.validateForm().then((errors) => {
            if (Object.keys(errors).length === 0) {
                setStep((prevStep) => prevStep + 1);
            } else {
                console.log(errors); 
            }
        }).catch(error => {
            console.error('Validation error:', error); 
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
    <ThemeProvider theme={theme}>
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 style={{ marginBottom: '20px' }}>Preencha os dados abaixo para cadastrar um novo funcionário</h2>
            <Stepper activeStep={step} className={styles['steps']} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <form onSubmit={formik.handleSubmit}>
                {step === 0 && (
                    <Box className={styles['formulario']}>
                        <div className={styles['conjunto']}>
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
                                sx ={{ width: { mobile: '100%', tablet: '80%' } }}
                            />
                            <FormControl
                                variant="standard"
                                error={formik.touched.sexo && Boolean(formik.errors.sexo)}
                                sx ={{textAlign: 'left', width: { mobile: '100%', tablet: '20%' }}}
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
                        </div>
                        <div className={styles['conjunto']}>
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
                                sx ={{ width: { mobile: '100%', tablet: '70%' } }}
                            />
                            <PhoneInput
                                id="telefone"
                                name="telefone"
                                label="Telefone*"
                                value={formik.values.telefone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                onFocus={formik.handleFocus}
                                error={formik.touched.telefone && Boolean(formik.errors.telefone)}
                                helperText={formik.touched.telefone && formik.errors.telefone}
                            />
                        </div>
                        <FormControl
                            variant="standard"
                            error={formik.touched.corEtnia && Boolean(formik.errors.corEtnia)}
                            fullWidth
                            sx={{textAlign: 'left', width: '100%'}}
                        >
                            <InputLabel id="corEtnia-label">Cor/Etnia*</InputLabel>
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
                        <div className={styles['conjunto']}>
                            <TextField
                                id="localNascimento"
                                name="localNascimento"
                                label="Local nascimento*"
                                variant="standard"
                                value={formik.values.localNascimento}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.localNascimento && Boolean(formik.errors.localNascimento)}
                                helperText={formik.touched.localNascimento && formik.errors.localNascimento}
                                sx ={{ marginTop: '10px', width: { mobile: '100%', tablet: '80%' } }}
                            />
                            <TextField
                                id="dataNascimento"
                                name="dataNascimento"
                                label="Data de Nascimento*"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={formik.values.dataNascimento}
                                onChange={formik.handleChange}
                                error={formik.touched.dataNascimento && Boolean(formik.errors.dataNascimento)}
                                helperText={formik.touched.dataNascimento && formik.errors.dataNascimento}
                                sx ={{ width: { mobile: '100%', tablet: '30%' }, mt: { mobile: 3, tablet: 0} }}
                            />
                        </div>
                        <MaskedTextField
                            mask="999.999.999-99"
                            id="cpf"
                            name="cpf"
                            label="CPF*"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                            helperText={formik.touched.cpf && formik.errors.cpf}
                            sx = {{ width: '100%' }}
                        />
                        <div className={styles['conjunto']}>
                            <TextField
                                id="rg"
                                name="rg"
                                label="RG"
                                value={formik.values.rg}
                                onChange={formik.handleChange}
                                error={formik.touched.rg && Boolean(formik.errors.rg)}
                                helperText={formik.touched.rg && formik.errors.rg}
                                sx ={{ width: { mobile: '100%', tablet: '70%' } }}
                            />
                            <TextField
                                id="dataRg"
                                name="dataRg"
                                label="Data de expedição"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={formik.values.dataRg}
                                onChange={formik.handleChange}
                                error={formik.touched.dataRg && Boolean(formik.errors.dataRg)}
                                helperText={formik.touched.dataRg && formik.errors.dataRg}
                                sx ={{ width: { mobile: '100%', tablet: '30%' }, mt: { mobile: 3, tablet: 0} }}
                            />
                        </div>
                        <FormControl
                            variant="standard"
                            error={formik.touched.orgaoExpedidor && Boolean(formik.errors.orgaoExpedidor)}
                            fullWidth
                            sx ={{textAlign: 'left', width: '100%' }}
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
                            sx = {{ width: '100%' }}
                        />
                        <div className={styles['conjunto']}>
                            <TextField
                                id="endereco"
                                name="endereco"
                                label="Endereço"
                                value={endereco}
                                disabled
                                error={formik.touched.endereco && Boolean(formik.errors.endereco)}
                                helperText={formik.touched.endereco && formik.errors.endereco}
                                sx ={{ width: { mobile: '100%', tablet: '50%' } }}
                            />
                            <TextField
                                id="numeroCasa"
                                name="numeroCasa"
                                label="Número*"
                                variant="standard"
                                value={formik.values.numeroCasa}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.numeroCasa && Boolean(formik.errors.numeroCasa)}
                                helperText={formik.touched.numeroCasa && formik.errors.numeroCasa}
                                sx ={{ width: { mobile: '100%', tablet: '15%' } }}
                            />
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
                                sx ={{ width: { mobile: '100%', tablet: '35%' } }}
                            />
                        </div>
                        <Button onClick={handleNext}style={{alignItems: 'right', marginBottom: '15px'}}>Próximo</Button>
                    </Box>
                )}
                {step === 1 && (
                    <Box className={styles['formulario']}>
                        <TextField
                            id="nomeMae"
                            name="nomeMae"
                            label="Nome da mãe*"
                            variant="standard"
                            value={formik.values.nomeMae}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nomeMae && Boolean(formik.errors.nomeMae)}
                            helperText={formik.touched.nomeMae && formik.errors.nomeMae}
                            fullWidth
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
                            fullWidth
                        />
                        <FormControl
                            variant="standard"
                            error={formik.touched.estadoCivil && Boolean(formik.errors.estadoCivil)}
                            fullWidth
                            sx ={{textAlign: 'left'}}
                        >
                            <InputLabel id="estadoCivil-label">Estado civil*</InputLabel>
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
                        />
                        <Box className={styles['botoes']}>
                            <Button onClick={handleBack}>Voltar</Button>
                            <Button onClick={handleNext} style={{alignItems: 'right', marginBottom: '15px'}}>Próximo</Button>
                        </Box>
                    </Box>
                )}
                {step === 2 && (
                    <Box className={styles['formulario']}>
                        <FormControl
                            variant="standard"
                            error={formik.touched.escolaridade && Boolean(formik.errors.escolaridade)}
                            fullWidth
                            style ={{ textAlign: 'left' }}
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
                        <MaskedTextField
                            mask="999.99999.99-9"
                            id="pis"
                            name="pis"
                            label="PIS*"
                            value={formik.values.pis}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.pis && Boolean(formik.errors.pis)}
                            helperText={formik.touched.pis && formik.errors.pis}
                        />
                        <div className={styles['conjunto']}>
                            <TextField
                                id="numeroCt"
                                name="numeroCt"
                                label="Carteira de trabalho*"
                                value={formik.values.numeroCt}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.numeroCt && Boolean(formik.errors.numeroCt)}
                                helperText={formik.touched.numeroCt && formik.errors.numeroCt}
                                sx ={{ width: { mobile: '100%', tablet: '40%' } }}
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
                                sx ={{ width: { mobile: '100%', tablet: '20%' }, mt: { mobile: 3, tablet: 0} }}
                            />
                            <TextField
                                id="dataCt"
                                name="dataCt"
                                label="Data carteira de trabalho*"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={formik.values.dataCt}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.dataCt && Boolean(formik.errors.dataCt)}
                                helperText={formik.touched.dataCt && formik.errors.dataCt}
                                sx ={{ width: { mobile: '100%', tablet: '25%' }, mt: { mobile: 3, tablet: 0} }}
                            />
                            <FormControl
                            component="fieldset"
                            error={formik.touched.carteiraDigital && Boolean(formik.errors.carteiraDigital)}
                            sx ={{ width: { mobile: '100%', tablet: '15%' }, mt: { mobile: 3, tablet: 0} }}
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
                        </div>
                        <div className={styles['conjunto']}>
                            <TextField
                                id="tituloEleitoral"
                                name="tituloEleitoral"
                                label="Título eleitoral"
                                value={formik.values.tituloEleitoral}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.tituloEleitoral && Boolean(formik.errors.tituloEleitoral)}
                                helperText={formik.touched.tituloEleitoral && formik.errors.tituloEleitoral}
                                sx ={{ width: { mobile: '100%', tablet: '50%' } }}
                            />
                            <TextField
                                id="zona"
                                name="zona"
                                label="Zona"
                                value={formik.values.zona}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.zona && Boolean(formik.errors.zona)}
                                helperText={formik.touched.zona && formik.errors.zona}
                                sx ={{ width: { mobile: '100%', tablet: '25%' }, mt: { mobile: 3, tablet: 0} }}
                            />
                            <TextField
                                id="secao"
                                name="secao"
                                label="Seção"
                                value={formik.values.secao}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.secao && Boolean(formik.errors.secao)}
                                helperText={formik.touched.secao && formik.errors.secao}
                                sx ={{ width: { mobile: '100%', tablet: '25%' }, mt: { mobile: 3, tablet: 0} }}
                            />
                        </div>
                        <Box className={styles['botoes']}>
                            <Button onClick={handleBack}>Voltar</Button>
                            <Button onClick={handleNext} style={{ alignItems: 'right', marginBottom: '15px' }}>Próximo</Button>
                        </Box>
                    </Box>
                )}
                {step === 3 && (
                    <Box className={styles['formulario']}>
                        <div className={styles['conjunto']}>
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
                                sx ={{ width: { mobile: '100%', tablet: '70%' } }}
                            />
                            <TextField
                                id="dataAdmissao"
                                name="dataAdmissao"
                                label="Data de admissão*"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={formik.values.dataAdmissao}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.dataAdmissao && Boolean(formik.errors.dataAdmissao)}
                                helperText={formik.touched.dataAdmissao && formik.errors.dataAdmissao}
                                sx ={{ width: { mobile: '100%', tablet: '30%' }, mt: { mobile: 3, tablet: 0} }}
                            />
                        </div>
                        <div className={styles['conjunto']}>
                            <CurrencyInput
                                id="salario"
                                name="salario"
                                label="Salário*"
                                value={formik.values.salario}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                onFocus={formik.handleFocus}
                                error={formik.touched.salario && Boolean(formik.errors.salario)}
                                helperText={formik.touched.salario && formik.errors.salario}
                            />
                            <FormControl
                                variant="standard"
                                error={formik.touched.contratoExperiencia && Boolean(formik.errors.contratoExperiencia)}
                                fullWidth
                                style={{textAlign: 'left'}}
                                sx ={{ width: { mobile: '100%', tablet: '50%' }, mt: { mobile: 3, tablet: 0} }}
                            >
                                <InputLabel id="contratoExperiencia-label">Contrato de experiência*</InputLabel>
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
                                    <MenuItem value="Nenhum">Não se aplica</MenuItem>
                                </Select>
                                {formik.touched.contratoExperiencia && formik.errors.contratoExperiencia && (
                                    <FormHelperText>{formik.errors.contratoExperiencia}</FormHelperText>
                                )}
                            </FormControl>
                        </div>
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
                        />
                        <div className={styles['conjunto']}>
                            <FormControl
                                component="fieldset"
                                error={formik.touched.insalubridade && Boolean(formik.errors.insalubridade)}
                                sx ={{ width: { mobile: '100%', tablet: '20%' } }}
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
                                sx ={{ width: { mobile: '100%', tablet: '25%' }, mt: { mobile: 3, tablet: 0} }}
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
                                sx ={{ width: { mobile: '100%', tablet: '30%' }, mt: { mobile: 3, tablet: 0} }}
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
                                sx ={{ width: { mobile: '100%', tablet: '25%' }, mt: { mobile: 3, tablet: 0} }}
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
                        </div>
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
                        />
                        <Box className={styles['botoes']}>
                            <Button onClick={handleBack}>Voltar</Button>
                            <Button onClick={botaoFinalizarFuncionario}>Cadastrar</Button>
                        </Box>
                    </Box>
                )}
                {step === 4 && funcionarioId && !cadastroConcluido && (
                    <Box className={styles['formulario']}>
                        <div className={styles['formDependente']}>
                            <TabelaDependentes funcionario_id={funcionarioId}/>
                        </div>
                        <Box className={styles['botoes']}>
                            <Button onClick={handleBack}>Voltar</Button>
                            <Button onClick={botaoFinalizarCadastro}>Finalizar cadastro</Button>
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
    </ThemeProvider>
    );
};