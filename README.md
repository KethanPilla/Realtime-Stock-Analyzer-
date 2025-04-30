# Stock Analyzer

A full-stack React application for analyzing stock investment opportunities based on financial metrics. This tool helps investors make informed decisions by calculating key financial ratios and providing buy/sell recommendations.

![Stock Analyzer]([https://github.com/yourusername/stockAnalyzer/raw/main/screenshot.png](https://www.freepik.com/free-vector/hand-drawn-stock-market-concept_20058480.htm#fromView=keyword&page=1&position=1&uuid=59af1c80-e3a7-47ac-84ef-933d3a28b023&query=Stock+Analysis)

## Features

- **Comprehensive Financial Analysis**: Calculate essential stock valuation metrics including P/E ratio, P/B ratio, P/S ratio, and more
- **Investment Recommendations**: Get clear buy/sell signals based on multiple financial indicators
- **Easy-to-Use Interface**: Simple form input for financial data with clear results display
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Key Metrics Calculated

- Price-to-Earnings (P/E) Ratio
- Price-to-Book (P/B) Ratio
- Price-to-Sales (P/S) Ratio
- Dividend Yield
- Earnings Growth
- Debt-to-Equity Ratio
- Return on Equity (ROE)

## Technologies Used

- **Frontend**: React, CSS
- **API Integration**: Google Gemini AI API for financial analysis
- **State Management**: React Hooks
- **UI Components**: Custom components with responsive design
- **Loading Indicators**: React Spinners

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/stockAnalyzer.git
   cd stockAnalyzer
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your Gemini API key:
   ```
   REACT_APP_GEMINI_API=your_api_key_here
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter the required financial metrics in the form fields:
   - Market Price per share
   - Book Value per share
   - EBITDA
   - EBIT
   - EBIT Margin
   - Earnings per Share
   - Annual Dividend
   - Dividend Yield
   - PE ratio
   - Previous EPS
   - Current EPS
   - Total Debt
   - Total Equity
   - Net Income

2. Submit the form to get a detailed analysis with investment recommendations.

3. Use the "Clear Results" button to return to the form for another analysis.

## API Integration

This application uses the Google Gemini AI API to analyze financial metrics and generate investment recommendations. You'll need to:

1. Obtain an API key from [Google AI Studio](https://ai.google.dev/)
2. Add the key to your environment variables as described in the installation section

## Project Structure

```
stockAnalyzer/
├── public/             # Static files
├── src/                # Source files
│   ├── App.js          # Main application component
│   ├── FinancialForm.js # Form component for financial metrics input
│   ├── Result.js       # Results display component
│   ├── App.css         # App-level styles
│   ├── FinancialForm.css # Form-specific styles
│   ├── Result.css      # Result-specific styles
│   └── ...
├── .env                # Environment variables (not committed to git)
└── README.md           # Project documentation
```

## Future Enhancements

- Historical data integration with financial APIs
- Chart visualizations for metrics and trends
- Portfolio management features
- Export functionality for analysis results
- User accounts to save and compare analyses

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Create React App](https://github.com/facebook/create-react-app)
- [Google Gemini AI](https://ai.google.dev/)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
