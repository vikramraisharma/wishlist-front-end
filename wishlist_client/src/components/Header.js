// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Header extends React.Component {
  render () {
    return (
      <header>
        <h1 className="display-4">Welcome to Wishlist</h1>
        <ul>
            <li onClick={() => {this.props.handleView('home')}} className="btn btn-primary">home</li>
            <li onClick={() => {this.props.handleView('addWishlist')}} className="btn btn-primary">new wishlist</li>
        </ul>
      </header>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Header
