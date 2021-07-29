import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collection-overview/CollectionsOverview.container";
import CollectionPageContainer from "../collection/CollectionPageContainer";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

// componentDidMount() {
//   const { updateCollections } = this.props;
//   const collectionRef = firestore.collection("collections");

//   fetch(
//     "https://firestore.googleapis.com/v1/projects/ztm-ecom-yg1/databases/(default)/documents/collections"
//   )
//     .then((response) => response.json())
//     .then((collections) => console.log(collections));
// }
