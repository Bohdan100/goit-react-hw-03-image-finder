import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SearchbarContainer,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './SearchResult.styled';

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
        <SearchbarContainer>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormBtn type="submit">
              <SearchFormBtnLabel>Search</SearchFormBtnLabel>
            </SearchFormBtn>

            <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="searchName"
              value={searchName}
              onChange={this.handleNameChange}
            />
          </SearchForm>
        </SearchbarContainer>

        <ToastContainer
          autoClose={2000}
          position="top-center"
          theme="colored"
        />
      </>
    );
  }
}
