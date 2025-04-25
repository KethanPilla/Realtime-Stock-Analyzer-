import React, { useState } from 'react'

 const FinancialForm = () => {
    const [values, setValues] = useState({
        marketPrice: "",
        bookValue: "",
        EBITDA: "",
        EBIT: "",
        EBIT_Margin: "",
        Earnings_per_Share: "",
        annualDividend: "",
        Dividend_Yield: "",
        PE_ratio: "",
        previousEps: "",
        currentEps: "",
        totalDebt: "",
        totalEquity: "",
        netIncome: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    }
  return (
    <form className="form-container" onSubmit={handleSubmit}>
    <div>
        <label>Market Price per share</label>
        <input type="number" name="marketPrice" value={values.marketPrice} onChange={handleChange} />
        <label>Book Value per share</label>
        <input type="number" name="bookValue" value={values.bookValue} onChange={handleChange} />
        <label>EBITDA</label>
        <input type="number" name="EBITDA" value={values.EBITDA} onChange={handleChange} />
        <label>EBIT</label>
        <input type="number" name="EBIT" value={values.EBIT} onChange={handleChange} />
        <label>EBIT Margin</label>
        <input type="number" name="EBIT_Margin" value={values.EBIT_Margin} onChange={handleChange} />
        <label>Earnings per Share</label>
        <input type="number" name="Earnings_per_Share" value={values.Earnings_per_Share} onChange={handleChange} />
        <label>Annual Dividend</label>
        <input type="number" name="annualDividend" value={values.annualDividend} onChange={handleChange} />
        <label>Dividend Yield</label>
        <input type="number" name="Dividend_Yield" value={values.Dividend_Yield} onChange={handleChange} />
        <label>PE ratio</label>
        <input type="number" name="PE_ratio" value={values.PE_ratio} onChange={handleChange} />
        <label>Previous EPS</label>
        <input type="number" name="previousEps" value={values.previousEps} onChange={handleChange} />
        <label>Current EPS</label>        
        <input type="number" name="currentEps" value={values.currentEps} onChange={handleChange} />
        <label>Total Debt</label>        
        <input type="number" name="totalDebt" value={values.totalDebt} onChange={handleChange} />
        <label>Total Equity</label>        
        <input type="number" name="totalEquity" value={values.totalEquity} onChange={handleChange} />
        <label>Net Income</label>        
        <input type="number" name="netIncome" value={values.netIncome} onChange={handleChange} /> 
        <button type="submit">Submit</button>
    </div>
    </form>
  )
}

export default FinancialForm
