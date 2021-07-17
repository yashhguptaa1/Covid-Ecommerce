import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/CollectionItem';

import {selectCollection} from '../../redux/shop/shop.selectors';

import './Collection.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };
  
  //The first parameter is the state which is overall reducers state from top
  //The second argument is ownProps which is the props of the component that were wrapping
  //in our connect. It basically gives us all of the props that we are getting on this current component
  //including our match object that we get from root component that is passing our Collection.js on our shoppage
  const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });
  
  export default connect(mapStateToProps)(CollectionPage);