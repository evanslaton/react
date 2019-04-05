import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      minimumCustomers: '',
      maximumCustomers: '',
      averageCookiesPerCustomer: ''
    }
    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    if (this.state.name !== ''
      && this.state.minimumCustomers !== ''
      && this.state.maximumCustomers !== ''
      && this.state.averageCookiesPerCustomer !== '') {
        this.props.updateStores(this.state);
        this.setState(this.initialState);
    }
  }

  render() {
    const { name, minimumCustomers, maximumCustomers, averageCookiesPerCustomer } = this.state;

    return (
      <form>
        <label>Store Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>Minimum Customers
          <input
            type="number"
            name="minimumCustomers"
            value={minimumCustomers}
            step="0.1"
            min="0"
            onChange={this.handleChange}
          />
        </label>

        <label>Maximum Customers
          <input
            type="number"
            name="maximumCustomers"
            value={maximumCustomers}
            step="0.1"
            min="0"
            onChange={this.handleChange}  
          />
        </label>

        <label>Average Cookies Per Customer
          <input
            type="number"
            name="averageCookiesPerCustomer"
            value={averageCookiesPerCustomer}
            step="0.1"
            min="0"
            onChange={this.handleChange}
          />
        </label>

        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form;
