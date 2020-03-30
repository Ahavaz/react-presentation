export const Types = {
  GET_CATALOGS_REQUEST: "catalogs/GET_CATALOGS_REQUEST",
  GET_CATALOGS_SUCCESS: "catalogs/GET_CATALOGS_SUCCESS",
  GET_CATALOGS_ERROR: "catalogs/GET_CATALOGS_ERROR",
  GET_CATALOG_BY_ID_REQUEST: "catalogs/GET_CATALOG_BY_ID_REQUEST",
  GET_CATALOG_BY_ID_SUCCESS: "catalogs/GET_CATALOG_BY_ID_SUCCESS",
  GET_CATALOG_BY_ID_ERROR: "catalogs/GET_CATALOG_BY_ID_ERROR",
  CLEAR_CATALOGS: "catalogs/CLEAR_CATALOGS"
};

const INITIAL_STATE = {
  data: [],
  catalog: null,
  loading: false,
  error: ""
};

export default function catalogs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_CATALOGS_REQUEST:
      return { ...state, loading: true };
    case Types.GET_CATALOGS_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case Types.GET_CATALOGS_ERROR:
      return { ...state, error: action.err };
    case Types.GET_CATALOG_BY_ID_REQUEST:
      return { ...state, loading: true };
    case Types.GET_CATALOG_BY_ID_SUCCESS:
      return { ...state, loading: false, catalog: action.data };
    case Types.GET_CATALOG_BY_ID_ERROR:
      return { ...state, error: action.err };
    case Types.CLEAR_CATALOGS:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const Creators = {
  getCatalogsRequest: () => ({ type: Types.GET_CATALOGS_REQUEST }),
  getCatalogsSuccess: data => ({
    type: Types.GET_CATALOGS_SUCCESS,
    data
  }),
  getCatalogsError: err => ({ type: Types.GET_CATALOGS_ERROR, err }),
  getCatalogByIdRequest: id => ({
    type: Types.GET_CATALOG_BY_ID_REQUEST,
    id
  }),
  getCatalogByIdSuccess: data => ({
    type: Types.GET_CATALOG_BY_ID_SUCCESS,
    data
  }),
  getCatalogByIdError: err => ({
    type: Types.GET_CATALOG_BY_ID_ERROR,
    err
  }),
  clearCatalogs: () => ({
    type: Types.CLEAR_CATALOGS
  })
};
