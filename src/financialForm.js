import React, { useState } from 'react'
import './FinancialForm.css'
import { ScaleLoader } from 'react-spinners';

const API_KEY = process.env.REACT_APP_GEMINI_API; 
 const FinancialForm = ({setResult}) => {

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
    const [isSent, setIsSent] = useState(true)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //console.log(values);

        const trainingPrompt = [
            {
                "parts": [
                    {
                        "text": "From next prompt I am gonna send you some parameters for predicting stock market share , tell me is it overvalued or undervalued , buy or not"
                    }
                ],
                "role": "user"
            },
            {
                "role": "model",
                "parts": [{
                    "text": "okay"
                }]
            },
            {
                "role": "user",
                "parts": [{
                    "text": "and also calculate - P/E ratio , P/B ratio, P/S Ratio, Dividend Yield, Earnings Growth in %, Debt-to-Equity Ratio, ROE % and give as a response"
                }]
            },
            {
                "role": "model",
                "parts": [{
                    "text": "okay"
                }]
            },
            {
                "role": "model",
                "parts": [{
                    "text": "always give response in form of HTML div and table tag"
                }]
            },
            {
                "role": "model",
                "parts": [{
                    "text": "okay"
                }]
            },
        ]
        let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`
        let messagesToSend = [
            ...trainingPrompt,
            {
                "role": "user",
                "parts": [{
                  "text": JSON.stringify(values)
                }]
              } 
        ]
        setIsSent(false)
        let res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "contents": messagesToSend
              })
        })
        let resjson = await res.json()
        setIsSent(true)
        let responseMessage = resjson.candidates[0].content.parts[0].text
        console.log(responseMessage)
        setResult(responseMessage)
    }
  return (
    <form className="form-container" onSubmit={handleSubmit}>
    <div>
        <label>Market Price per share</label>
        <input type="number" name="marketPrice" value={values.marketPrice} onChange={handleChange} />
    </div>
    <div>
        <label>Book Value per share</label>
        <input type="number" name="bookValue" value={values.bookValue} onChange={handleChange} />
    </div>
    <div>    
        <label>EBITDA</label>
        <input type="number" name="EBITDA" value={values.EBITDA} onChange={handleChange} />
    </div>
    <div>    
        <label>EBIT</label>
        <input type="number" name="EBIT" value={values.EBIT} onChange={handleChange} />
    </div>
    <div>    
        <label>EBIT Margin</label>
        <input type="number" name="EBIT_Margin" value={values.EBIT_Margin} onChange={handleChange} />
    </div>
    <div>    
        <label>Earnings per Share</label>
        <input type="number" name="Earnings_per_Share" value={values.Earnings_per_Share} onChange={handleChange} />
    </div>
    <div>    
        <label>Annual Dividend</label>
        <input type="number" name="annualDividend" value={values.annualDividend} onChange={handleChange} />
    </div>
    <div>    
        <label>Dividend Yield</label>
        <input type="number" name="Dividend_Yield" value={values.Dividend_Yield} onChange={handleChange} />
    </div>
    <div>    
        <label>PE ratio</label>
        <input type="number" name="PE_ratio" value={values.PE_ratio} onChange={handleChange} />
    </div>
    <div>    
        <label>Previous EPS</label>
        <input type="number" name="previousEps" value={values.previousEps} onChange={handleChange} />
    </div>
    <div>    
        <label>Current EPS</label>        
        <input type="number" name="currentEps" value={values.currentEps} onChange={handleChange} />
    </div>
    <div>    
        <label>Total Debt</label>        
        <input type="number" name="totalDebt" value={values.totalDebt} onChange={handleChange} />
    </div>
    <div>    
        <label>Total Equity</label>        
        <input type="number" name="totalEquity" value={values.totalEquity} onChange={handleChange} />
    </div>
    <div>    
        <label>Net Income</label>        
        <input type="number" name="netIncome" value={values.netIncome} onChange={handleChange} /> 
    </div>
    <div>    
        <button type="submit">Submit</button>
    </div>
    {
                isSent ?
                <button type="submit">Submit</button>
                :
                <ScaleLoader className='loader'/>

            }
    </form>
  )
}

export default FinancialForm