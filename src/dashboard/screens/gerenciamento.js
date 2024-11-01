import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GerenciamentoUsuarios from '../pages/GerenciamentoUsuarios';

export default function Gerenciamento() {
    const [userType, setUserType] = useState('');

    useEffect(() => {
        const storedUserType = localStorage.getItem('tipo');
        if (storedUserType) {
          setUserType(storedUserType);
        }
      }, []);

    return (
      <GerenciamentoUsuarios />
    );
}