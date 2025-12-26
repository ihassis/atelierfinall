import React, { useState } from 'react';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import image from './assests/investment-calculator-logo.png'

const App = () => {
  const [userInput, setUserInput] = useState(null);
  const [yearlyData, setYearlyData] = useState([]);
  const calculateHandler = (input) => {
    setUserInput(input);
    const data = [];
    let totalSavings = input.initialInvestment;
    let totalInterest = 0;
    for (let year = 1; year <= input.duration; year++) {
      const yearlyInterest = totalSavings * (input.interestRate / 100);
      totalInterest += yearlyInterest;
      totalSavings += yearlyInterest + input.annualContribution;
      const investedCapital = input.initialInvestment + (input.annualContribution * year);
      data.push({
        year: year,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        annualContribution: input.annualContribution,
        investedCapital: investedCapital,
        totalSavings: totalSavings
      });
    }

    setYearlyData(data);
  };
  const resetHandler = () => {
    setUserInput(null);
    setYearlyData([]);
  };
  return (
    <div className="app">
      <header className="header">
        <img 
          src={image} 
          alt="Investment Logo" 
          className="logo"
        />
        <h1>Investment Calculator</h1>
      </header>

      <main className="main-content">
        <Form 
          onCalculate={calculateHandler} 
          onReset={resetHandler} 
        />

        {yearlyData.length === 0 ? (
          <div className="no-data">
            <p>No Data available.</p>
          </div>
        ) : (
          <Table 
            data={yearlyData} 
            initialInvestment={userInput.initialInvestment} 
          />
        )}
      </main>
    </div>
  );
};

export default App;