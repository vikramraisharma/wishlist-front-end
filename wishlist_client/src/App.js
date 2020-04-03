// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Main from './components/Main.js'

// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {
  state = {
    view: {
      page: 'home',
      pageTitle: 'Local Wishlists:'
    },
    formInputs: {
      user: null,
      email: null,
      need_list: null,
      have_list: null,
      where_to_find: null,
      id: null
    }
  }

  handleView = (view, wishlist) => {
    let pageTitle = ''
    let formInputs = {
        user: '',
        email: '',
        need_list: '',
        have_list: '',
        where_to_find: '',
        id: null
    }

    switch(view) {
      case 'home':
        pageTitle = 'I heard that...'
        break
      case 'addWishlist':
        pageTitle = 'What did you say?'
        break
      case 'editWishlist':
        pageTitle = 'What did you really say?'
        formInputs = {
            user: wishlist.user,
            email: wishlist.email,
            need_list: wishlist.need_list,
            have_list: wishlist.have_list,
            where_to_find: wishlist.where_to_find,
            id: wishlist.id
        }
        break
      default:
        break
    }

    this.setState ({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }

  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div className="container">
        <div className="container-fluid">
            <Header handleView={this.handleView} />
          <Main
            view={this.state.view}
            formInputs={this.state.formInputs}
            handleView={this.handleView}/>
        </div>
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default App
