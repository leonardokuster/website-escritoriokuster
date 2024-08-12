import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Loader from '@/src/components/Loader';

const TabelaDependentes = ({ funcionario_id }) => {
    const [dependentes, setDependentes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const funcionario_id = localStorage.getItem('funcionario_id');
        console.log(`Funcionario ID: ${funcionario_id}`);

        const fetchDependentes = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/employees/${funcionario_id}/relatives`);
                setDependentes(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDependentes();
    }, [funcionario_id]);

    const handleDelete = async (dependente_id) => {
        try {
            await axios.delete(`http://localhost:3001/employees/${funcionario_id}/relatives/${dependente_id}`);
            setDependentes(dependentes.filter(dep => dep.id !== dependente_id));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div><Loader/></div>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {dependentes.length === 0 ? (
                <p>Não há dependentes cadastrados.</p>
            ) : (
                <ul>
                    {dependentes.map(dependente => (
                        <li key={dependente.id}>
                            <span>{dependente.nomeDependente} - {dependente.nascimentoDependente}</span>
                            <Button onClick={() => handleDelete(dependente.id)}>Excluir</Button>
                        </li>
                    ))}
                </ul>
            )}
            <Button >Adicionar Novo Dependente</Button>
        </div>
    );
};

export default TabelaDependentes;
