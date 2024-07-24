import React, { useState, useEffect } from 'react';
import CadastroFuncionario from '../components/cadastroFuncionario';
import CadastroEmpresa from '../components/cadastroEmpresa';

export default function GerenciamentoUsuarios() {
    return (
        <div>
            <CadastroEmpresa />
            <CadastroFuncionario />
        </div>
    );
}