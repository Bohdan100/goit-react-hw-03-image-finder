import React, { Component } from 'react';
import '../../styles/styles.css';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleNameChange = event => {
    this.setState({
      searchName: event.currentTarget.value.trim().toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      toast.error('🦄 Please enter a valid search term!');
      return;
    }

    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    const { searchName } = this.state;
    return (
      <>
        <header className="Searchbar">
          <form onSubmit={this.handleSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="searchName"
              value={searchName}
              onChange={this.handleNameChange}
            />
          </form>
        </header>

        <ToastContainer
          autoClose={2000}
          position="top-center"
          theme="colored"
        />
      </>
    );
  }
}
