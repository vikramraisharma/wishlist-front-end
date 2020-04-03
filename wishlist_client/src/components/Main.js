// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
import Wishlist from './Wishlist.js'
import Form from './Form.js'
import Header from './Header'

// =============================
// COMPONENT CLASS
// =============================

class Main extends React.Component {
  state = {
    wishlists: []
  }

  fetchWishlists = async () => {
    let response = await fetch('http://localhost:3000/wishlists')
    let data = await response.json()
    console.log(data);
    this.setState({ wishlists: data })
  }

  handleCreate = async (createData) => {
    let response = await fetch('http://localhost:3000/wishlists',
    {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    this.props.handleView('home')
    this.setState(prevState => {
      return {
        wishlists: [...prevState.wishlists, data]
      }
    })
  }

  handleUpdate = async (updateData) => {
    let response = await fetch(`http://localhost:3000/wishlists/${updateData.id}`,
    {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    this.props.handleView('home')
    this.fetchWishlists()
  }

  handleDelete = async (id) => {
    let reponse = await fetch(`http://localhost:3000/wishlists/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    this.setState(prevState => {
      const wishlists = prevState.wishlists.filter(wishlist => wishlist.id !== id)
      return {
        wishlists
      }
    })
  }

  componentDidMount() {
    this.fetchWishlists()
  }



  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <main>

        
        <div className="row">
        { this.props.view.page === 'home'
          ? this.state.wishlists.map(wishlist => (
              <Wishlist
                key={wishlist.id}
                wishlist={wishlist}
                handleView={this.props.handleView}
                handleDelete={this.handleDelete}
              />
            ))
          : <Form
              handleCreate={this.handleCreate}
              handleUpdate={this.handleUpdate}
              formInputs={this.props.formInputs}
              view={this.props.view}
            />
        }
        </div>
      </main>
    )
  }
}
// =============================
// EXPORT
// =============================
export default Main
