import React from 'react';

import './Collection.scss';

const CollectionPage = ({ match }) => {

    console.log(match.params.collectionId);

    return (
      <div className='collection-page'>
        <h2 className='title'>Collection Page</h2>
      </div>
    );
  };
  
export default CollectionPage;