import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CadastroEmpresa from '../components/cadastroEmpresa';
import CadastroFuncionario from '../components/cadastroFuncionario';

export default function GerenciamentoUsuarios({ usuario_id }) {
  const [empresa, setEmpresa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verificarEmpresa = async () => {
        const usuario_id = localStorage.getItem('usuario_id');
        if (!usuario_id) {
            setError('ID do usuário não fornecido');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3001/companies/${usuario_id}`);
            if (response.data && response.data.cnpj) {
            setEmpresa(response.data);
            } else {
            setEmpresa(null);
            }
        } catch (error) {
            console.error('Erro ao verificar empresa do usuário:', error);
            setError(error.response?.data?.message || 'Erro ao verificar empresa');
            setEmpresa(null);
        } finally {
            setLoading(false);
        }
    };

    verificarEmpresa();
  }, [usuario_id]);

  return (
    <div>
      {empresa ? (
        <div>
          <h2>Gerenciamento de funcionários para a empresa {empresa.nome_fantasia}</h2>
          <CadastroFuncionario empresa={empresa} />
        </div>
      ) : (
        <div>
          <h2>Cadastro de nova empresa</h2>
          <CadastroEmpresa usuario_id={usuario_id} />
        </div>
      )}
    </div>
  );
};
