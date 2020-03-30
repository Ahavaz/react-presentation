import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { Creators as CatalogsActions } from "../../store/ducks/catalogs";

import CatalogCard from "../../components/molecules/CatalogCard";
import Button from "../../components/atoms/Button";

const Catalogs = () => {
  let history = useHistory();

  const dispatch = useDispatch();

  const [catalogActive, setCatalogActive] = useState(false);

  const { data, loading } = useSelector(state => state.catalogs);

  useEffect(() => {
    dispatch(CatalogsActions.getCatalogsRequest());

    return () => {
      CatalogsActions.clearCatalogs();
    };
  }, [dispatch]);

  useEffect(() => {
    console.log(catalogActive);
  }, [catalogActive]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 24,
        color: "blue",
        flexDirection: "column"
      }}
    >
      {loading ? (
        <div>Loading</div>
      ) : !data.length ? (
        <div>Nenhum catálogo encontrado</div>
      ) : (
        <>
          {data.map(catalog => (
            <CatalogCard catalog={catalog} style={{ margin: 10 }} />
          ))}
          <Button style={{ marginTop: 20 }} onClick={() => history.goBack()}>
            Voltar
          </Button>
        </>
      )}
    </div>
  );
};

export default Catalogs;
