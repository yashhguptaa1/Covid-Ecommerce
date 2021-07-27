import React from 'react';

import Directory from '../../components/directory/Directory';

import './HomePage.scss';

const HomePage = (props) => {
  
  console.log(props);
  
  return(
  <div className='homepage'>
    <Directory />
  </div>
  )
};

export default HomePage;