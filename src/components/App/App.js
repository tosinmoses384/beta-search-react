import React from 'react';
import './App.css';
// import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

let business = {
  imageSrc: 'https://media.api.timbu.com/img/big/1-oak-place-abuja-68370.png',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business, business, business, business, business, business];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>beta-search</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}
export default App;








