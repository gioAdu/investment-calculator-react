import InvestmentRow from './InvesmentRow/InvesmentRow'
import styles from './InvestmentData.module.css'

const InvestmentData = (props) => {
  const fullData = props.yearlyData
  return (
    <table className={styles.result}>
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
        {fullData.map((item) => (
          <InvestmentRow
            key={item.year}
            year={item.year}
            savingsEndOfYear={item.savingsEndOfYear}
            yearlyInterest={item.yearlyInterest}
            yearlyContribution={item.yearlyContribution}
            initialInvestment={item.initialInvestment}
          />
        ))}
      </tbody>
    </table>
  )
}

export default InvestmentData
