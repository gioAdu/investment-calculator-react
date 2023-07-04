const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const InvestmentRow = (props) => {
  const total_interest = formatter.format(
    props.savingsEndOfYear -
      props.initialInvestment -
      props.yearlyContribution * props.year
  )
  const total_invested = formatter.format(
    props.initialInvestment + props.yearlyContribution * props.year
  )

  return (
    <tr>
      <td> {props.year}</td>
      <td>{formatter.format(props.savingsEndOfYear)}</td>
      <td>{formatter.format(props.yearlyInterest)}</td>
      <td>{total_interest}</td>
      <td>{total_invested}</td>
    </tr>
  )
}

export default InvestmentRow
