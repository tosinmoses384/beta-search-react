import React from 'react';
import './App.css';
// import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>beta-search</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}
export default App;








