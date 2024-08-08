import React, { useState } from 'react';
import axios from 'axios';

const TaxCalculator = () => {
  const [salary, setSalary] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [results, setResults] = useState(null);

  const calculateTax = () => {
    axios.post('/api/calculate-tax', { salary, frequency })
      .then(response => setResults(response.data))
      .catch(error => console.error('Error calculating tax:', error));
  };

  return (
    <div>
      <h2>Calculadora de Taxas</h2>
      <input
        type="number"
        value={salary}
        onChange={e => setSalary(e.target.value)}
        placeholder="Salário Bruto"
      />
      <select value={frequency} onChange={e => setFrequency(e.target.value)}>
        <option value="monthly">Mensal</option>
        <option value="annual">Anual</option>
        <option value="semi-monthly">Semanal</option>
        <option value="weekly">Semanal</option>
        <option value="daily">Diário</option>
        <option value="hourly">Por Hora</option>
      </select>
      <button onClick={calculateTax}>Calcular</button>
      {results && (
        <div>
          <p>IRRF: {results.irrf}</p>
          <p>INSS: {results.inss}</p>
          <p>Total Retido: {results.totalTax}</p>
          <p>Pagamento Líquido: {results.netSalary}</p>
          <p>Taxa de Imposto Marginal: {results.marginalTaxRate}%</p>
          <p>Taxa de Imposto Média: {results.averageTaxRate}%</p>
          <p>Custo para a Empresa: {results.totalCost}</p>
        </div>
      )}
    </div>
  );
}

export default TaxCalculator;
