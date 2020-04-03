// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Wishlist extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
            <div className="col-sm-6">
                  <article className="card">
                    <div className="card-title">
                      <h2>{this.props.wishlist.user} said...</h2>
                      <p>{this.props.wishlist.email}</p>
                    </div>
                    <div className="card-body">
                        <strong>Need:</strong> {this.props.wishlist.need_list}<br/>
                        <strong>Have:</strong> {this.props.wishlist.have_list}<br/>
                        <strong>Location:</strong> {this.props.wishlist.where_to_find}
                    </div>
                    <div className="post-options">
                      <ul>
                        <li onClick={() => {
                          this.props.handleView('editWishlist',
                          this.props.wishlist)
                      }} className="btn btn-warning">edit wishlist</li>
                        <li onClick={() => {
                          this.props.handleDelete(this.props.wishlist.id)
                      }} className="btn btn-danger">delete wishlist</li>
                      </ul>
                    </div>
                  </article>
          </div>

    )
  }
}

// =============================
// EXPORT
// =============================
export default Wishlist
