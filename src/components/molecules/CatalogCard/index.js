import React from "react";

import { Container } from "./style";

export default function CatalogCard({ catalog, ...props }) {
  console.log("active", catalog.active);

  return (
    <Container {...props} catalog={catalog}>
      <p>{catalog.name}</p>
    </Container>
  );
}
