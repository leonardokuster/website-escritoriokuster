import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Loader from '@/src/components/Loader';
import styles from '../styles/tabelaFuncionarios.module.css';
import TabelaDependentes from './tabelaDependentes';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function GerenciamentoFuncionarios({ empresa_id }) {
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        const buscarFuncionarios = async () => {
            const empresa_id = localStorage.getItem('empresa_id');

            try {
                const response = await axios.get(`http://localhost:3001/employees/${empresa_id}`);
                setFuncionarios(response.data);
            } catch (error) {
                setError(error.response?.data?.message || 'Erro ao buscar funcionários');
            } finally {
                setLoading(false);
            }
        };

        buscarFuncionarios();
    }, [empresa_id]);


    const handleRevisarClick = (funcionario) => {
        setFuncionarioSelecionado(funcionario);
    };

    const handleCancelarEdicao = () => {
        setFuncionarioSelecionado(null);
    };

    const handleSalvarEdicao = async (funcionarioEditado) => {
        try {
            const response = await axios.put(`http://localhost:3001/employees/${empresa_id}`, funcionarioEditado);
            setFuncionarios((prev) => prev.map(f => (f.id === response.data.id ? response.data : f)));
            setFuncionarioSelecionado(null);
        } catch (error) {
            console.error('Erro ao salvar edição do funcionário:', error.message);
        }
    };

    if (loading) {
        return <div><Loader/></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Box>
            {funcionarioSelecionado ? (
                <FormularioEdicaoFuncionario
                funcionario={funcionarioSelecionado}
                onCancelar={handleCancelarEdicao}
                onSalvar={handleSalvarEdicao}
                />
            ) : (
                <TabelaFuncionarios funcionarios={funcionarios} onRevisarClick={handleRevisarClick} />
            )}
        </Box>
    );
}

const TabelaFuncionarios = ({ funcionarios, onRevisarClick }) => (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="tabela de funcionários">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="center">CPF</StyledTableCell>
            <StyledTableCell align="center">Admissão</StyledTableCell>
            <StyledTableCell align="center">Função</StyledTableCell>
            <StyledTableCell align="center">Salário</StyledTableCell>
            <StyledTableCell align="center">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {funcionarios.map((funcionario) => (
            <StyledTableRow key={funcionario.id}>
              <StyledTableCell component="th" scope="row">
                {funcionario.nome}
              </StyledTableCell>
              <StyledTableCell align="center">{funcionario.cpf}</StyledTableCell>
              <StyledTableCell align="center">{funcionario.dataAdmissao}</StyledTableCell>
              <StyledTableCell align="center">{funcionario.funcao}</StyledTableCell>
              <StyledTableCell align="center">{funcionario.salario}</StyledTableCell>
              <StyledTableCell align="center">
                <Button onClick={() => onRevisarClick(funcionario)} variant="contained">
                  Editar
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
);

  
const FormularioEdicaoFuncionario = ({ funcionario, onCancelar, onSalvar }) => {
    const [formData, setFormData] = useState({ ...funcionario });
    const [dependentes, setDependentes] = useState(funcionario.dependentes || []);
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSalvar({ ...formData, dependentes });
    };

    const fetchAddress = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.data.erro) {
                setEndereco(response.data.logradouro);
                setBairro(response.data.bairro);
                setCidade(response.data.localidade);
                setEstado(response.data.uf);
                formData.setFieldValue('endereco', response.data.logradouro);
                formData.setFieldValue('bairro', response.data.bairro);
                formData.setFieldValue('cidade', response.data.localidade);
                formData.setFieldValue('estado', response.data.uf);
            } else {
                console.error('CEP não encontrado');
            }
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
        }
    };
    
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" sx={{ marginTop: '15px' }}>Editar Funcionário</Typography>
            <fieldset className={styles['section']}>
                <legend className={styles['legenda']}>Informações Pessoais</legend>
                <div className={styles['coluna']}>
                    <div className={styles['formField']}>
                        <label>Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>E-mail:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Telefone:</label>
                        <input
                            type="text"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles['coluna']}>
                    <div className={styles['formField']}>
                        <label>Sexo:</label>
                        <select
                            name="sexo"
                            value={formData.sexo}
                            onChange={handleChange}
                        >
                            <option value="">
                                <em>Selecione</em>
                            </option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="prefiroNaoInformar">Prefiro não informar</option>
                        </select>
                    </div>
                    <div className={styles['formField']}>
                        <label>Cor/Etnia:</label>
                        <select
                            name="corEtnia"
                            value={formData.corEtnia}
                            onChange={handleChange}
                        >
                            <option value="">
                                <em>Selecione</em>
                            </option>
                            <option value="branco">Branco</option>
                            <option value="pardo">Pardo</option>
                            <option value="negro">Negro</option>
                            <option value="amarelo">Amarelo</option>
                            <option value="indigena">Indígena</option>
                        </select>
                    </div>
                    <div className={styles['formField']}>
                        <label>Data nascimento:</label>
                        <input
                            type="date"
                            name="dataNascimento"
                            value={formData.dataNascimento}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles['coluna']}>
                    <div className={styles['formField']}>
                        <label>Local nascimento:</label>
                        <input
                            type="text"
                            name="localNascimento"
                            value={formData.localNascimento}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>CPF:</label>
                        <input
                            type="text"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles['coluna']}>
                    <div className={styles['formField']}>
                        <label>RG:</label>
                        <input
                            type="text"
                            name="rg"
                            value={formData.rg}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Órgão expedidor:</label>
                        <select
                            name="orgaoExpedidor"
                            value={formData.orgaoExpedidor}
                            onChange={handleChange}
                        >
                            <option value="">
                                <em>Selecione</em>
                            </option>
                            <option value="SSP">Secretaria de Segurança Pública (SSP)</option>
                            <option value="DETRAN">Departamento Estadual de Trânsito (DETRAN)</option>
                            <option value="IFP">Instituto de Identificação Félix Pacheco (IFP)</option>
                            <option value="IGP">Instituto Geral de Perícias (IGP)</option>
                            <option value="PC">Polícia Civil (PC)</option>
                            <option value="PM">Polícia Militar (PM)</option>
                            <option value="MTE">Ministério do Trabalho e Emprego (MTE)</option>
                            <option value="DIC">Diretoria de Identificação Civil (DIC)</option>
                            <option value="MAE">Ministério da Aeronáutica (MAE)</option>
                            <option value="MEX">Ministério do Exército (MEX)</option>
                            <option value="MMA">Ministério da Marinha (MMA)</option>
                        </select>
                    </div>
                    <div className={styles['formField']}>
                        <label>Data:</label>
                        <input
                            type="date"
                            name="dataRg"
                            value={formData.dataRg}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles['section']}>
                <legend className={styles['legenda']}>Endereço</legend>
                <div className={styles['coluna']}>
                    <div className={styles['formField']}>
                        <label>CEP:</label>
                        <input
                            type="text"
                            name="cep"
                            value={formData.cep}
                            onChange={(e) => {
                                formik.handleChange(e);
                                fetchAddress(e.target.value);
                            }}
                        />
                    </div>
                    <div className={styles['endereco']}>
                        <div className={styles['formField']}>
                            <label>Endereço:</label>
                            <div className={styles['rua']}>
                                <input
                                    type="text"
                                    name="endereco"
                                    value={formData.endereco}
                                    disabled
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={styles['formField']}>
                            <label>nº:</label>
                            <input
                                type="text"
                                name="numeroCasa"
                                value={formData.numeroCasa}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles['formField']}>
                        <label>Complemento:</label>
                        <input
                            type="text"
                            name="complementoCasa"
                            value={formData.complementoCasa}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles['coluna']}>
                    <div className={styles['formField']}>
                        <label>Bairro:</label>
                        <input
                            type="text"
                            name="bairro"
                            value={formData.bairro}
                            disabled
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Cidade:</label>
                        <input
                            type="text"
                            name="cidade"
                            value={formData.cidade}
                            disabled
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Estado:</label>
                        <input
                            type="text"
                            name="estado"
                            value={formData.estado}
                            disabled
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles['section']}>
                <legend className={styles['legenda']}>Informações Familiares</legend>
                <div className={styles['coluna']}>
                    <div className={styles['formField']}>
                        <label>Nome da mãe:</label>
                        <input
                            type="text"
                            name="nomeMae"
                            value={formData.nomeMae}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Nome do pai:</label>
                        <input
                            type="text"
                            name="nomePai"
                            value={formData.nomePai}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Estado civil:</label>
                        <select
                            name="estadoCivil"
                            value={formData.estadoCivil}
                            onChange={handleChange}
                        >
                            <option value="solteiro">Solteiro(a)</option>
                            <option value="casado">Casado(a)</option>
                            <option value="separado">Separado(a) judicialmente</option>
                            <option value="divorciado">Divorciado(a)</option>
                            <option value="viuvo">Viúvo(a)</option>
                            <option value="uniaoEstavel">União estável</option>
                        </select>
                    </div>
                    <div className={styles['formField']}>
                        <label>Nome cônjuge:</label>
                        <input
                            type="text"
                            name="nomeConjuge"
                            value={formData.nomeConjuge}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles['formFieldDependente']}>
                    <h2>Lista de Dependentes</h2>
                    <TabelaDependentes funcionario_id={formData.id} />
                </div>
            </fieldset>
            <fieldset className={styles['section']}>
                <legend className={styles['legenda']}>Escolaridade e Documentos</legend>
                <div className={styles['coluna']}>
                    <div className={styles['formField']}>
                        <label>Escolaridade:</label>
                        <select
                            name="escolaridade"
                            value={formData.escolaridade}
                            onChange={handleChange}
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="ensinoFundamentalIncompleto">Ensino Fundamental Incompleto</option>
                            <option value="ensinoFundamentalCompleto">Ensino Fundamental Completo</option>
                            <option value="ensinoMedioIncompleto">Ensino Médio Incompleto</option>
                            <option value="ensinoMedioCompleto">Ensino Médio Completo</option>
                            <option value="ensinoTecnico">Ensino Técnico</option>
                            <option value="superiorIncompleto">Superior Incompleto</option>
                            <option value="superiorCompleto">Superior Completo</option>
                            <option value="posGraduacao">Pós-Graduação</option>
                            <option value="mestrado">Mestrado</option>
                            <option value="doutorado">Doutorado</option>
                            <option value="posDoutorado">Pós-Doutorado</option>
                            <option value="nenhumaEscolaridade">Nenhuma Escolaridade</option>
                        </select>
                    </div>
                    <div className={styles['formField']}>
                        <label>PIS:</label>
                        <input
                            type="text"
                            name="pis"
                            value={formData.pis}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Carteira de trabalho:</label>
                        <input
                            type="text"
                            name="numeroCt"
                            value={formData.numeroCt}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Série:</label>
                        <input
                            type="text"
                            name="serie"
                            value={formData.serie}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles['coluna']}>
                    <div className={styles['formField']}>
                        <label>Data:</label>
                        <input
                            type="date"
                            name="dataCt"
                            value={formData.dataCt}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Título eleitoral:</label>
                        <input
                            type="text"
                            name="tituloEleitoral"
                            value={formData.tituloEleitoral}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Zona:</label>
                        <input
                            type="text"
                            name="zona"
                            value={formData.zona}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Seção:</label>
                        <input
                            type="text"
                            name="secao"
                            value={formData.secao}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles['section']}>
                <legend className={styles['legenda']}>Informações Profissionais</legend>
                <div className={styles['coluna']}>
                    <div className={styles['formField']}>
                        <label>Função:</label>
                        <input
                            type="text"
                            name="funcao"
                            value={formData.funcao}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Data admissão:</label>
                        <input
                            type="date"
                            name="dataAdmissao"
                            value={formData.dataAdmissao}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Salário:</label>
                        <input
                            type="text"
                            name="salario"
                            value={formData.salario}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Horários:</label>
                        <input
                            type="text"
                            name="horarios"
                            value={formData.horarios}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles['coluna']} style={{alignItems: 'center'}}>
                    <div className={styles['formField']}>
                        <label>Contrato de experiência:</label>
                        <select
                            name="contratoExperiencia"
                            value={formData.contratoExperiencia}
                            onChange={handleChange}
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="30+30dias">30 + 30 dias</option>
                            <option value="45+45dias">45 + 45 dias</option>
                            <option value="Nenhum">Não se aplica</option>
                        </select>
                    </div>
                    <div className={styles['formField']}>
                        <label>Insalubridade:</label>
                        <input
                            type="checkbox"
                            name="insalubridade"
                            checked={formData.insalubridade}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Periculosidade:</label>
                        <input
                            type="checkbox"
                            name="periculosidade"
                            checked={formData.periculosidade}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Quebra de caixa:</label>
                        <input
                            type="checkbox"
                            name="quebraDeCaixa"
                            checked={formData.quebraDeCaixa}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Vale transporte:</label>
                        <input
                            type="checkbox"
                            name="valeTransporte"
                            checked={formData.valeTransporte}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles['formField']}>
                        <label>Quantidade de vales:</label>
                        <input
                            type="number"
                            name="quantidadeVales"
                            value={formData.quantidadeVales}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </fieldset>
            
            <Box sx={{ display: 'flex', gap: 2 }} className={styles['buttonContainer']}>
                <button type="submit">Salvar</button>
                <button type="button" onClick={onCancelar}>Cancelar</button>
            </Box>
        </Box>
    );
};

FormularioEdicaoFuncionario.propTypes = {
  funcionario: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    sexo: PropTypes.string.isRequired,
    corEtnia: PropTypes.string.isRequired,
    dataNascimento: PropTypes.string.isRequired,
    localNascimento: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    rg: PropTypes.string.isRequired,
    orgaoExpedidor: PropTypes.string.isRequired,
    dataRg: PropTypes.string.isRequired,
    cep: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    numeroCasa: PropTypes.string.isRequired,
    complementoCasa: PropTypes.string.isRequired,
    bairro: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    nomeMae: PropTypes.string.isRequired,
    nomePai: PropTypes.string.isRequired,
    escolaridade: PropTypes.string.isRequired,
    estadoCivil: PropTypes.string.isRequired,
    nomeConjuge: PropTypes.string.isRequired,
    pis: PropTypes.string.isRequired,
    numeroCt: PropTypes.string.isRequired,
    serie: PropTypes.string.isRequired,
    dataCt: PropTypes.string.isRequired,
    tituloEleitoral: PropTypes.string.isRequired,
    zona: PropTypes.string.isRequired,
    secao: PropTypes.string.isRequired,
    funcao: PropTypes.string.isRequired,
    dataAdmissao: PropTypes.string.isRequired,
    salario: PropTypes.string.isRequired,
    contratoExperiencia: PropTypes.string.isRequired,
    horarios: PropTypes.string.isRequired,
    insalubridade: PropTypes.string.isRequired,
    periculosidade: PropTypes.string.isRequired,
    quebraDeCaixa: PropTypes.string.isRequired,
    valeTransporte: PropTypes.string.isRequired,
    quantidadeVales: PropTypes.number.isRequired,
  }).isRequired,
  onCancelar: PropTypes.func.isRequired,
  onSalvar: PropTypes.func.isRequired,
};

TabelaFuncionarios.propTypes = {
  funcionarios: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    dataAdmissao: PropTypes.string.isRequired,
    funcao: PropTypes.string.isRequired,
    salario: PropTypes.number.isRequired,
  })).isRequired,
  onRevisarClick: PropTypes.func.isRequired,
};