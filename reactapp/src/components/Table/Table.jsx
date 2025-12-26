import React from 'react';
import './Table.css';

const Table = ({ data, initialInvestment }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return (
    <div className="table-container">
      <table className="results-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td className="highlight">{formatter.format(row.totalSavings)}</td>
              <td>{formatter.format(row.yearlyInterest)}</td>
              <td>{formatter.format(row.totalInterest)}</td>
              <td>{formatter.format(row.investedCapital)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;