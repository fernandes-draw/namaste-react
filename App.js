import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://png.pngtree.com/template/20200628/ourmid/pngtree-pizza-restaurant-logo-design-template-premium-vector-image_387009.jpg'
        ></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    resName: 'Meghana Foods',
  },
  {
    resName: 'KFC',
  },
  {
    resName: "McDonald's",
  },
  {
    resName: 'Dominos',
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className='res-card' style={{ backgroundColor: 'lightgray' }}>
      <img
        className='res-logo'
        alt='res-logo'
        src='https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg'
      ></img>
      <h3>{resData?.resName}</h3>
      {/* <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4> */}
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resName='KFC' cuisine='Burger, Fast Food' />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
