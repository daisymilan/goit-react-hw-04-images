import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
};

const handleSubmit = event => {
  event.preventDefault();
  onSubmit(query);
  setQuery('');
};

return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </form>
    </header>
);


export default SearchBar;
