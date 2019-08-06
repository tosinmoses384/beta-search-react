import React from 'react';
import './App.css';
// import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


// %%%%%%%%%%%%%%%%%%%%%%%%
// REMOVE HARD CODED VALUE
// %%%%%%%%%%%%%%%%%%%%%%%%
// // let business = {
//   imageSrc: 'https://media.api.timbu.com/img/big/1-oak-place-abuja-68370.png',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// };

// const businesses = [
//   business, 
//   business, 
//   business, 
//   business, 
//   business, 
//   business
// ];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    },
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({businesses: businesses});
    });
    // console.log(`You are searching for ${term}, ${location}, and ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>beta-search</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
export default App;








