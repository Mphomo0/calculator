import React from "react";

class InterestCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingTotal: "", // Stores the input value for shopping total
      numMonths: "", // Stores the input value for the number of months
      monthlyPayment: 0, // Stores the calculated monthly payment
      totalPaid: 0, // Stores the calculated total amount paid
    };
  }

  calculateInterest = () => {
    const { shoppingTotal, numMonths } = this.state; // Destructuring state values
    const total = Number(shoppingTotal); // Convert shoppingTotal to a number
    const months = parseInt(numMonths); // Convert numMonths to an integer
    const interestRate = 0.2; // Interest rate of 20%

    if (isNaN(total) || isNaN(months) || total <= 0 || months <= 0) {
      // Check if the input values are invalid
      this.setState({ monthlyPayment: 0, totalPaid: 0 });
    } else {
      const interest = total * interestRate; // Calculate the interest amount
      const payment = (total + interest) / months; // Calculate the monthly payment
      const totalPaid = total + interest; // Calculate the total amount paid

      this.setState({
        monthlyPayment: payment.toFixed(2), // Update the monthly payment in the state with 2 decimal places
        totalPaid: totalPaid.toFixed(2), // Update the total amount paid in the state with 2 decimal places
      });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); // Update the state with the input field's name and value
  };

  render() {
    const { shoppingTotal, numMonths, monthlyPayment, totalPaid } = this.state; // Destructuring state values

    return (
      <div className="interest-calculator">
        <h2>Interest Calculator</h2>
        <div className="input-container">
          <label htmlFor="shoppingTotal">Shopping Total:</label>
          <input
            type="number"
            id="shoppingTotal"
            name="shoppingTotal"
            value={shoppingTotal}
            onChange={this.handleChange} // Call handleChange when the input value changes
          />
        </div>
        <div className="input-container">
          <label htmlFor="numMonths">Number of Months:</label>
          <input
            type="number"
            id="numMonths"
            name="numMonths"
            value={numMonths}
            onChange={this.handleChange} // Call handleChange when the input value changes
          />
        </div>
        <button className="calculate-btn" onClick={this.calculateInterest}>
          Calculate
        </button>
        <div className="result-container">
          <h3>Monthly Payment: R{monthlyPayment}</h3>
          <h3>Total Paid: R{totalPaid}</h3>
        </div>
      </div>
    );
  }
}

export default InterestCalculator;
