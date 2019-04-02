import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      minimumCustomers: null,
      maximumCustomers: null,
      averageCookiesPerCustomer: null
    }
    this.state = this.initialState;

    this.updateName = this.updateName.bind(this);
    this.updateMinimumCustomers = this.updateMinimumCustomers.bind(this);
    this.updateMaximumCustomers = this.updateMaximumCustomers.bind(this);
    this.updateAverageCookiesPerCustomer = this.updateAverageCookiesPerCustomer.bind(this);
  }

  updateName(event) {
    this.setState({
      name: event.target.value.toLowerCase()
    }
    , () => console.log("Store Name", this.state.name))
  }

  updateMinimumCustomers(event) {
    this.setState({
      minimumCustomers: event.target.value
    }
    , () => console.log("Min Customers", this.state.minimumCustomers))
  }

  updateMaximumCustomers(event) {
    this.setState({
      maximumCustomers: event.target.value
    }
    , () => console.log("Max Customers", this.state.maximumCustomers))
  }

  updateAverageCookiesPerCustomer(event) {
    this.setState({
      averageCookiesPerCustomer: event.target.value
    }
    , () => console.log("Cookies Per Customer", this.state.averageCookiesPerCustomer))
  }

  render() {
    return (
      <form>
        <label>Store Name
          <input type="text" name="name" onChange={this.updateName} />
        </label>

        <label>Minimum Customers
          <input
            type="number"
            name="minimumCustomers"
            step="0.1"
            min="0"
            onChange={this.updateMinimumCustomers}
          />
        </label>

        <label>Maximum Customers
          <input
            type="number"
            name="maximumCustomers"
            step="0.1"
            min="0"
            onChange={this.updateMaximumCustomers}  
          />
        </label>

        <label>Average Cookies Per Customer
          <input
            type="number"
            name="averageCookiesPerCustomer"
            step="0.1"
            min="0"
            onChange={this.updateAverageCookiesPerCustomer}
          />
        </label>

        <button type="button" onClick={this.handleClick}>Submit</button>
      </form>
    )
  }
}

export default Form;

function Store(name, minimumCustomers, maximumCustomers, averageCookiesPerCustomer) {
  this.name = name.toLowerCase();
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.cookiesPerHour = [];
  this.employeesPerHour = [];
}