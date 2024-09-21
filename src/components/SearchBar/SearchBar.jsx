import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <span className={styles.icon} onClick={handleSubmit}>
          🔍 
        </span>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Search images and photos"
          className={styles.input}
        />
      </form>
    </header>
  );
};

export default SearchBar;


