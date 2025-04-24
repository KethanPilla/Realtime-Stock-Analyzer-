import React from 'react'

export const financialForm = () => {
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
    }
  return (
    <form className="form-container" onSubmit={handleSubmit}>
    <div>
        <label>Market Price per share</label>
        <input type="number" name="marketPrice" value={values.marketPrice} onChange={handleChange} />
    </div>
    </form>
  )
}

export default financialForm