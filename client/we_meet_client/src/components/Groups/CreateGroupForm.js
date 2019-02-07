import React, { Component } from 'react';
import axios from "axios";


class CreateGroupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      location: '',
      category_id: '',
      categories: []
    };
    this.onChange = this.onChange.bind(this)
    this.createGroupHandler = this.props.createGroupHandler.bind(this)
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const response = await axios.get("http://localhost:3000/categories")
    const categories = response.data.categories
    this.setState({ categories });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  createGroup(e) {
    e.preventDefault();
    const group = {
      name: this.state.name,
      description: this.state.description,
      location: this.state.location,
      category_id: this.state.category_id
    }
    this.createGroupHandler(group);
  }


  render() {

    let categoryOptions
    categoryOptions = this.state.categories.map(category => {
      return (
        <option key={category.id} value={category.id}>{category.name}</option>
      )
    })

    return (
      <div className="fixed z-50 pin overflow-auto bg-smoke-dark flex">
        <div className="fixed shadow-inner max-w-md pin-b pin-x align-top m-auto justify-end p-8 bg-white w-full flex flex-col relative justify-center rounded h-auto shadow">
          <button onClick={this.props.hideFormHandler} className="modal_close">X</button>
          <form id="create-group-form" className="w-full max-w-md" onSubmit={this.createGroup.bind(this)}>
            <h1 className="font-normal text-3xl text-grey-darkest leading-loose my-3 w-full">Create a Group</h1>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className='w-full px-3 mb-6 md:mb-0'>
                <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 leading-tight">
                </input>
              </div>

              <div className='w-full px-3 mb-6 md:mb-0'>
                <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2">
                  Description
                </label>
                <textarea
                  type="textarea"
                  name="description"
                  onChange={this.onChange}
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 leading-tight">
                </textarea>
              </div>

              <div className='w-full px-3 mb-6 md:mb-0'>
                <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2">
                  Category
                </label>
                <select
                  name="category_id"
                  onChange={this.onChange}
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-state">
                  <option value="">Select option</option>
                  {categoryOptions}
                </select>
              </div>

              <div className='w-full px-3 mb-6 md:mb-0'>
                <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  onChange={this.onChange}
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 leading-tight">
                </input>
              </div>



              <div className='w-full px-3 mb-6 md:mb-0'>
                <input type="submit" value="Submit" className="select-none inline-block border border-transparent border-teal leading-tight px-4 py-2 rounded no-underline text-teal hover:bg-teal focus:bg-teal hover:text-white focus:text-white focus:shadow-outline">
                </input>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateGroupForm
