// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
      user: '',
      email: '',
      need_list: '',
      have_list: '',
      where_to_find: '',
      id: null
    }
  }

  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  // handles submit
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.view.page === 'addWishlist') {
      // create a post
      this.props.handleCreate(this.state)
  } else if (this.props.view.page === 'editWishlist') {
      // update the post
      this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
    this.setState({
      user: this.props.formInputs.user,
      email: this.props.formInputs.email,
      need_list: this.props.formInputs.need_list,
      have_list: this.props.formInputs.have_list,
      where_to_find: this.props.formInputs.where_to_find,
      id: this.props.formInputs.id
    })
  }

  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input type="text" placeholder="your name" id="user" value={this.state.user} onChange={this.handleChange}/>
        </label>

        <label>
          email
          <input type="text" placeholder="your email" id="email" value={this.state.email} onChange={this.handleChange}/>
        </label>

        <label>
          What do you need?
          <input type="text" placeholder="I need..." id="need_list" value={this.state.need_list} onChange={this.handleChange}/>
        </label>

        <label>
          What can you offer?
          <input type="text" placeholder="I can offer: " id="have_list" value={this.state.have_list} onChange={this.handleChange}/>
        </label>

        <label>
          Where can you find me?
          <input type="text" placeholder="My area" id="where_to_find" value={this.state.where_to_find} onChange={this.handleChange}/>
        </label>

        <input type="submit" value="share"/>
      </form>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Form
