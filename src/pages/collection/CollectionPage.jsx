import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/CollectionItem";

import { selectCollection } from "../../redux/shop/shop.selectors";

import styled from "styled-components";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

//The first parameter is the state which is overall reducers state from top
//The second argument is ownProps which is the props of the component that were wrapping
//in our connect. It basically gives us all of the props that we are getting on this current component
//including our match object that we get from root component that is passing our Collection.js on our shoppage
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
`;

export default connect(mapStateToProps)(CollectionPage);
