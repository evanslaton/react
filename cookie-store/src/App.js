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
    this.changeStore = this.changeStore.bind(this);
  }

  updateStores(store) {
    const storeIndex = this.getStoreIndex(store.name)
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
    })
  }

  changeStore(store, index) {
    const updatedStores = [...this.state.stores];
    updatedStores[index] = store
    this.setState({
      stores: updatedStores
    })
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
