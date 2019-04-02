import React, { Component } from 'react';
import Form from './Form'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: []
    }

    this.updateStores = this.updateStores.bind(this);
    this.getStoreIndex = this.getStoreIndex.bind(this);
    this.addStore = this.addStore.bind(this);
    this.changeStores = this.changeStores.bind(this);
  }

  updateStores(storeInfo) {
    const storeIndex = this.getStoreIndex(storeInfo.name)

    const store = new Store(
      storeInfo.name,
      storeInfo.minimumCustomers,
      storeInfo.maximumCustomers,
      storeInfo.averageCookiesPerCustomer
    )

    if (storeIndex === -1) {
      this.addStore(store);
    } else {
      this.changeStores(store, storeIndex);
    }
  }

  getStoreIndex(storeName) {
    for (let i = 0; i < this.state.stores.length; i++) {
      if (storeName === this.state.stores[i].name) {
        return i;
      }
    }
    return -1;
  }

  addStore(storeToAdd) {
    this.setState({
      stores: this.state.stores.concat(storeToAdd)
    }, () => console.log("Add Stores", this.state.stores))
  }

  changeStores(store, index) {
    const updatedStores = [...this.state.stores];
    updatedStores[index] = store
    this.setState({
      stores: updatedStores
    }, () => console.log("Change Stores", this.state.stores))
  }

  render() {
    return (
      <div>
        <Form updateStores={this.updateStores} />
      </div>
    );
  }
}

export default App;

function Store(name, minimumCustomers, maximumCustomers, averageCookiesPerCustomer) {
  this.name = name.toLowerCase();
  this.minimumCustomers = parseInt(minimumCustomers);
  this.maximumCustomers = parseInt(maximumCustomers);
  this.averageCookiesPerCustomer = parseFloat(averageCookiesPerCustomer);
  this.cookiesPerHour = this.calculateCookiesPerHour();
  this.dailyCookieTotal = this.getDailyCookieTotal();
  this.employeesPerHour = [];
}

Store.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am'];
Store.allStoreCookiesPerHourTotals = [];
Store.AllStoresEmployeesPerHourTotals = [];

Store.prototype.calculateCookiesPerHour = function() {
  const cookiesPerHour = [];
  for (let i = 0; i < Store.hoursOfOperation.length; i++) {
    cookiesPerHour.push(Math.floor(this.getRandomNumber() * this.averageCookiesPerCustomer));
  }
  return cookiesPerHour;
}

Store.prototype.getDailyCookieTotal = function() {
  return this.cookiesPerHour.reduce((cookies, storeDailyCookieTotal) => cookies + storeDailyCookieTotal) 
}

Store.prototype.calculateEmployeesPerHour = function() {
// TODO
}

Store.prototype.getRandomNumber = function() {
  return Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers;
}

