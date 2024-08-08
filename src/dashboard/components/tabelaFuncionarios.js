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
import CadastroDependente from './cadastroDependente';
import styles from '../styles/tabelaFuncionarios.module.css';

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
        return <div><Loader /></div>;
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSalvar(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Editar Funcionário</Typography>
        <fieldset>
            <legend className={styles['legenda']}>Informações Pessoais</legend>
            <div>
                <label>Nome</label>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>E-mail</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Telefone</label>
                <input
                    type="text"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Sexo</label>
                <input
                    type="text"
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Cor/Etnia</label>
                <input
                    type="text"
                    name="corEtnia"
                    value={formData.corEtnia}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Data nascimento</label>
                <input
                    type="date"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Local nascimento</label>
                <input
                    type="text"
                    name="localNascimento"
                    value={formData.localNascimento}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Nacionalidade</label>
                <input
                    type="text"
                    name="nacionalidade"
                    value={formData.nacionalidade}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>CPF</label>
                <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>RG</label>
                <input
                    type="text"
                    name="rg"
                    value={formData.rg}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Órgão expedidor</label>
                <input
                    type="text"
                    name="orgaoExpedidor"
                    value={formData.orgaoExpedidor}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Data</label>
                <input
                    type="date"
                    name="dataRg"
                    value={formData.dataRg}
                    onChange={handleChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <legend className={styles['legenda']}>Endereço</legend>
            <div>
                <label>CEP</label>
                <input
                    type="text"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Endereço</label>
                <input
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Número</label>
                <input
                    type="text"
                    name="numeroCasa"
                    value={formData.numeroCasa}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Complemento</label>
                <input
                    type="text"
                    name="complementoCasa"
                    value={formData.complementoCasa}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Bairro</label>
                <input
                    type="text"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Cidade</label>
                <input
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Estado</label>
                <input
                    type="text"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <legend className={styles['legenda']}>Informações Familiares</legend>
            <label>Nome da mãe</label>
            <input
                type="text"
                name="nomeMae"
                value={formData.nomeMae}
                onChange={handleChange}
            />
            <label>Nome do pai</label>
            <input
                type="text"
                name="nomePai"
                value={formData.nomePai}
                onChange={handleChange}
            />
            <label>Estado civil</label>
            <input
                type="text"
                name="estadoCivil"
                value={formData.estadoCivil}
                onChange={handleChange}
            />
            <label>Nome cônjuge</label>
            <input
                type="text"
                name="nomeConjuge"
                value={formData.nomeConjuge}
                onChange={handleChange}
            />
            <p>Cadastrar novo dependente</p>
            <CadastroDependente/>
        </fieldset>
        <fieldset>
            <legend className={styles['legenda']}>Escolaridade e Documentos</legend>
            <div>
                <label>Escolaridade</label>
                <input
                    type="text"
                    name="escolaridade"
                    value={formData.escolaridade}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>PIS</label>
                <input
                    type="text"
                    name="pis"
                    value={formData.pis}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Carteira de trabalho</label>
                <input
                    type="text"
                    name="numeroCt"
                    value={formData.numeroCt}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Série</label>
                <input
                    type="text"
                    name="serie"
                    value={formData.serie}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Data</label>
                <input
                    type="date"
                    name="dataCt"
                    value={formData.dataCt}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Título eleitoral</label>
                <input
                    type="text"
                    name="tituloEleitoral"
                    value={formData.tituloEleitoral}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Zona</label>
                <input
                    type="text"
                    name="zona"
                    value={formData.zona}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Seção</label>
                <input
                    type="text"
                    name="secao"
                    value={formData.secao}
                    onChange={handleChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <legend className={styles['legenda']}>Informações Profissionais</legend>
            <label>Função</label>
            <input
                type="text"
                name="funcao"
                value={formData.funcao}
                onChange={handleChange}
            />
            <label>Data admissão</label>
            <input
                type="date"
                name="dataAdmissao"
                value={formData.dataAdmissao}
                onChange={handleChange}
            />
            <label>Salário</label>
            <input
                type="text"
                name="salario"
                value={formData.salario}
                onChange={handleChange}
            />
            <label>Contrato de experiência</label>
            <input
                type="text"
                name="contratoExperiencia"
                value={formData.contratoExperiencia}
                onChange={handleChange}
            />
            <label>Horários</label>
            <input
                type="text"
                name="horarios"
                value={formData.horarios}
                onChange={handleChange}
            />
            <label>Insalubridade</label>
            <input
                type="boolean"
                name="insalubridade"
                value={formData.insalubridade}
                onChange={handleChange}
            />
            <label>Periculosidade</label>
            <input
                type="boolean"
                name="periculosidade"
                value={formData.periculosidade}
                onChange={handleChange}
            />
            <label>Quebra de caixa</label>
            <input
                type="boolean"
                name="quebraDeCaixa"
                value={formData.quebraDeCaixa}
                onChange={handleChange}
            />
            <label>Vale transporte</label>
            <input
                type="boolean"
                name="valeTransporte"
                value={formData.valeTransporte}
                onChange={handleChange}
            />
            <label>Quantidade de vales</label>
            <input
                type="number"
                name="quantidadeVales"
                value={formData.quantidadeVales}
                onChange={handleChange}
            />
        </fieldset>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
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
    cpf: PropTypes.string.isRequired,
    email: PropTypes.string,
    telefone: PropTypes.string,
    // Adicione mais campos conforme necessário
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
