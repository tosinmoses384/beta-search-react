import React from 'react';
import './Business.css';


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

class Business extends React.Component {
    render() {
        return (<div className="Business">
        <div class="image-container">
          <img src='https://media.api.timbu.com/img/big/1-oak-place-abuja-68370.png' alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state} {business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>);
}
}

export default Business;