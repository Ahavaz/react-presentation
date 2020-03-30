import React from "react";
import { useHistory } from "react-router-dom";

const Catalogs = () => {
  let history = useHistory();

  return (
    <>
      <div>Página não encontrada</div>
      <button onClick={() => history.goBack()} />;
    </>
  );
};

export default Catalogs;
