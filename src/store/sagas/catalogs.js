import { retry, put } from "redux-saga/effects";

import { catalogsApi } from "../../services/api";

import { Creators as CatalogsActions } from "../ducks/catalogs";

export function* getCatalogs() {
  try {
    // const response = yield retry(10, 2000, catalogsApi.get, `/catalogs`);

    const response = [
      { id: 1, name: "Vestimenta", active: true },
      { id: 2, name: "Eletrônicos", active: false }
    ];

    yield put(CatalogsActions.getCatalogsSuccess(response));
  } catch (err) {
    yield put(CatalogsActions.getCatalogsError(err.message));
  }
}

export function* getCatalogById(action) {
  try {
    const response = yield retry(
      10,
      2000,
      catalogsApi.get,
      `/catalogs/${action.id}`
    );

    yield put(CatalogsActions.getCatalogByIdSuccess(response.data));
  } catch (err) {
    yield put(CatalogsActions.getCatalogByIdError(err.message));
  }
}
