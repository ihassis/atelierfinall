import React,{useState} from 'react';
//import App from '../../App';
import './Form.css'
function Form({onCalculate,onReset}) {
   const [initialInvestment, setInitialInvestment] = useState(0);
   const [annualContribution, setAnnualContribution] = useState(0);
   const [interestRate, setInterestRate] = useState(0);
   const [duration, setDuration] = useState(0);
   const handleClick = () => {
    onCalculate({
        initialInvestment: +initialInvestment,
        annualContribution: +annualContribution,
        interestRate: +interestRate,
        duration: +duration
    })
   }
   const handleSubmit = () => {
    setInitialInvestment(10000);
    setAnnualContribution(1000);
    setInterestRate(10);
    setDuration(10);
    onReset();
   }
   return(
    <div className='form-container'>
        <div className='form-grid'>
            <div className='input-group'>
            <label>CURRENT SAVINGS ($)</label>
            <input 
            type="number"
            value={initialInvestment}
            onChange={(e)=>setInitialInvestment(e.target.value)}
            />
            </div>
            <div className='input-group'>
            <label>YEARLY SAVINGS ($)</label>
            <input
            type="number" 
            value={annualContribution}
            onChange={(e)=>setAnnualContribution(e.target.value)}/>
            </div>
            <div className='input-group'>
            <label>EXPECTED INTEREST (%,PER YEAR)</label>
            <input 
            value={interestRate}
            type="number"
            onChange={(e)=>setInterestRate(e.target.value)
            }/>
            </div>
            <div className='input-group'>
            <label>INVESTMENT DURATION ($)</label>
            <input 
            value={duration}
            type="number"
            onChange={(e)=>setDuration(e.target.value)
            }/>
            </div>
        </div>
        <div className='buttonn'>
            <button className='btn btn-reset' type='reset' onClick={handleSubmit}>Reset</button>
            <button className='btn btn-calculate' type='submit' onClick={handleClick}>Calculate</button>
        </div>
        
    </div>
   )

}
export default Form;