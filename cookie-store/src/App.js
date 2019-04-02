import React, { Component } from 'react';
import Form from './Form'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: []
    }

    this.addStore = this.addStore.bind(this);
    this.updateStore = this.updateStore.bind(this);
  }

  addStore(store) {
    this.setState({
      stores: this.state.stores.concat(store)
    })
  }

  updateStore(newStore) {
    this.setState({
      stores: this.state.stores.map((store) => {
        if (newStore.name === store.name) {
          return newStore;
        } else {
          return store;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <Form addStore={this.addStore} updateStore={this.updateStore} />
      </div>
    );
  }
}

export default App;
