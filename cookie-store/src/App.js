import React, { Component } from 'react';
import Form from './Form'
import Table from './Table'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      allStoreCookiesPerHourTotals: [],
      allStoreDailyTotal: ''
    }

    this.updateStores = this.updateStores.bind(this);
    this.getStoreIndex = this.getStoreIndex.bind(this);
    this.addStore = this.addStore.bind(this);
    this.changeStores = this.changeStores.bind(this);
    this.calculateAllStoreCookiesPerHourTotals = this.calculateAllStoreCookiesPerHourTotals.bind(this);
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
    }, () => this.setState({
      allStoreCookiesPerHourTotals: this.calculateAllStoreCookiesPerHourTotals()
    }, () => this.setState({
      allStoreDailyTotal: this.calculateAllStoreDailyTotal()
    })))
  }

  changeStores(store, index) {
    const updatedStores = [...this.state.stores];
    updatedStores[index] = store
    this.setState({
      stores: updatedStores
    }, () => this.setState({
      allStoreCookiesPerHourTotals: this.calculateAllStoreCookiesPerHourTotals()
    }, () => this.setState({
      allStoreDailyTotal: this.calculateAllStoreDailyTotal()
    })))
  }

  calculateAllStoreCookiesPerHourTotals() {
    const allStoreCookiesPerHourTotals = [];
    let total;

    for (let i = 0; i < Store.hoursOfOperation.length; i++) {
      total = 0;
      for (let j = 0; j < this.state.stores.length; j++) {
        total += parseInt(this.state.stores[j].cookiesPerHour[i]);    
      }
      allStoreCookiesPerHourTotals.push(total);
    }

    return allStoreCookiesPerHourTotals;
  }

  calculateAllStoreDailyTotal() {
    return this.state.allStoreCookiesPerHourTotals.reduce((cookies, totalCookies) => cookies + totalCookies);
  }

  render() {
    return (
      <div>
        <Form updateStores={this.updateStores} />
        <Table
          stores={this.state.stores}
          hoursOfOperation={Store.hoursOfOperation}
          allStoreCookiesPerHourTotals={this.state.allStoreCookiesPerHourTotals}
          allStoreDailyTotal={this.state.allStoreDailyTotal}
        />
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

Store.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
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
