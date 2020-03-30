import { all, takeLatest } from "redux-saga/effects";

import { Types as CatalogsTypes } from "../ducks/catalogs";

import { getCatalogs, getCatalogById } from "./catalogs";

export default function* rootSaga() {
  yield all([
    takeLatest(CatalogsTypes.GET_CATALOGS_REQUEST, getCatalogs),
    takeLatest(CatalogsTypes.GET_CATALOG_BY_ID_REQUEST, getCatalogById)
  ]);
}
