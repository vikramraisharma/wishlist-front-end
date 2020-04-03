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
      pageTitle: 'I heard of that...'
    },
    formInputs: {
      name: null,
      image: null,
      body: null,
      id: null
    }
  }

  handleView = (view, post) => {
    let pageTitle = ''
    let formInputs = {
      name: '',
      image: '',
      body: '',
      id: null
    }

    switch(view) {
      case 'home':
        pageTitle = 'I heard that...'
        break
      case 'addPost':
        pageTitle = 'What did you say?'
        break
      case 'editPost':
        pageTitle = 'What did you really say?'
        formInputs = {
          name: post.name,
          image: post.iamge,
          body: post.body,
          id: post.id
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
      <div className="large-container">
        <Header/>
        <div className="main-container">
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
