import React, { Component } from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Vape Switch</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-right">
              <li><Link to="about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
              <li><Link to="mods">Mods</Link></li>
              <li><Link to="checkout">Checkout</Link></li>
              <li><Link to="cart"> <FontAwesome name="shopping-cart" /> asdf</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
