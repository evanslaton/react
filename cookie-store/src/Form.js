import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {}
    }
  }

  createNewStore

  render() {
    return (
      <form>
        <label for="name">Store Name</label>
        <input type="text" name="name" />
  
        <label for="minimumCustomers">Minimum Customers</label>
        <input type="number" name="minimumCustomers" />
  
        <label for="maximumCustomers">Maximum Customers</label>
        <input type="number" name="maximumCustomers" />
  
        <label for="averageCookiesPerCustomer">Average Cookies Per Customer</label>
        <input type="number" name="averageCookiesPerCustomer" />

        <button type="submit">Submit</button>
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