import { useState } from 'react'
import logo from './assets/investment-calculator-logo.png'
import Header from './components/Header/Header'
import InputForm from './components/InputForm/InputForm'
import InvestmentData from './components/InvesmentData/InvesmentData'

const App = () => {
  const [yearlyData, SetYearlyData] = useState([])

  const calculateHandler = (userInput) => {
    const INITAL_ARR = []

    const initialInvestment = +userInput.currentSavings
    let currentSavings = +userInput.currentSavings
    const yearlyContribution = +userInput.yearlyContriburion
    const expectedReturn = +userInput.expectedReturn / 100
    const duration = +userInput.duration

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      INITAL_ARR.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialInvestment: initialInvestment,
      })
    }
    SetYearlyData(INITAL_ARR)
  }

  return (
    <div>
      <Header logo={logo} alt={'logo'} />
      <InputForm calculateHandler={calculateHandler} />
      {yearlyData.length > 0 && <InvestmentData yearlyData={yearlyData} />}
    </div>
  )
}

export default App
