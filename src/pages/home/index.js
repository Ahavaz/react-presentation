import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/atoms/Button";

const Home = () => {
  const history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Button
        onClick={() => history.push("/catalogs")}
        // style={{ backgroundColor: "red" }}
      >
        Go to catalogs
      </Button>
    </div>
  );
};

export default Home;
