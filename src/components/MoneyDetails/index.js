import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="transaction-container">
      <div className="balance-container bal-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="icon-bg"
        />
        <div>
          <p className="para">Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="balance-container income-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon-bg"
        />
        <div>
          <p className="para">Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="balance-container exp-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon-bg"
        />
        <div>
          <p className="para">Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
