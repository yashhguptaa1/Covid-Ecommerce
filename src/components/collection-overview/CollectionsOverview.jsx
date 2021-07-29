import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/CollectionPreview";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import styled from "styled-components";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});


const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default connect(mapStateToProps)(CollectionsOverview);
