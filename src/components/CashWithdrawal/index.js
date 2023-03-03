import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onButtonClick = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {denominationsList} = this.props

    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="act-container">
          <div className="top-con">
            <div className="alpha-logo">
              <p>S</p>
            </div>
            <h1 className="act-holder">Sarah Williams</h1>
          </div>
          <div className="mid-con">
            <p className="bal-head">Your Balance</p>
            <div className="bal-con">
              <p className="bal">{balance}</p>
              <p className="curr">In Rupees</p>
            </div>
          </div>
          <div className="end-con">
            <p className="head2">Withdraw</p>
            <p className="desc">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denoms">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  items={eachItem}
                  onButtonClick={this.onButtonClick}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
