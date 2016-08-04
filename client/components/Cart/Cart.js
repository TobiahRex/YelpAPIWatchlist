import React, { Component } from 'react'

import CartStore from '../../stores/CartStore.js'
import CartActions from '../../actions/ProductActions.js'
import CartTable from './CartTable.js'

function _getComponentState() {
  return { items: CartStore.getCart() }
}

export default class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = _getComponentState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    CartActions.getAllMods();
    CartStore.on('CHANGE', this._onChange);
  }

  componentWillUnmount() {
    CartStore.removeListener('CHANGE', this._onChange);
  }

  _onChange() {
    console.log('are you firing?');
    this.setState(_getComponentState());
  }

  // ModsDisplay will be a DIB render

  render() {
    return (
      <div className="container">
        <h1>Cart</h1>
        <div>
        </div>
        <CartTable items={this.state.items}/>
      </div>
    )
  }
}
