import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
    state = {
        searchTrem: '',
    }

    handleChange = (event) => this.setState({ searchTrem: event.target.value });

    handleSubmit = (event) => {
        const { searchTrem } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTrem);

        event.preventDefault();
    }

  render() {
    return (
      <Paper elevation={6} style={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
            <TextField fullWidth label='Srearch...' onChange={this.handleChange} />
        </form>
      </Paper>
    )
  }
}

export default SearchBar;