import React from "react";
import CollectionsOverview from "../../components/collectionsOverview/collectionsOverview.component";
import { Route } from "react-router-dom";
import collection from "../collection/collection.component";

//revised to function-based component since it's not holding state anymore
const shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={collection} />
  </div>
);

export default shop;
